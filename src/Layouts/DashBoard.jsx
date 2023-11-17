import { FaAlignJustify, FaBook, FaBowlFood, FaCalendar, FaCalendarCheck, FaCartShopping, FaHouse, FaMoneyBill, FaStar, FaUser, FaUtensils } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";


const DashBoard = () => {

    const [isAdmin] = useAdmin();


    return (
        <div className="flex w-11/12 mx-auto">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu space-y-3 p-4">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHouse></FaHouse>
                                   Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems">
                                    <FaUtensils></FaUtensils>
                                    Add Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItem">
                                    <FaAlignJustify></FaAlignJustify>
                                    Manage Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings">
                                    <FaBook></FaBook>
                                    Manage Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allUsers">
                                    <FaUser></FaUser>
                                    All Users
                                </NavLink>
                            </li>
                    
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHouse></FaHouse>
                                        User Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation">
                                        <FaCalendar></FaCalendar>
                                        Reservation
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/payment">
                                        <FaMoneyBill></FaMoneyBill>
                                        Payment History
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaCartShopping></FaCartShopping>
                                        My Cart
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review">
                                        <FaStar></FaStar>
                                        Add Review
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/booking">
                                        <FaCalendarCheck></FaCalendarCheck>
                                        My Booking
                                    </NavLink>
                                </li>
                            </>
                    }



                    <div className="divider">OR</div>

                    <li>
                        <NavLink to="/">
                            <FaHouse></FaHouse>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">
                            <FaBowlFood></FaBowlFood>
                            Menu
                        </NavLink>
                    </li>

                </ul>
            </div>


            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>


        </div>
    );
};

export default DashBoard;