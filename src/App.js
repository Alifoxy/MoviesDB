import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";

import {RouterEndpoints} from "./services/routes";

import {MoviesPage} from "./containers";
import {NotFoundPage} from "./containers";

const App = () => {
    return(
        <Routes>
            <Route path={RouterEndpoints.index} element={<MainLayout/>}>
                <Route path={RouterEndpoints.movies} index element={<MoviesPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    )
};

export default App;