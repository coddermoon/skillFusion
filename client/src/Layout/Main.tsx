import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/Navbar/NavBar";
import {Outlet} from 'react-router-dom'



const Main = () => {
    return (
        <div className="bg-shade min-h-screen">
           <NavBar/>
           <Outlet/>
           <Footer/>
        </div>
    );
};

export default Main;