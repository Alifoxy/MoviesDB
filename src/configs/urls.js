const baseURL = 'https://api.themoviedb.org/3/movie/140?api_key=cb1f2b7412e28a08ff00da197875b432'

const movies = '/movies'

const urls = {
    movies: {
        movies,
        byId: (id) => `${movies}/${id}`
    }
}


export {
    baseURL,
    urls
}