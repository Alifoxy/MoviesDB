import {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";

import {moviesActions} from "../../redux";

const MovieDetails = ({movie}) => {
    const {details} = useSelector(state => state.details);
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(moviesActions.getDetById(movie.id))
    }, [dispatch,movie.id])



    return (
        <div>
            {details.map(item => (
                <li key={item.id}>
                    {item.title}
                </li>
            ))}
        </div>
    );
};

export {MovieDetails};