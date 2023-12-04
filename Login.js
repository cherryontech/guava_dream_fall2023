import { useHistory } from 'react-router-dom';  
import "./Login.css"

const Login = () => {
    const history = useHistory(); 
    const handleLogin = () => {
        history.push('/preview');
    };

    return (
        <div className="page">
            <div className="login-box">
                <input type="text" id="email-field" placeholder="Email"></input>
                <input type="password" id="password-field" placeholder="Password"></input>
                
                <button type="button" onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default Login;
