import { Outlet } from "react-router-dom";
import AuthProvider from "./provider/AuthProvider";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";



const Root = () => {
    return (
        <div className="w-full">
            <div className="px-8">
                <NavBar></NavBar>

                <Outlet></Outlet>

            </div>


        </div>
    );
};

export default Root;