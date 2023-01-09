import Facility from "./Home/Facility";
import Hero from "./Home/Hero";
import Hired from "./Home/Hired";
import Tracks from "./Home/Tracks";


const Home = () => {
    return (
        <div>
           <Hero/>
           <Tracks/>
           <Hired/>
           <Facility/>
        </div>
    );
};

export default Home;