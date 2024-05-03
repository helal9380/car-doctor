import About from "../Pages/About";
import Navber from "../Shared/Navber";
import Banner from "./Banner";
import Choose from "./Choose";
import Client from "./Client";
import Product from "./Product";
import Service from "./Service";
import Team from "./Team";


const Home = () => {
    return (
        <div>
           
            {/* <Navber></Navber> */}
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Product></Product>
            <Team></Team>
            <Choose></Choose>
            <Client></Client>
        </div>
    );
};

export default Home;