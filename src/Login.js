import { useState } from "react";
import { auth, signInWithEmailAndPassword } from "./Firebase"
import { NavLink, useNavigate } from 'react-router-dom'



//USER LOGIN
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return(
        <>
            <div>
            <main >        
                <section className="flex justify-center" >
                    <div className="flex flex-col border-4 border-indigo-400 rounded-xl m-8 p-3 space-y-4" >                                            
                        <p className="text-xl font-bold text-indigo-400"> Welcome to EquiVate! </p>                                                     
                        <form className="space-y-6">                                              
                            <div className="flex flex-col">
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <input className="border-2 rounded-lg space-x-2 text-sm"
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                                                                                
                                    placeholder="Email address"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input className="border-2 rounded-lg space-x-2 text-sm"
                                    id="password"
                                    name="password"
                                    type="password"                                    
                                    required                                                                                
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                                               
                            <div>
                                <button className="border-2 rounded-lg bg-indigo-400 text-white font-bold p-1.5 "                                   
                                    onClick={onLogin}                                        
                                >      
                                    Login                                                                  
                                </button>
                            </div> 
                                  
                        </form>
                       
                        <p className="text-xs text-black text-center pt-6">
                            No account yet? {' '}
                            <NavLink to="/signup" className={"hover:text-indigo-400"}>
                                Sign up
                            </NavLink>
                        </p>
                                                   
                    </div>
                </section>
            </main>
            </div>
        </>
    
    )
}

export default Login