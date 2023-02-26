import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {moviesReducer} from "./slices/movies/moviesSlice";

const rootReducer = combineReducers({
    movies: moviesReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
})

export default setupStore
