
import { Route, Routes } from "react-router-dom";
import Home from '../components/Home';

const MainRoutes = () => {
    return (
        <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    );
};

export default MainRoutes;