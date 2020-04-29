import React from 'react';
import './Login.css'
import Auth from './useAuth';
import logo from '../../images/logo/logo2.png'

const Login = () => {
    const auth = Auth();
    console.log(auth)
    return (
        <div className="d-flex justify-content-center">
            <div className="login-container">
                <div>
                    <a href="/"><img src={logo} alt="" /></a>
                </div>
                <div className="loginOptions">
                    <form onSubmit={auth.signInUser}>
                        <input onBlur={auth.handleChange} type="text" name="email" placeholder="Your Email" required />
                        <br />
                        <br />
                        <input onBlur={auth.handleChange} type="password" name="password" placeholder="Your Password" required />
                        <br />
                        <br />
                        <input onBlur={auth.handleChange} type="submit" className="loginBtn" value="Login" />
                    </form>
                    <br />
                    {
                        auth.user && auth.user.name ?
                            <div>
                                <p style={{ color: 'green' }}>Login successful.</p>
                                <a href="/">Go to home page.</a>
                            </div> :
                            <p style={{ display: 'none' }}></p>
                    }
                    {
                        auth.user && auth.user.error && <p style={{ color: 'red' }}>{auth.user.error}</p>
                    }
                    <br />
                    <button onClick={auth.signInWithGoogle}>Login with Google</button>
                    <p style={{marginTop:'20px'}}>
                        <a style={{textDecoration:'none', fontWeight:'600'}} href="/signUp">Create account</a>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Login;