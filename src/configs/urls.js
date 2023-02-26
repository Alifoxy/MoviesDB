import {original} from "@reduxjs/toolkit";

const baseURL ="https://api.themoviedb.org/3"

const images = '/images'
const details = '/details'

const urls = {
    movies:'/discover/movie/?page=',
    movie:'/movie',
    genres:'/genre/movie/list',
    images:{
        images,
        byId:(id)=>`${urls.movie}/${id}/images`
    },
    details:{
        details,
        byId:(id)=>`${urls.movie}/${id}`
    }
}


export {
    baseURL,
    urls
}
