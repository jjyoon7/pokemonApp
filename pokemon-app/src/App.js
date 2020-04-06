import React from 'react';
import ApolloClinet from 'apollo-boost'
import { ApolloProvider} from '@apollo/react-hooks'

function App() {
  const client = new ApolloClinet({
    uri: 'https://graphql-pokemon.now.sh/'
  })

  return (
    <ApolloProvider client={client}>
        <div className="App">
          test
        </div>
    </ApolloProvider>
  );
}

export default App;
