const baseURL ="https://api.themoviedb.org/3/movie/page=140?api_key=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjFmMmI3NDEyZTI4YTA4ZmYwMGRhMTk3ODc1YjQzMiIsInN1YiI6IjYzZWY2MTdlY2RkYmJjMDA4YzIwYjgwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gOeNaSJT0F9oN2v1paJGgct0ByZYRNMura43C_XS_ho"

const movies = '/movies'

const auth = '/auth'
const urls = {
    auth: {
        login: auth,
        refresh: `${auth}/refresh`,
        me: `${auth}/me`
    },
    movies: {
        movies,
        byId: (id) => `${movies}/${id}`
    },
    users: '/users'
}


export {
    baseURL,
    urls
}