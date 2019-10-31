import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { MaterialIndicator as Spinner } from "react-native-indicators";
import { StatusBar } from "react-native";
import styled, { ThemeProvider } from "styled-components";

import { AppContainer } from "./Router";

import ApolloProvider from "./lib/ApolloProvider";
import ContextTheme from "./lib/ContextTheme";
import ContextAuth from "./lib/ContextAuth";
import ContextSelf from "./lib/ContextSelf";

import useTheme from "./lib/utils/useTheme";
import FadeInView from "./components/AnimateView";

const Container = styled.View`
  flex: 1;
`;

console.disableYellowBox = true;

function App() {
  const { themeMode, setThemeMode, theme } = useTheme();
  const [loaded, setLoaded] = useState(false);
  const [logged, setLogged] = useState(false);

  const [self, setSelf] = useState({
    uid: "b1b758d8-0d57-42c9-b086-4576bd1951ed",
    type: "USER",
    picture: "https://avatars1.githubusercontent.com/u/14861369?s=460&v=4",
    username: "carlosvq",
    email: "test@test.com",
    name: "Carlos Valdez"
  });
  // AsyncStorage.removeItem("authToken");

  useEffect(() => {
    const isLogged = () => {
      AsyncStorage.getItem("authToken")
        .then(authToken => {
          setLogged(Boolean(authToken));
          setTimeout(() => {
            setLoaded(true);
          }, 2000);
        })
        .catch(() => {
          // Sentry capture
        });
    };

    isLogged();
  }, []);

  const Layout = AppContainer(logged);
  return (
    <ApolloProvider>
      <ContextAuth.Provider value={{ logged, setLogged }}>
        <ContextSelf.Provider value={{ ...self, updateSelf: setSelf }}>
          <ContextTheme.Provider value={{ themeMode, setThemeMode }}>
            <StatusBar backgroundColor="blue" barStyle="light-content" />
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
              </Container>
            </ThemeProvider>
          </ContextTheme.Provider>
        </ContextSelf.Provider>
      </ContextAuth.Provider>
    </ApolloProvider>
  );
}

export default App;
