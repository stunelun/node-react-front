import { ApolloProvider } from "@apollo/react-hooks";
import React from 'react';
import ReactDOM from 'react-dom';
import client from "./apollo";
import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <ApolloProvider client = {client}>
    <App />
  </ApolloProvider>
  ,document.getElementById("potato") as HTMLElement
);


// import { ApolloProvider } from "react-apollo";
// import client from "./apollo";

// ReactDOM.render(
//     <ApolloProvider client={client}>
//       <App />
//     </ApolloProvider>,
//     document.getElementById("potato") as HTMLElement
// );
