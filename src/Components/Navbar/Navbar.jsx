import { IoCart} from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
    return (
        <div>
            <div className="navbar md:px-12 px-6 text-white bg-[#9538E2] pb-12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li className='font-medium text-black'><NavLink>Home</NavLink></li>
                            <li className='font-medium text-black'>
                                <NavLink>Statistics</NavLink>
                            </li>
                            <li className="font-medium text-black"><NavLink>DashBorad</NavLink></li>
                        </ul>
                    </div>
                    <Link to='/' className="text-3xl font-bold">Gadget Haven</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='font-medium'><NavLink>Home</NavLink></li>
                        <li className='font-medium'>
                            <NavLink to={'/statics'}>Statistics</NavLink>
                        </li>
                        <li className='font-medium'><NavLink to={'/dashborad'}>Dashborad</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end items-center gap-2">
                    <Link className=" bg-white p-2 rounded-full text-black"><IoCart size={25}></IoCart></Link>
                    <Link className=" bg-white p-2 rounded-full text-black"><FaRegHeart size={25}></FaRegHeart></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;