import React from "react";
import { AppContainer } from "./Routes";
console.disableYellowBox = true;

function App() {
  const Layout = AppContainer(true);
  return <Layout />;
}
export default App;
