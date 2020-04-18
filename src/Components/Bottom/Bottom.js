import React from 'react';
import './Bottom.css';
import image1 from '../../images/Bottom/image1.jpg'
import image2 from '../../images/Bottom/image2.jpg'
import image3 from '../../images/Bottom/image3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faBell, faTruck } from '@fortawesome/free-solid-svg-icons';

const Bottom = () => {
    return (
        <div className="container bottom">
            <button>Checkout Your Food</button>
            <div className="col-md-6 about-us">
            <h3>Why you choose us</h3>
            <p>Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods. Boy prosperous increasing surrounded.</p>
            </div>
            <div className="card-group bottom-card">
                <div className="card col-md-4 bottom-detail">
                    <img src={image1} alt=""/>
                    <br/>
                    <div className="container">
                        <div style={{display: 'flex'}}>
                            <FontAwesomeIcon icon={faBus} style={{margin: "10px", color: 'red'}}/>
                            <div>
                                <h5>Fast Delivery</h5>
                                <br/>
                                <p>
                                    Keep your system in sync with automatic web hook based notification each time link is paid and how we dream about our future.
                                </p>
                                <br/>
                                <p style={{color:'blue'}}>See more</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card col-md-4 bottom-detail">
                    <img src={image2} alt=""/>
                    <br/>
                    <div className="container">
                        <div style={{display: 'flex'}}>
                            <FontAwesomeIcon icon={faBell} style={{margin: "10px", color: 'red'}}/>
                            <div>
                                <h5>A Good Auto Responder</h5>
                                <br/>
                                <p>
                                    Keep your system in sync with automatic web hook based notification each time link is paid and how we dream about our future.
                                </p>
                                <br/>
                                <p style={{color:'blue'}}>See more</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card col-md-4 bottom-detail">
                    <img src={image3} alt=""/>
                    <br/>
                    <div className="container">
                        <div style={{display: 'flex'}}>
                            <FontAwesomeIcon icon={faTruck} style={{margin: "10px", color: 'red'}}/>
                            <div>
                                <h5>Home Delivery</h5>
                                <br/>
                                <p>
                                    Keep your system in sync with automatic web hook based notification each time link is paid and how we dream about our future.
                                </p>
                                <br/>
                                <p style={{color:'blue'}}>See more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bottom;