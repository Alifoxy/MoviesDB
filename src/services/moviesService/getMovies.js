import {axiosRequest} from "../axiosService/axiosConfig";

import {urls} from "../../configs/urls";

const getMovies = {
    getAll: () => axiosRequest.get(urls.movies.movies),
    create: (data) => axiosRequest.post(urls.movies.movies, data)
}

export {
    getMovies
}