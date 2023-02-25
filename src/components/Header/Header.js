import { NavLink } from "react-router-dom";

import '../../layouts/style.css';

const Header = () => {
    return (
            <div className ='header'>
                <NavLink to={''}>Home</NavLink>
                <NavLink to={'movies'}>Movies</NavLink>
            </div>

    );
};

export {Header};