import {useDispatch} from "react-redux";

import {moviesActions} from "../../redux";

const Movie = ({movie}) => {
    const {id, title, vote_average} = movie;

    const dispatch = useDispatch();

    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>vote: {vote_average}</div>
            <button onClick={()=>dispatch(moviesActions.set_selectedMovie(movie))}>select</button>

        </div>
    );
};

export {Movie};