import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-2 md:px-10 lg:px-10 lg:py-5">
            
            <div>
                <Navbar></Navbar>
            </div>

            <div className="mt-10">
                <Outlet></Outlet>
            </div>

            <div className="mt-10">
               <Footer></Footer>
            </div>
            
        </div>
    );
};

export default MainLayout;