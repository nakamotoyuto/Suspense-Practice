import React from 'react'
import { getPokemon } from '../../utils/getPokemon'

const pokemon = getPokemon()

export default function List() {
  const data = pokemon.read()
  const pokemonResult = data.results
  return (
    <div>
      {
        pokemonResult.map((pokemon) => {
          return (
            <div key={pokemon.name}>
              {pokemon.name}
            </div>
          )
        })
      }
    </div>
  )
}
