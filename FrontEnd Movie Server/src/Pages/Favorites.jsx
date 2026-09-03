import '../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../Components/MovieCard'

export default function Favorites() {
    const { favorites } = useMovieContext()
    if (favorites) {
        return (
            <div className='favorites'>
                <h2> Your Favorites </h2>
                <div className="movies-grid">
                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        )
    }
    return (
        <div className="favorites-empty">
            <h2> Your Favorites List is Empty </h2>
            <p> Add some movies to your favorites list to see them here! </p>
        </div>
    )
}