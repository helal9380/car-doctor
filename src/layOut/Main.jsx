import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer";
import Navber from "../Shared/Navber";

const Main = () => {
    return (
        <div className="max-w-screen-lg mx-auto">
          <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;