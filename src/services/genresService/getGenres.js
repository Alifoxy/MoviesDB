import {apiService} from "../axiosService/axiosConfig";

import {urls} from "../../configs/urls";

import {baseURL} from "../../configs/urls";

const getGenres = {
    getAll: (page = 1,results) => apiService.get(baseURL+urls.genres, {params:{page:page, results:results}}),
    create: (data) => apiService.post(baseURL+urls.movies, data),

}

export {
    getGenres
}