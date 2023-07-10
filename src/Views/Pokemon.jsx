import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PokemonCard from '../Components/PokemonCard'

import Spinner from '../Components/Spinner'

const Pokemon = () => {

// useParams va a  buscar los parámtros de la URL y te los devuelve
// es name porque tiene que ser idéntico al /:name de App.
    const { name } = useParams()
    const [pokemon, setPokemon] = useState({})

    const [isLoading, setIsLoading] = useState(true);


// "segundo" llamado a la API para cargar la información del pokemon seleccionado y luego mostrarla en la Card de bootstrap
    useEffect(()=>{
        getPokemon(name)
    },[name])

    const getPokemon = async(name) => {
        const res = await fetch(`${"https://pokeapi.co/api/v2/pokemon"}/${name}`)
        const data = await res.json()
        const src = data.sprites.other.dream_world.front_default;
        const stats = data.stats.map((stat) => ({
            name: stat.stat.name,
            base: stat.base_stat,
        }))

        setPokemon({ name, stats, src })
        setIsLoading(false)
    }

        if (isLoading) {return <Spinner/>}

    return (
    <div>
        <PokemonCard pokemon={pokemon}/>
        <p className='text-center mt-5'>Para volver y elegir otro pokemon, presiona <u><span className='text-danger fw-bold'>Pokemones</span></u> en la esquina superior derecha</p>
    </div>
  )
}
// renderizado condicional
export default Pokemon