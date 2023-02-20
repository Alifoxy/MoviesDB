import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";

import {MoviesPage} from "./containers/MoviesPage/MoviesPage";

const App = () => {
    return(
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'cars'}/>}/>
                    <Route path={'cars'} element={<MoviesPage/>}/>

            </Route>
        </Routes>
    )
};

export default App;