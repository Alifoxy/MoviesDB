import {axiosRequest} from "../axiosService/axiosConfig";

import {urls} from "../../configs/urls";

const getMovies = {
    getAll: (page=1) => axiosRequest.get(urls.movies.movies, {params:{page}}),
    create: (data) => axiosRequest.post(urls.movies.movies, data),
    getById: (id) => axiosRequest.get(`${urls.movies.movies}/${id}`)
}

export {
    getMovies
}