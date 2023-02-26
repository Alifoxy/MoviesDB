import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {getDetails, getMovies, getPosters} from "../../../services";

const initialState = {
    movies: [],
    details:null,
    images:null,
    page: null,
    selectedMovie: null,
    errors: null,
    loading: null
};

const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            await new Promise(resolve => setTimeout(() => resolve(), 2000))
            const {data} = await getMovies.getAll(page);
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
);

const create = createAsyncThunk(
    'moviesSlice/create',
    async ({movie}, thunkAPI) => {
        try {
            await getMovies.create(movie);
            thunkAPI.dispatch(getAll({page:1}))
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)
        }

    }
);

const getImgById = createAsyncThunk(
    'moviesSlice/getImgById',
    async ({id}, thunkAPI) => {
        try {
            await getPosters.getById(id)
            thunkAPI.dispatch(getAll(id))
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getDetById = createAsyncThunk(
    'moviesSlice/getDetById',
    async ({id}, thunkAPI) => {
        try {
            await getDetails.getById(id)
            thunkAPI.dispatch(getAll(id))
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        set_selectedMovie: (state, action) => {
            state.selectedMovie = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {results,page} = action.payload;
                state.movies = results
                state.page = page
                state.loading = false
            })
            .addCase(getDetById.fulfilled, (state, action) => {
                const {details} = action.payload;
                state.details = details
                state.loading = false
            })
            .addCase(getImgById.fulfilled, (state, action) => {
                const {posters} = action.payload;
                state.images = posters
                state.loading = false
            })
            .addDefaultCase((state, action) => {
                const [actionStatus] = action.type.split('/').slice(-1);
                state.loading = actionStatus === 'pending';
            })
});


const {reducer: moviesReducer, actions: {set_selectedMovie}} = moviesSlice;

const moviesActions = {
    getAll,
    create,
    getImgById,
    getDetById,
    set_selectedMovie
}

export {
    moviesReducer,
    moviesActions,
    moviesSlice
}