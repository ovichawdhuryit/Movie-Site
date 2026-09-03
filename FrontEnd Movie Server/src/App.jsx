
import './App.css'
import MovieCard from "./Components/MovieCard" 
import Home from './Pages/Home'

function App() {


  return (
    <main calssName="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
       </Routes>
    </main>
  );
}






export default App
