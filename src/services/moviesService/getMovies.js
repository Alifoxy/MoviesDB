import {apiService} from "../axiosService/axiosConfig";

import {urls} from "../../configs/urls";

const getMovies = {
    getAll: (page = 1) => apiService.get(urls.movies, {params:{page:page}}),
    create: (data) => apiService.post(urls.movies, data),
    getImgById: (id,backdrops) => apiService.get(urls.images.byId(id),{params:{id:id, backdrops:backdrops}}),
    getDetById: (id) => apiService.get(urls.details.byId(id)),
}

export {
    getMovies,
}