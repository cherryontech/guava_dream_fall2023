import { Link } from "react-scroll";
import {FaTimes} from 'react-icons/fa';
import {BiMenu} from 'react-icons/bi';
import { useState } from 'react';
import "./Navbar.css";
import Logo from "./logo.png";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    const content = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition tc mt-5 bg-white">
            <ul className="text-center text-xl p-15 flex flex-col">
                <Link spy={true} smooth={true} to="Dashboard">
                    <li className="m-4 p-4 border-b border-violet-500 hover:bg-slate-800 hover:rounded w-9/10">Dashboard</li>
                </Link>
                <Link spy={true} smooth={true} to="About">
                    <li className="m-4 p-4 border-b border-violet-500 hover:bg-slate-800 hover:rounded w-9/10">About</li>
                </Link>
                <Link spy={true} smooth={true} to="Package">
                    <li className="m-4 p-4 border-b border-violet-500 hover:bg-slate-800 hover:rounded w-9/10">Resources</li>
                </Link>
                <Link spy={true} smooth={true} to="Book">
                    <li className="m-4 p-4 border-b border-violet-500 hover:bg-slate-800 hover:rounded w-9/10">Community</li>
                </Link>
            </ul>
        </div>
    </>
    return (
        <nav>
            <div className="h-10vh flex justify-between z-50 tc lg:py-5 py-4 m-3">
                <div className="flex items-center flex-1 mb-2">
                <img src={ Logo } className="w-5 m-4" />
                    <span className="text-xl font-bold">EquiVate</span>
                </div>
                <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
                    <div className="flex gap-8 mr-6 text-[18px]">
                        <ul className="flex gap-2 mt-1">
                            <Link spy={true} smooth={true} to="Dashboard">
                            <li className="hover:text-fuchsia-600 transtion hover:border-fuchsia-600 cursor-pointer whitespace-nowrap">Dashboard</li>
                            </Link>
                            <Link spy={true} smooth={true} to="About">
                                <li className="hover:text-fuchsia-600 transtion hover:border-fuchsia-600 cursor-pointer whitespace-nowrap">About</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Package">
                                <li className="hover:text-fuchsia-600 transtion hover:border-fuchsia-600 cursor-pointer whitespace-nowrap">Resources</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Book">
                                <li className="hover:text-fuchsia-600 transtion hover:border-fuchsia-600 cursor-pointer whitespace-nowrap">Community</li>
                            </Link>

                        </ul>
                        <button className="rounded-full border-indigo-400 border-solid border-2 p-1">
                                Login
                            </button>
                            <button className="text-white rounded-full bg-indigo-400 w-28">
                                Get Started
                            </button>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>

                <button className="text-3xl  block sm:hidden transtion" onClick={handleClick}>
                    {click ? <FaTimes/> : < BiMenu/>}
                </button>
            </div>
        </nav>
    )
}

export default Navbar;