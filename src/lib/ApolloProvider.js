import React from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { ApolloClient } from "apollo-client";
import { setContext } from "apollo-link-context";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";

import { SRV_GRAPHQL_URL } from "../config";

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = await AsyncStorage.getItem("AuthToken");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Token ${token}` : ""
    }
  };
});

const httpLink = createHttpLink({
  uri: SRV_GRAPHQL_URL
});

export const createCache = () => new InMemoryCache();

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: createCache(),
  resolvers: {}
});

function Provider({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default Provider;
