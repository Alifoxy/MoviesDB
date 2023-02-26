import "./UserInfo_style.css"
import { FaUserCircle } from "react-icons/fa";
const User = () => {
    return (
        <div className='user'>
            <div>Hello,new user!</div>
            <div>
            <FaUserCircle className='icon'/>
            </div>
        </div>
    );
};

export {User};