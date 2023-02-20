import './App.css';
import MainLayout from "./layouts/MainLayout";
import {Navigate, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'cars'}/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
