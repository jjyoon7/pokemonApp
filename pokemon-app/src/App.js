import React from 'react';
import ApolloClinet from 'apollo-boost'


function App() {
  const clinet = new ApolloClinet({
    uri: 'https://graphql-pokemon.now.sh/'
  })

  return (
    <div className="App">
      test
    </div>
  );
}

export default App;
