import { NavLink, useNavigate } from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';
import {BiMenu} from 'react-icons/bi';
import { useState } from 'react';
import { signOut } from "firebase/auth"
import {auth} from "./Firebase"
//import  LogoIcon  from "./Assets/Logo-icon.png";
import  DashboardIcon  from "./Assets/Dashboard icon.png";
import  AssessmentsIcon  from "./Assets/Assessments Icon.png";
import  CreateAssessmentIcon  from "./Assets/Create Assessment Icon.png";
import  ResourcesIcon  from "./Assets/Resources Icon.png";

const SideMenu = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }

    
    const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/Home");
            console.log("Signed out successfully")
        }).catch((error) => {
            console.error("Error occured during sign-out:", error);
        });
    }

    const content = <>
        <div className="lg:hidden block absolute inset-y-0  top-0 h-full left-0 bg-slate-900 transition tc mt-5 bg-white">
            <ul className="text-center p-15 flex flex-col">
            <NavLink to="/dashboard">
                Dashboard
            </NavLink>
            <NavLink to="/assessments">
                Assessments
            </NavLink>
            <NavLink to="/create-assessment">
                Create Assessment
            </NavLink>
            <NavLink to="/resources">
                Resources
            </NavLink>
            </ul>
        </div>
    </> 
    return (
        
        <sidebar>
            <div className="flex flex-col justify-between tc m-6 inset-y-0 max-w-max max-h-screen">
                
                <div className=" md:flex lg: flex-1 items-center font-normal hidden">
                    <div className="flex gap-8 mr-6 text-[18px]">
                        <ul className="flex flex-col gap-2 mt-1">
                        <button className="flex justify-start self-center items-center text-white rounded-full bg-indigo-400 w-48 h-16 p-2 font-bold">
                            <img className="w-8 h-8 mr-4"src={ DashboardIcon } alt="icon square with four circles inside" />
                        <NavLink to="/dashboard" className="flex">
                            Dashboard
                        </NavLink>
                        </button>
                        <NavLink to="/assessments"className='flex p-2 space-x-6 items-center text-base text-slate-500'>
                                <img src={ AssessmentsIcon } alt="Icon of piece of paper with upward facing arrow" className='w-8 h-8 mr-2'/>
                                Assessments
                        </NavLink>
                        <NavLink to="/create-assessment"className='flex p-2 space-x-6 items-center text-base text-slate-500'>
                                <img src={ CreateAssessmentIcon } alt="Icon of piece of paper with upward facing arrow" className='w-8 h-8 mr-2'/>
                                Create Assessment
                        </NavLink>
                        <NavLink to="/resources" className='flex p-2 space-x-6 items-center text-base text-slate-500 '>
                            <img src={ ResourcesIcon } alt="Icon of lightbulb" className='w-8 h-8 mr-2' />
                            Resources
                        </NavLink>
                        <button className="text-indigo-400 rounded-full border-2 border-indigo-400 bg-white w-24 h-10 text-xs mt-36 ml-16 absolute bottom-2" onClick={handleLogout}> 
                        <NavLink to="/community"> 
                            Logout
                        </NavLink>   
                        </button>
                        </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>
                <button className="text-3xl  block sm:hidden transtion" onClick={handleClick}>
                    {click ? <FaTimes/> : < BiMenu/>}
                </button>
            </div>

           

        </sidebar>
    )
    }
export default SideMenu;