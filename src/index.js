import React from "react";

import ApolloProvider from "./lib/ApolloProvider";
import App from "./App";

function Nadle() {
  return (
    <ApolloProvider>
      <App />
    </ApolloProvider>
  );
}

export default Nadle;
