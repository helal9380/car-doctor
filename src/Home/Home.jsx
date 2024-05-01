import About from "../Pages/About";
import Navber from "../Shared/Navber";
import Banner from "./Banner";
import Service from "./Service";


const Home = () => {
    return (
        <div>
           
            <Navber></Navber>
            <Banner></Banner>
            <About></About>
            <Service></Service>
        </div>
    );
};

export default Home;