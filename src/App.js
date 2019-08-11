import React from "react";
import { StatusBar } from "react-native";
import styled, { ThemeProvider } from "styled-components";

import { AppContainer } from "./Routes";

import ContextTheme from "./lib/ContextTheme";

import useTheme from "./lib/utils/useTheme";

const Container = styled.View`
  flex: 1;
`;

function App() {
  const { themeMode, setThemeMode, theme } = useTheme();

  const Layout = AppContainer();
  return (
    <ContextTheme.Provider value={{ themeMode, setThemeMode }}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <ThemeProvider theme={theme}>
        <Container themeName={themeMode}>
          <Layout />
        </Container>
      </ThemeProvider>
    </ContextTheme.Provider>
  );
}

export default App;
