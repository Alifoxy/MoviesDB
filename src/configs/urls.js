const baseURL = 'https://api.themoviedb.org/3/movie/movie_id?api_key=cb1f2b7412e28a08ff00da197875b432'

const movies = '/movies'

const urls = {
    movies: {
        movies,
        byId: (movie_id) => `${movies}/${movie_id}`
    }
}

export {
    baseURL,
    urls
}