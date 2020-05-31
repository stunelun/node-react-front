import { ApolloProvider } from "@apollo/react-hooks";
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore } from "redux";
import client from "./apollo";
import App from './App';
// import rootReducer from './Components/store/modules';
import store from './Components/store/modules/changeCurrencyPair';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <ApolloProvider client = {client}>
    <Provider store = {store}>
      <App />
    </Provider>
  </ApolloProvider>
  ,document.getElementById("potato") as HTMLElement
);