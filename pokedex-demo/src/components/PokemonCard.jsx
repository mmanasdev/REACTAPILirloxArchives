import React from 'react'
import {useState} from 'react'

export default function PokemonCard({pokemonData}) {

    const [isShiny,setIsShiny] = useState(false)
    
     if (!pokemonData) {
     return <h1>Cargando pokemon...</h1>
  }
  return (
    <div className='bg-white rounded-lg p-4'>
          <img src={isShiny ? pokemonData.sprites.front_shiny : pokemonData.sprites.front_default}
      alt="pokemonimage" 
      className='w-full h-48 object-cover' />
      <div>
        <h2 className='text-xl font-semibold capitalize'>
            {pokemonData.name}
        </h2>
        <p>ID: {pokemonData.id}</p>
      </div>
          <button className='bg-blue-800 rounded-lg p-2 text-white'
          onClick={() => setIsShiny(!isShiny)}>
            Button
            </button>
    </div>
  )
}