import React from 'react';
import { useQuerry } from '@apollo/react-hooks'
import { Pokemon } from '../components/Pokemon'

export default function PokemonsContainer() {
    const { data: { pokemons = [] } = {} } = useQuerry(GET_POKEMONS, {
        variables: { first: 9 },
    })

    return (
        <p>pokemon is here</p>
    )
}