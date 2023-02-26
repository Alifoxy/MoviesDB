// import {useDispatch} from "react-redux";

import {moviesActions} from "../../redux";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

const Movie = ({movie}) => {
    const {title, vote_average} = movie;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div>
            <div>title: {title}</div>
            <div>vote: {vote_average}</div>
            <button onClick={()=>navigate(movie.id.toString(), dispatch(moviesActions.set_selectedMovie(movie)))}>Details</button>
        </div>
    );
};

export {Movie};