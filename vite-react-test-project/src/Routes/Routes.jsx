
import { Route, Routes } from "react-router-dom";
import Home from '../components/Home';
import SingleState from "../state-management-signals/SingleState";

const MainRoutes = () => {
    return (
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signal-state" element={<SingleState/>}/>
      </Routes>
    );
};

export default MainRoutes;