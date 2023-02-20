import {useSelector} from "react-redux";

import {Movies} from "../../components/MoviesList/MoviesList";

const MoviesPage = () => {
    const {loading} = useSelector(state => state.movies);
    return (
        <div>
            {loading && <h1>Loading..................</h1>}
            <Movies/>
        </div>
    );
};

export {MoviesPage};