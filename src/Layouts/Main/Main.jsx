import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";


const Main = () => {

    const location = useLocation()
    const noFooternoNavbar = location.pathname.includes('login') //|| location.pathname.includes('signup')

    return (
        <div>
            { noFooternoNavbar || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noFooternoNavbar || <Footer></Footer>}
        </div>
    );
};

export default Main;