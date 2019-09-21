import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { MaterialIndicator as Spinner } from "react-native-indicators";
import { StatusBar } from "react-native";
import styled, { ThemeProvider } from "styled-components";

import { AppContainer } from "./Router";

import ApolloProvider from "./lib/ApolloProvider";
import ContextTheme from "./lib/ContextTheme";
import ContextAuth from "./lib/ContextAuth";

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
      </ContextAuth.Provider>
    </ApolloProvider>
  );
}

export default App;
