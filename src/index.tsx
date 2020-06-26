import { ApolloProvider } from "@apollo/react-hooks";
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import client from "./apollo";
import App from './App';
import reducers from './reducers'

const store = createStore(reducers);

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <ApolloProvider client = {client}>
    <Provider store = {store}>
      <App />
    </Provider>
  </ApolloProvider>
  ,document.getElementById("candleChartApp") as HTMLElement
);