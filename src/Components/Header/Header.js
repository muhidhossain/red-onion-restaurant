import React from 'react';
import logo2 from '../../images/logo/logo2.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    return (
        <div className="header-container">
            <div>
                <nav className="navbar">
                    <div>
                        <a href="/"><img src={logo2} alt=""/></a>
                    </div>
                    <div className="rightNav">
                        <a href="/cart"><FontAwesomeIcon icon={faShoppingCart} /></a>
                        <a href="/login">Login</a>
                        <button className="signUpBtn" style={{outline:'none'}}>Sign up</button>
                    </div>
                </nav>
            </div>
            <div className="search-container">
                <div className="container">
                    <h1>Best food waiting for your belly</h1>
                    <form>
                        <input style={{outline:'none'}} type="search" placeholder="Search.." name="search"/>
                        <button style={{outline:'none'}} type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Header;