import {useDispatch} from "react-redux";

import {moviesActions} from "../../redux";

const Movie = ({movie}) => {
    const {id, title, status, genres} = movie;

    const dispatch = useDispatch();

    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>status: {status}</div>
            <div>genres: {genres.name}</div>
            <button onClick={()=>dispatch(moviesActions.set_selectedMovie(movie))}>select</button>

        </div>
    );
};

export {Movie};