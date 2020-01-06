/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { MaterialIndicator as Spinner } from "react-native-indicators";
import styled, { ThemeProvider } from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { AppContainer } from "./Router";

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
  const [logged, setLogged] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);
  const [self, setSelf] = useState({});

  // AsyncStorage.removeItem("authToken");

  const { loading, data } = useQuery(CURRENT_USER);

  useEffect(() => {
    function isLogged() {
      AsyncStorage.getItem("authToken").then(authToken => {
        if (!loading && Boolean(authToken)) {
          const user = data.getSelf.data;

          console.log(user);

          setSelf({
            uid: user.id,
            type: "USER",
            picture: user.avatar,
            username: user.username,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            followers: user.followers.count,
            following: user.following.count,
            biography: user.biography,
            link: user.link
          });
        }
        setLogged(Boolean(authToken));

        setTimeout(() => {
          setLoaded(true);
        }, 2000);
      });
    }
    isLogged();
  }, [data, loading]);

  const Layout = AppContainer(logged);

  return (
    <ContextAuth.Provider value={{ logged, setLogged }}>
      <ContextSelf.Provider value={{ ...self, updateSelf: setSelf }}>
        <ContextTheme.Provider value={{ themeMode, setThemeMode }}>
          <ContextLoading.Provider value={{ loadingModal, setLoadingModal }}>
            <ThemeProvider theme={theme}>
              <Container backgroundColor={theme.styled.BACKGROUND}>
                {loaded ? (
                  <FadeInView>
                    <Layout />
                  </FadeInView>
                ) : (
                  <Spinner
                    size={32}
                    animationDuration={1400}
                    color={theme.colors.PRIMARY}
                  />
                )}

                {loadingModal && <Loading />}
              </Container>
            </ThemeProvider>
          </ContextLoading.Provider>
        </ContextTheme.Provider>
      </ContextSelf.Provider>
    </ContextAuth.Provider>
  );
}

export default App;
