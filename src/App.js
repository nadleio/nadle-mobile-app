import React from "react";
import { AppContainer } from "./Routes";
import { StatusBar } from "react-native";
import { ViewFlex } from "./assets/styles/styles";
console.disableYellowBox = true;

function App() {
  const Layout = AppContainer(true);

  return (
    <ViewFlex>
      <StatusBar barStyle="light-content" />
      <Layout />
    </ViewFlex>
  );
}
export default App;
