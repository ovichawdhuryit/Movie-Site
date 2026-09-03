const API_key = "6ed5e8785bc73827a0fc3307b51dc088"
const base_url = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${base_url}/movie/popular?api_key=${API_key}`)
    const data = await response.json()
    return data.results
};

export const searchMovies = async (query) => {
    const response = await fetch(
        `${base_url}/search/movie?api_key=${API_key}&query=${encodeURIComponent(
            query
        )}`
    );  
    const data = await response.json()
    return data.results
}; 