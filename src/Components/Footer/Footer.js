import React from 'react';
import './Footer.css'
import logo from '../../images/logo/logo.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div style={{ display: 'flex' }}>
                    <div className="col-md-6 footer-img">
                        <a href="/"><img src={logo} alt="" /></a>
                    </div>
                    <div className="col-md-3 footer-text">
                        <p>About Online food</p>
                        <p>Read our blog</p>
                        <p>Sign up to deliver</p>
                        <p>Add your restaurant</p>
                    </div>
                    <div className="col-md-3 footer-text">
                        <p>Get help</p>
                        <p>Read FAQs</p>
                        <p>View all cities</p>
                        <p>Restaurant near me</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div style={{ display: 'flex' }}>
                    <div className="col-md-6">
                        <p style={{ color: 'gray' }}><small>Copyright © 2020 Online food</small></p>
                    </div>
                    <div className="col-md-2">
                        <p>Private Policy.</p>
                    </div>
                    <div className="col-md-2">
                        <p>Terms of Use</p>
                    </div>
                    <div className="col-md-2">
                        <p>Pricing</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;