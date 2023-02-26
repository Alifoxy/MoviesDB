// import {useDispatch} from "react-redux";

import {moviesActions} from "../../redux";

import {useNavigate} from "react-router-dom";

import {useDispatch} from "react-redux";

import {getPosters} from "../../services";

import './MoviesListCardStyle.css'

const Movie = ({movie}) => {
    const {title, vote_average} = movie;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className='movie_card_base'>
            <div className='movie_card'>
                <div>title: {title}</div>
                <img src={`${getPosters.getById(movie.id)}/${movie.posters}`} alt={title}/>
                <div>vote: {vote_average}</div>
                <button onClick={()=>navigate(dispatch(moviesActions.set_selectedMovie(movie)))}>Details</button>
            </div>
        </div>

    );
};

export {Movie};