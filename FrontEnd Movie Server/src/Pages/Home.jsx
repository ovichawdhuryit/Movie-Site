import MovieCard from "../Components/MovieCard"
import {useState} from "react"


export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");

        const movies = [
            { id: 1, title: "Inception", release_date: "2010-07-16" },
            { id: 2, title: "Poran Jai Joliya Re", release_date: "2009-10-16" },
            { id: 3, title: "The Dark Knight", release_date: "2008-07-18" }
        ];
 const handleSearch = (e) => {
    e.preventDefault();
     alert (searchQuery);
     setSearchQuery("........");

  
 }
    return (
        <div className="home">
            <form onSubmit = {handleSearch} className = "search-form">
                <input type="text" placeholder="Search for a movie..." 
                className="search-input"
                value = {searchQuery}
                onChange = {(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button"> Search </button>
            </form>



            <div className = "movies-grid">
                {movies.map((movie) => 
                    (
                    <MovieCard movie={movie} key={movie.id} 
                    />
                    

                ))}
            </div>
        </div>

        
    );
}