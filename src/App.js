import './App.css';
import Home from './Views/Home';
import Navbar from './Components/Navbar';
import Pokemon from './Views/Pokemon';
import Pokemones from './Views/Pokemones';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/pokemones/" element={<Pokemones/>}></Route>
          <Route path="/pokemones/:name" element={<Pokemon/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
