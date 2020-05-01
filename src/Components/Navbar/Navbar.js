import React from 'react';
import logo2 from '../../images/logo/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Auth from '../Login/useAuth';

const Navbar = () => {
    const auth = Auth()
    return (
        <div>
            <div className="fixed-top">
                <div className="d-flex justify-content-between navbar">
                    <div>
                        <a href="/"><img src={logo2} alt="" /></a>
                    </div>
                    <div className="rightNav">
                        <a href="/cart"><FontAwesomeIcon icon={faShoppingCart} /></a>
                        {
                            auth.user ?
                                <a href="/logout">Logout</a> :
                                <a href="/login">Login</a>
                        }

                        {
                            auth.user ?
                                <Link to="/">
                                    {
                                        auth.user && auth.user.photo ?
                                        <img style={{height: '20px', width: '20px',border:'2px solid red', borderRadius: '10px'}} src={auth.user.photo} alt=""/> :
                                        <FontAwesomeIcon style={{color: 'red', border:'2px solid red', borderRadius:'10px'}} icon={faUserCircle} />
                                    }
                                </Link> :
                                <Link to="/signUp">
                                    <button className="signUpBtn" style={{ outline: 'none' }}>Sign up</button>
                                </Link>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;