import {useDispatch, useSelector} from "react-redux";

import {useEffect} from "react";

import {useSearchParams} from "react-router-dom";

import {moviesActions} from "../../redux";

import {Movie} from "./MoviesListCard";

const Movies = () => {
    const {movies, prev, next} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page:'1'});
    useEffect(() => {
        dispatch(moviesActions.getAll({page:query.get('page')}))
    }, [dispatch, query])

    return (
        <div>
            <div>
                {movies&&<div>{movies.map(movie => <Movie key={movie.id} movie={movie}/>)}</div>}
                <button disabled={!prev} onClick={()=>setQuery(query=>({page:+query.get('page')-1}))}>prev</button>
                <button disabled={!next} onClick={()=>setQuery(query=>({page:+query.get('page')+1}))}>next</button>
            </div>
        </div>
    );
};

export {Movies};
