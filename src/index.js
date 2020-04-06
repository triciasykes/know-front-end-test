import React from "react";
import Amplify, { Auth } from "aws-amplify";
import config from "./config";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ApolloClient from "apollo-client";
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from "react-apollo"
import AWSAppSyncClient from 'aws-appsync';
import gql from 'graphql-tag'



import * as serviceWorker from "./serviceWorker";

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  API: {
    graphql_headers: async () => {
      const currentSession = await Auth.currentSession();
      return { Authorization: currentSession.getIdToken().getJwtToken() };
    }
  }
});

const appConfig = {
  aws_appsync_graphqlEndpoint: config.graphql.URL,
  aws_appsync_region: config.graphql.REGION,
  aws_appsync_authenticationType: config.graphql.AUTHENTICATION_TYPE
};

Amplify.configure(appConfig);


const httpLink = new HttpLink({
  uri: appConfig.aws_appsync_graphqlEndpoint
})
const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
