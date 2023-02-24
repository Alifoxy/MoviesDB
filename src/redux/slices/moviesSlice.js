import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {getMovies} from "../../services";

const initialState = {
    movies: [],
    page:null,
    selectedMovie: null,
    errors: null,
    loading: null
};

const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            await new Promise(resolve => setTimeout(() => resolve(), 2000))
            const {data:{results}} = await getMovies.getAll(page);
            return results
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

const getById = createAsyncThunk(
    "moviesSlice/getById",
    async ({id},{rejectWithValue})=>{
        try{
            const {data} = await getMovies.getById(id);
            return data
        }catch (error){
            rejectWithValue(error.response.data);
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
                const {page, results} = action.payload;
                state.movies = results
                state.page = page
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
    getById,
    create,
    set_selectedMovie
}

export {
    moviesReducer,
    moviesActions,
    moviesSlice
}