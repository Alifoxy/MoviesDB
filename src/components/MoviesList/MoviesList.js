import {useDispatch, useSelector} from "react-redux";

import {useEffect} from "react";

import {useSearchParams} from "react-router-dom";

import {moviesActions} from "../../redux";

import {Movie} from "./MoviesListCard";

import './MoviesListCardStyle.css';

const Movies = () => {
    const {movies} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({ page:'1'});

    useEffect( () => {
        dispatch(moviesActions.getAll({page: query.get('page')}))
    }, [dispatch,query])


    return (
        <div>
            <div className ='movies_div'>
                {movies&&movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <div>
                <button  onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>prev</button>
                <button  onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>next</button>
            </div>
        </div>
    );
};


export {Movies};
