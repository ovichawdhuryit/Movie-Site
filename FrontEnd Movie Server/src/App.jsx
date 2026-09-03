
import './App.css'
import MovieCard from "./Components/MovieCard"
import Home from './Pages/Home'
import Favorites from './Pages/Favorites'
import { Routes, Route } from "react-router-dom"
import NavBar from './Components/NavBar'

function App() {


  return (
    <div>
      <NavBar />
      <main calssName="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}






export default App
