import { NavLink } from 'react-router-dom';
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
            <NavLink to="/">
                Dashboard
            </NavLink>
            <NavLink to="/about">
                About
            </NavLink>
            <NavLink to="/community">
                Community
            </NavLink>
            <NavLink to="/create-assessment">
                Create A New Assessment
            </NavLink>
            <NavLink to="/choose-assessment-questions">
                Choose Questions
            </NavLink>
            <NavLink to="/assessment-draft">
                View Assessment Draft
            </NavLink>
            </ul>
        </div>
    </>
    return (
        <nav>
            <div className="h-10vh flex justify-between z-50 tc lg:py-5 py-4 m-3">
                <div className="flex items-center flex-1 mb-2">
                <img src={ Logo } className="w-5 m-4" alt="EquiVate logo, pen inside of box" />
                    <span className="text-xl font-bold">EquiVate</span>
                </div>
                <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
                    <div className="flex gap-8 mr-6 text-[18px]">
                        <ul className="flex gap-2 mt-1">
                        <NavLink to="/">
                            Dashboard
                        </NavLink>
                        <NavLink to="/about">
                            About
                        </NavLink>
                        <NavLink to="/community">
                            Community
                        </NavLink>
                        <NavLink to="/create-assessment">
                            Create A New Assessment
                        </NavLink>
                        <NavLink to="/choose-assessment-questions">
                            Choose Questions
                        </NavLink>
                        <NavLink to="/assessment-draft">
                            View Assessment Draft
                        </NavLink>
                        </ul>
                        <button className="text-indigo-400 rounded-full border-2 border-indigo-400 bg-white w-36 h-14"> 
                            <NavLink to="/Login">
                                Login
                            </NavLink>
                        </button>
                        <button className="text-white rounded-full bg-indigo-400 w-36 h-14">
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