import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

import { FaCartShopping } from 'react-icons/fa6';
import useCart from "../../hooks/useCart";

const Navbar = () => {

    const [cart] = useCart();
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error)
            })
    }


    const navOptions = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/menu">Our Menu</NavLink></li>
        <li><NavLink to="/order/salad">Order Food</NavLink></li>
        <li><NavLink to="/cart">
            <div className="flex">
                <Link to="/dashboard/cart">
                    <button className="flex">
                        <FaCartShopping className="mr-1"></FaCartShopping>
                        <div className="badge badge-secondary">+{cart.length}</div>
                    </button>
                </Link>
            </div>
        </NavLink></li>
        {user?.email ? <button onClick={handleLogOut}>LogOut</button>
            : <li><NavLink to="/login">SignIn</NavLink></li>}
        <li><NavLink to="/signup">Sign Up</NavLink></li>
    </>



    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black  text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;