import {Navigate, Route, Routes} from "react-router-dom";

import {AuthRequireLayout, MainLayout} from "./layouts";

import {MoviesPage,RegisterPage,LoginPage} from "./containers";

const App = () => {
    return(
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>

                <Route element={<AuthRequireLayout/>}>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                </Route>

                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'register'} element={<RegisterPage/>}/>

            </Route>
        </Routes>
    )
};

export default App;