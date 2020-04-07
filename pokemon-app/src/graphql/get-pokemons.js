import gql from 'graphql-tag'
//Helpful utilities for parsing GraphQL queries. Includes:
//'gql' is a JavaScript template literal tag that parses GraphQL query strings into the standard GraphQL AST.
//'/loader' A webpack loader to preprocess queries

export const GET_POKEMONS = gql`
    query pokemons($first: Int!) {
        pokemons(first: $first) {
            id
            name
            image
            maxHP
            maxCP
            attacks {
                special {
                    name
                    damage
                }
            }
        }
    }
`