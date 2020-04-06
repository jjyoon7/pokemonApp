import React from 'react';
import { useQuerry } from '@apollo/react-hooks'
import { Pokemon } from '../components/Pokemon'

export default function PokemonsContainer() {
    const { data: { pokemons = [] } = {} } = useQuerry(GET_POKEMONS, {
        variables: { first: 9 },
    })

    return (
        <div className='container'>
            {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} props={pokemon}/>)}
        </div>
    )
}