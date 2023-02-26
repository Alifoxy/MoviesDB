import { createContext, useState } from "react";

import ReactSwitch from "react-switch";

import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";

import './style.css'

export const ThemeContext = createContext(null);

const MainLayout = () => {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className='main' id={theme}>
                <div className='header_div' id={theme}>
                    <Header/>
                </div>
                <div className="switch_div" id={theme}>
                    <div className="switch" >
                        <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                        <ReactSwitch  onChange={toggleTheme} checked={theme === "light"}  />
                    </div>
                </div>
                <div className="main_div" id={theme}>
                    <Outlet/>
                </div>
            </div>
        </ThemeContext.Provider>
    );

 };

export {MainLayout}