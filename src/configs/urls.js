const baseURL ="https://api.themoviedb.org/3"

const API_KEY = 'cb1f2b7412e28a08ff00da197875b432'

const urls = {
    movies:`/discover/movie/?page=1&&api_key=${API_KEY}`,
    movie:'/movie',
    genres:'/genre/movie/list',

}


export {
    baseURL,
    urls
}
