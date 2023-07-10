import React from 'react'

const Home = () => {
  return (
    <div className='d-flex flex-column align-items-center'>
        <h1 className='mt-2 mb-3'>Bienvenido, maestro pokemon!</h1>
        <img 
          src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/08/pokemon_10.jpg?tf=1200x" 
          alt="Pokemones" 
          className='img-fluid img-thumbnail'/>
    </div>
  )
}

export default Home