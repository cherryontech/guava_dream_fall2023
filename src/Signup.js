import { useState } from 'react';
import { auth , createUserWithEmailAndPassword } from "./Firebase";
import { NavLink, useNavigate } from 'react-router-dom';
import  Image from './Assets/Collaboration for Login Page.png'



//CREATE USER
const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/dashboard")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
 
    return(
        <>
            <div className="h-screen bg-gradient-to-l from-indigo-300 to-45% flex justify-center items-center font-dm-sans">
            <main className="mt-0" >        
                <section className="flex justify-center mt-0 ml-36" >
                    <div className="flex flex-col gap-y-6 w-4/5" >
                        <h1 className="text-5xl font-bold text-indigo-400 w-3/5">{`Let's start listening to your employees`}</h1>
                        <p className="text-base text-align-left text-slate-500 w-96">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.</p>
                    <div className="mt-12 ml-60 w-4/5">
                        <img src={ Image } alt="Three cartoon people sitting in front of a computer with lightbulbs above their heads"></img>
                    </div>
                    </div>

                    <div className="flex flex-col border-4 border-none bg-white rounded-xl m-2 mr-24 pl-1 pr-16 pt-10 space-y-4 min-w-fit h-96 align-center" >                                            
                        <p className="text-2xl font-semi-bold text-slate-500 mt-4 pl-36"> Create your account </p>                                                     
                        <form className="space-y-6 flex flex-col pl-16 pr-0">                                              
                            <div className="flex flex-col">
                                <label htmlFor="email-address" className="text-xs font-light mb-1">
                                    Work Email
                                </label>
                                <input className="border-2 rounded-lg space-x-2 text-sm p-2 w-96"
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                                                                                
                                    placeholder= "Enter your email"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="password" className="text-xs font-light mb-1">
                                    Password
                                </label>
                                <input className="border-2 rounded-lg space-x-2 text-sm p-2 w-96"
                                    id="password"
                                    name="password"
                                    type="password"                                    
                                    required                                                                                
                                    placeholder="Enter your password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                                               
                            <div>
                                <button className="border-2 rounded-lg bg-indigo-400 text-white font-bold p-1.5 w-96 font-thin text-xs p-3"                                   
                                    onClick={onSubmit}                                        
                                >      
                                    Create Account                                                                
                                </button>
                            </div> 
                                  
                        </form>
                       
                        <p className="text-xs text-stone-300 text-center pl-6 pt-0">
                        Already have an account?{' '}
                        <NavLink to="/login" className={"hover:text-indigo-400"} >
                            Sign in
                        </NavLink>
                        </p>
                                                   
                    </div>
                </section>
            </main>
            </div>
        </>
    
    )
}
 
export default Signup
