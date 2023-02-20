import React from 'react';
import {Outlet} from "react-router-dom";

import Header from "../components/Header/Header";
import {Movies} from "../components/MoviesList/MoviesList";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Movies/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;