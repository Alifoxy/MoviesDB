import {useEffect} from "react";

import {useDispatch} from "react-redux";

import {moviesActions} from "../../redux";

const MovieDetails = ({movie}) => {

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(moviesActions.getDetById(movie.id))
    }, [dispatch,movie.id])


    return (
        <div>
            {movie &&
                <>
                    <div>title: {movie.title}</div>
                </>
            }
        </div>
    );
};

export {MovieDetails};