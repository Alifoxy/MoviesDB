import {axiosRequest} from "../axiosService/axiosConfig";

import {urls} from "../../configs/urls";

const getMovies = {
    getAll: () => axiosRequest.get(urls.movies.movies),
    getById: (id) => axiosRequest.get(`${urls.movies.movies}/${id}`)
}

export {
    getMovies
}