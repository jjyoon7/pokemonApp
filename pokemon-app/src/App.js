import React from 'react';
import ApolloClinet from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import PokemonsContainer from './containers/PokemonsContainer'

function App() {
  const client = new ApolloClinet({
    uri: 'https://graphql-pokemon.now.sh/'
  })

  return (
    <ApolloProvider client={client}>
        <main>
          <PokemonsContainer/>
        </main>
    </ApolloProvider>
  );
}

export default App;
