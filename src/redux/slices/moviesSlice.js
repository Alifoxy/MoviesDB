import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {getMovies} from "../../services";

const initialState = {
    movies: [],
    selectedMovie: null,
    errors: null,
    loading: null
};

const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async (_, thunkAPI) => {
        try {
            await new Promise(resolve => setTimeout(() => resolve(), 2000))
            const {data} = await getMovies.getAll();
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
);

const getById = createAsyncThunk(
    "moviesSlice/getById",
    async ({id},thunkAPI)=>{
        try{
            await getMovies.getById(id)
            const {data} = await getMovies.getById(id);
            return data
        }catch (error){
            return thunkAPI.rejectWithValue(error.response.data);
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
                state.movies = action.payload
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
    set_selectedMovie
}

export {
    moviesReducer,
    moviesActions
}