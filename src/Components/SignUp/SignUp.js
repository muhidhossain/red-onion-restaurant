import React from 'react';
import './SignUp.css';
import Auth from '../Login/useAuth';
import { useForm } from 'react-hook-form';
import logo from '../../images/logo/logo2.png'

const SignUp = () => {
    const auth = Auth();
    const { register, watch } = useForm();
    console.log(auth.user)
    return (
        <div>
            <div className="d-flex justify-content-center red-onion-logo">
                <a href="/"><img src={logo} alt="" /></a>
            </div>
            <div className="container d-flex justify-content-center">
                <div className="signUp-container">
                    <form onSubmit={auth.createAccount}>
                        <input type="text" onBlur={auth.handleChange} name="name" placeholder="Full Name" required />
                        <br />
                        <br />
                        <input type="text" onInput={auth.handleChange} name="email" placeholder="Email" required />
                        <br />
                        {
                            auth.user && !auth.user.isValidEmail && <small style={{ color: "red" }}>Enter a valid email.</small>
                        }
                        <br />
                        <input type="password" onInput={auth.handleChange} name="password" placeholder="New Password" required />
                        <br />
                        {
                            auth.user && !auth.user.isValidPassword && <small style={{ color: "red" }}>At least 8 character and one number required.</small>
                        }
                        <br />
                        <input type="password" onInput={auth.handleChange} name="confirm_password" ref={register({
                            validate: (value) => value === watch('password')
                        })} placeholder="Confirm Password" required />
                        <br />
                        {
                            auth.user && auth.user.confirm_password && auth.user.password !== auth.user.confirm_password &&
                            <small style={{ color: "red" }}>Passwords didn't match.</small>
                        }
                        {
                            auth.user && auth.user.confirm_password && !auth.user.isValidConfirmPassword & auth.user.password === auth.user.confirm_password ?
                                <small style={{ color: "red" }}>Passwords matched but you didn't include any number or enough character.</small> :
                                <small></small>
                        }
                        <br />
                        {
                            auth.user && auth.user.isValidEmail & auth.user.isValidPassword & auth.user.isValidConfirmPassword & auth.user.password === auth.user.confirm_password ?
                                <input className="signUp-btn" type="submit" value="Create Account" /> :
                                <button>Create Account</button>
                        }
                        {
                            auth.user && auth.user.error && <p style={{ color: 'red' }}>{auth.user.error}</p>
                        }
                        <p style={{ marginTop: '20px' }}>
                            <a style={{ textDecoration: 'none', fontWeight: '600' }} href="/login">Already have an account</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;