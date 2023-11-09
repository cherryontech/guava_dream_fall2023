import { useState } from 'react';
import { auth , createUserWithEmailAndPassword } from "./Firebase";
import { NavLink, useNavigate } from 'react-router-dom';



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
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
 
  return (
    <main >        
        <section className="flex justify-center">
            <div className="flex flex-col border-4 border-indigo-400 rounded-xl m-8 p-3 space-y-4"> 
                <div>                  
                    <h1 className="text-xl font-bold text-indigo-400"> Welcome to EquiVate! </h1>
                    <p className='text-base italic'>Create your account</p>                                                                            
                    <form className="space-y-6">                                                                                            
                        <div className="flex flex-col">
                            <label htmlFor="email-address">
                                Email address
                            </label>
                            <input className="border-2 rounded-lg space-x-2 text-sm"
                                type="email"
                                label="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                required                                    
                                placeholder="Email address"                                
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="password">
                                Password
                            </label>
                            <input className="border-2 rounded-lg space-x-2 text-sm"
                                type="password"
                                label="Create password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                 
                                placeholder="Password"              
                            />
                        </div>                                             
                        
                        <button className="border-2 rounded-lg bg-indigo-400 text-white font-bold p-1.5"  
                            type="submit" 
                            onClick={onSubmit}                        
                        >  
                            Sign up                                
                        </button>
                                                                     
                    </form>
                   
                    <p className="text-xs text-black text-center pt-10">
                        Already have an account?{' '}
                        <NavLink to="/login" className={"hover:text-indigo-400"} >
                            Sign in
                        </NavLink>
                    </p>                   
                </div>
            </div>
        </section>
    </main>
  )
}
 
export default Signup