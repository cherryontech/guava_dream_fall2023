import "./Login.css"

const Login = () => {
    return (
        <div className="page">
            <div className="login-box">
                <input type="text" id="email-field" placeholder="Email"></input>
                <input type="password" id="password-field" placeholder="Password"></input>
                
                <button type="submit">Login</button>
            </div>
        </div>
    )
}
export default Login