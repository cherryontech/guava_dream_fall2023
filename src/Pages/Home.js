import Navbar from "../Navbar"
import { NavLink } from 'react-router-dom';
import HomeImage from "../Assets/Home-image.png"

const Home = () => {
    <NavLink to="/resources">
                Resources
    </NavLink>


    return (
        <div>
            <Navbar />
            <section className="flex justify-center m-12" >
                <div className="flex flex-col w-1/3 mt-32">
                    <h1 className="text-indigo-400 text-6xl font-semibold pb-4">Your workplace equity navigator</h1>

                    <p className="text-sm text-slate-500">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.</p>
                    <div className="flex ml-0">
                        <button className="text-white rounded-full border-2 border-indigo-400 bg-indigo-400 w-36 h-16 text-base mt-6 "> 
                            <NavLink to="/Signup"> 
                                Get started
                            </NavLink>   
                        </button>

                        <button className="text-indigo-400 rounded-full border-2 border-indigo-400 bg-white w-36 h-16 text-base mt-6 ml-12"> 
                            <NavLink to="/Login"> 
                                Login
                            </NavLink>   
                        </button>
                    </div>

                </div>

                <img src={ HomeImage } className="ml-20 w-96 h-96 m-12 rounded-md" alt="Graphic of woman in work clothes that are too big" />
            </section>

            <hr className="border-indigo-400 w-4/5 flex m-24 ml-48 "></hr>
        </div>
    
    )

}

export default Home;