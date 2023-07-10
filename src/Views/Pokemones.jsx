import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from "react-bootstrap"

const Pokemones = () => {
  
    const [pokemones, setPokemones] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState("")
    const navigate = useNavigate()
    
    // Lleva corchetes para que solo se ejecute cuando el componente se renderiza, se carga, y no con cada otro cambio.
    useEffect(()=>{
        getPokemons()
    },[])

    // Funcion para obtener los pokemones de la api, los guarda en el state pokemones
    const getPokemons = async () => {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon');
        const {results} = await res.json();
        setPokemones(results)
    }
    
    // función que asigna el valor seleccionado desde <select> hacia selectedPokemon
    const handleSelectedPokemon = (target) => {
        setSelectedPokemon(target.value)
    }

    // función que, luego del clic, toma el valor de pokemonSelected (que es variable), lo asigna o lleva a la URL de navegación, validando que no esté vacío, y nos lleva a la nueva URL
    const goToPokemonDetail = async () => {
        if(selectedPokemon) navigate(`/pokemones/${selectedPokemon}`)
        else alert("Debes seleccionar un pokemon!") 
    }

    return (
    <div className='mt-5 text-center'>
        <h2>Selecciona un pokemon</h2>
        <div className='col-5 col-sm-3 col-sm-4 col-lg-3 col-xxl-2 mx-auto'>
            <select
                value={selectedPokemon}
                className="form-select text-center"
                onChange={({ target }) => handleSelectedPokemon(target)}> 
                <option value="" disabled> Selecciona </option>
                {pokemones.map(({name}) => (
                    <option key={name} value={name}>{name}</option>
                ))}
                </select>
                <Button
                    className='mt-3'
                    onClick={goToPokemonDetail}>
            {/* en este caso no es necesario ponerle () tipo callback, porque no recibe parámetros */ }
                Consultar información
                </Button>
        </div>
    </div>
  )
}

export default Pokemones