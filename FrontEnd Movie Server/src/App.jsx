
import './App.css'
import MovieCard from "./Components/MovieCard" 


function App() {


  return (

    <> 
  
    <MovieCard movie={{ title: "Inception", release_date: "2010-07-16" }} />
    <MovieCard movie={{ title: "Poran Jai Joliya Re", release_date: "2009-10-16" }} />
   </>
  )
}


export default App
