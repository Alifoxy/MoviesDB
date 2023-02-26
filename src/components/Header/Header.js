import { NavLink } from "react-router-dom";
import {User} from "../UserInfo/UserInfo";
import './Header_style.css';

const Header = () => {
    return (
            <div className ='header'>
                <NavLink to={''}>Home</NavLink>
                <NavLink to={'movies'}>Movies</NavLink>
                <User/>
            </div>

    );
};

export {Header};