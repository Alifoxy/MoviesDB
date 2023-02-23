import {apiService} from "../axiosService/axiosConfig";

import {urls} from "../../configs/urls";

const getMovies = {
    getAll: (page=1) => apiService.get(urls.movies, {params:{page}}),
    create: (data) => apiService.post(urls.movies, data),
}

export {
    getMovies
}