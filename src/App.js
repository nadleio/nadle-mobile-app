/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { MaterialIndicator as Spinner } from "react-native-indicators";
import styled, { ThemeProvider } from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { AppContainer, AppContainerNot } from "./Router";

import ContextTheme from "./lib/ContextTheme";
import ContextAuth from "./lib/ContextAuth";
import ContextSelf from "./lib/ContextSelf";
import ContextLoading from "./lib/ContextLoading";

import useTheme from "./lib/utils/useTheme";
import FadeInView from "./components/AnimateView";

import { userInformation } from "./Fragments/userInfo";

import Loading from "./components/Loading";

const Container = styled.View`
  flex: 1;
`;

const CURRENT_USER = gql`
  query {
    getSelf {
      message
      success
      errorCode
      data {
        ...UserInformation
      }
    }
  }
  ${userInformation}
`;

console.disableYellowBox = true;

function App() {
  const { themeMode, setThemeMode, theme } = useTheme();

  const [loaded, setLoaded] = useState(false);
  const [logged, setLogged] = useState(null);
  const [loadingModal, setLoadingModal] = useState(false);
  const [self, setSelf] = useState({});

  const { loading, data } = useQuery(CURRENT_USER);

  const persistenceKey = "persistenceKey";

  const persistNavigationState = async navState => {
    await AsyncStorage.setItem(persistenceKey, JSON.stringify(navState));
  };

  const loadNavigationState = async () => {
    const jsonString = await AsyncStorage.getItem(persistenceKey);
    return JSON.parse(jsonString);
  };

  // AsyncStorage.removeItem("authToken");
  // AsyncStorage.removeItem("persistenceKey");

  useEffect(() => {
    function isLogged() {
      AsyncStorage.getItem("authToken").then(authToken => {
        if (!loading && Boolean(authToken)) {
          const user = data.getSelf.data;
          console.log(user);

          setSelf(user);
        }
        setLogged(Boolean(authToken));

        setTimeout(() => {
          setLoaded(true);
        }, 2000);
      });
    }

    isLogged();
  }, [data, loading]);

  return (
    <ContextAuth.Provider value={{ logged, setLogged }}>
      <ContextSelf.Provider value={{ ...self, updateSelf: setSelf }}>
        <ContextTheme.Provider value={{ themeMode, setThemeMode }}>
          <ContextLoading.Provider value={{ loadingModal, setLoadingModal }}>
            <ThemeProvider theme={theme}>
              <Container backgroundColor={theme.styled.BACKGROUND}>
                {loaded ? (
                  <FadeInView>
                    {logged ? (
                      <AppContainer
                        persistNavigationState={persistNavigationState}
                        loadNavigationState={loadNavigationState}
                      />
                    ) : (
                      <AppContainerNot
                        persistNavigationState={persistNavigationState}
                        loadNavigationState={loadNavigationState}
                      />
                    )}
                    {loadingModal && <Loading />}
                  </FadeInView>
                ) : (
                  <Spinner
                    size={32}
                    animationDuration={1400}
                    color={theme.colors.PRIMARY}
                  />
                )}
              </Container>
            </ThemeProvider>
          </ContextLoading.Provider>
        </ContextTheme.Provider>
      </ContextSelf.Provider>
    </ContextAuth.Provider>
  );
}

export default App;
