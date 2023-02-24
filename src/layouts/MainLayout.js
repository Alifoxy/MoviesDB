import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";
import {ThemeSwitcher} from "../components/ThemeSwitcher/ThemeSwitcher";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <ThemeSwitcher/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};