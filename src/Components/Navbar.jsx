import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../assets/logo (1).png';
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'



const Navbar = () => {
    const navigate = useNavigate()
    const { user, userSignOut } = useContext(AuthContext);

    console.log(user)

    const handleUsersLogOut = () => {
        userSignOut()
            .then(() => {
                Swal.fire({
                    title: 'SignOut Successful!',
                    icon: 'success',

                })
                // alert('SignOut Successful');
                navigate('/login')
            })
            .catch((err) => {
                console.log('signOut error', err)
            })
    }

    const links = <>
        <NavLink to={'/'}><li className="text-lg ">Home</li></NavLink>
        <NavLink to={'/allCampaign'}><li className="text-lg ">All Campaign</li></NavLink>
        <NavLink to={'/addNewCampaign'}><li className="text-lg ">Add New Campaign</li></NavLink>
        <NavLink to={'/myCampaign'}><li className="text-lg ">My Campaign</li></NavLink>
        <NavLink to={'/myDonations'}><li className="text-lg ">My Donations</li></NavLink>
    </>

    const logRes = <>
        <NavLink to={'/login'}><li className="text-lg font-semibold btn">Login</li></NavLink>

        <NavLink to={'/register'}><li className="text-lg font-semibold btn">Register</li></NavLink>
    </>


    const logOut = <>
        <button onClick={handleUsersLogOut} className="text-lg font-semibold btn">Logout</button>
    </>

    const [showLogout, setShowLogout] = useState(false);

    return (
        <div className="max-w-7xl mx-auto">
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <div className="flex flex-col gap-3">
                                {links}
                            </div>
                        </ul>
                    </div>
                    <div className=" h-20 w-2xs md:flex hidden">
                        <img src={logo} alt="" className="size-full object-cover" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex max-w-3xl mx-auto">
                    <ul className="menu menu-horizontal px-1">
                        <div className="flex gap-8">
                            {links}
                        </div>
                    </ul>
                </div>

                <div className="navbar-end md:gap-2">
                    {
                        user
                            ? <div
                                onMouseEnter={() => setShowLogout(true)}
                                onMouseLeave={() => setShowLogout(false)}>


                                <img className="w-16 h-16 rounded-full object-cover " src={user.photoURL} alt="" />

                                {showLogout && (
                                    <div>
                                        <section className="absolute">
                                            {logOut}
                                        </section>
                                    </div>
                                )}
                            </div>
                            : <div>
                                {logRes}
                            </div>
                    }
                </div>

            </div>

            <div className="flex items-center justify-center border-b border-gray-300 pt-4 md:hidden">
                <div className=" h-20 w-2xs ">
                    <img src={logo} alt="" className="size-full object-cover" />
                </div>

            </div>
        </div>
    );
};

export default Navbar;