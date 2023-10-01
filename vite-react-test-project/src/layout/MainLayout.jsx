import MainRoutes from "../Routes/Routes";
import Navbar from "../shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <MainRoutes />
    </div>
  );
};

export default MainLayout;
