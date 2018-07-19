import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './index.css';
import App from './main/App';
// import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_GRAPHQL_ENDPOINT}/graphql`,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
// registerServiceWorker();
