import {useDispatch} from "react-redux";
import {moviesActions} from "../../redux";
import {useNavigate} from "react-router-dom";
import './MoviesListCardStyle.css'
import StarRatings from "react-star-ratings/build/star-ratings";

const Movie = ({movie}) => {
    const {id, title, vote_average} = movie;
    const navigate = useNavigate();
    const dispatch = useDispatch();


    return (
        <div className='movie_card_base'>
            <div className='movie_card'>
                <div>{id}</div>
                <div>{title}</div>
                <div>{vote_average}</div>
                <img src={``}/>
                <StarRatings name="half-rating-read" defaultValue={vote_average} precision={0.1} readOnly className='ratings' />
                <button onClick={()=> navigate(dispatch(moviesActions.set_selectedMovie({movie})))} className='det_button'>View more...</button>
            </div>
        </div>

    );
};

export {Movie};