import React from 'react';
import { ApolloProvider } from "react-apollo";
import ReactDOM from 'react-dom';
import client from "./apollo";
import App from './App';


// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById("potato") as HTMLElement
);

