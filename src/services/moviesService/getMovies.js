import {axiosRequest} from "../axiosService/axiosConfig";

import {urls} from "../../configs/urls";

const getMovies = {
    getAll: () => axiosRequest.get(urls.movies.movies),
    getById: (movie_id) => axiosRequest.get(`${urls.movies.movies}/${movie_id}`)
}

export {
    getMovies
}