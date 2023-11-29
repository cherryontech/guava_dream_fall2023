import { NavLink } from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';
import {BiMenu} from 'react-icons/bi';
import { useState } from 'react';
import  LogoIcon  from "./Assets/Logo-icon.png";
import  DashboardIcon  from "./Assets/Dashboard icon.png";
import  AssessmentsIcon  from "./Assets/Assessments Icon.png";
import  CreateAssessmentIcon  from "./Assets/Create Assessment Icon.png";
import  ResourcesIcon  from "./Assets/Resources Icon.png";

const SideMenu = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    const content = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition tc mt-5 bg-white">
            <ul className="text-center text-xl p-15 flex flex-col">
            <NavLink to="./Pages/Dashboard">
                Dashboard
            </NavLink>
            <NavLink to="./Pages/CreateAssessment">
                Assessments
            </NavLink>
            <NavLink to="./Pages/CreateAssessment">
                Create Assessment
            </NavLink>
            <NavLink to="./Pages/Employee/Main">
                Resources
            </NavLink>
            </ul>
        </div>
    </>
    return (
        <sidebar>
            <div className="flex flex-col justify-between tc  m-3">
                <div className="flex flex-col items-start flex-1 mb-2">
                <img src={ LogoIcon } className="w-12 m-12" alt="EquiVate logo, pen inside of box" />
                </div>
                <div className=" md:flex lg: flex-1 items-center font-normal hidden">
                    <div className="flex gap-8 mr-6 text-[18px]">
                        <ul className="flex flex-col gap-2 mt-1">
                        <button className="flex justify-start self-center items-center text-white rounded-full bg-indigo-400 w-48 h-16 p-2 font-bold">
                            <img className="w-8 h-8 mr-4"src={ DashboardIcon } alt="icon square with four circles inside" />
                        <NavLink to="./Pages/Dashboard" className="flex">

                            Dashboard
                        </NavLink>
                        </button>
                        <div className='flex p-2 space-x-5 items-center '>
                            <img src={ AssessmentsIcon } alt="Icon of piece of paper" className='w-8 h-8' />
                            <h1 className='text-slate-500'>Assessments</h1>
                        </div>
                        <NavLink to="./Pages/CreateAssessment"className='flex p-2 space-x-6 items-center  text-slate-500'>
                                <img src={ CreateAssessmentIcon } alt="Icon of piece of paper with upward facing arrow" className='w-8 h-8'/>
                                Create Assessment
                        </NavLink>
                        <NavLink to="./Pages/Employee/Main" className='flex p-2 space-x-6 items-center text-slate-500 '>
                            <img src={ ResourcesIcon } alt="Icon of lightbulb" className='w-8 h-8' />
                            Resources
                        </NavLink>
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