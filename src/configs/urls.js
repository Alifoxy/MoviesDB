const baseURL ="https://api.themoviedb.org/3/movies?api_key=cb1f2b7412e28a08ff00da197875b432&page=1"

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