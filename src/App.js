import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";

import {MoviesPage} from "./containers";

const App = () => {
    return(
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>

                <Route element={<MainLayout/>}>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                </Route>



            </Route>
        </Routes>
    )
};

export default App;