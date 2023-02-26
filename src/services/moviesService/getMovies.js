import {apiService} from "../axiosService/axiosConfig";

import {urls} from "../../configs/urls";

const getMovies = {
    getAll: (page = 1) => apiService.get(urls.movies, {params:{page:page}}),
    create: (data) => apiService.post(urls.movies, data),
}

const getPosters = {
    getAll: (posters) => apiService.get(urls.images.images,{params:{posters:posters}}),
    getById: (id) => apiService.get(urls.images.byId(id)),
}

const getDetails = {
    getAll: () => apiService.get(urls.details.details),
    getById: (id) => apiService.get(urls.details.byId(id)),
}

export {
    getMovies,
    getPosters,
    getDetails
}