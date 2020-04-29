import React from 'react';
import './Logout.css';
import logo from '../../images/logo/logo2.png'
import Auth from '../Login/useAuth';

const Logout = () => {
    const auth = Auth();
    console.log(auth.user)
    return (
        <div className="container logout-container">
            <div className="d-flex justify-content-center">
                <a href="/"><img src={logo} alt="" /></a>
            </div>
            <div className="d-flex justify-content-center" style={{ textAlign: 'center' }}>
                <div style={{ margin: '160px 0px' }}>
                    <button className="logout-btn" onClick={auth.signOut}>Logout</button>
                    {
                        !auth.user ?
                            <div>
                                <p style={{ color: 'green', marginTop: '10px' }}>Logout successful.</p>
                                <a href="/">Go to home page.</a>
                            </div> :
                            <p style={{ display: 'none' }}></p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Logout;