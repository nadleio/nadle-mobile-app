import React from "react";

import ApolloProvider from "./lib/ApolloProvider";
import App from "./App";

function Index() {
  return (
    <ApolloProvider>
      <App />
    </ApolloProvider>
  );
}

export default Index;
