import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

export default client;






















// import ApolloClient, {Operation} from "apollo-boost";

// const client = new ApolloClient({
//   request: async(operation: Operation) => {
//       operation.setContext({
//           headers: {
//             "X-JWT": localStorage.getItem("jwt") || ""
//           }
//       })
//   },
//   uri: "https://api.korbit.co.kr/v1/ticker/detailed/all"
// });

// export default client;