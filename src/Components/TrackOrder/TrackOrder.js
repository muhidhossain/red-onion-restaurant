import React from 'react';
import './TrackOrder.css';
import map from '../../images/Map/redMap.png';
import logo1 from '../../images/logo/Group 1151.png';
import logo2 from '../../images/logo/Group 1152.png'
import Auth from '../Login/useAuth';

const TrackOrder = () => {
    const auth = Auth()
    return (
        <div className="container trackMap" style={{ marginTop: '100px' }}>
            <div className="row">
                <div className="col-md-8">
                    <img src={map} alt="" />
                </div>
                <div className="col-md-3 trackDetails">
                    <div className="trackBike">
                        <img src={logo1} alt="" />
                    </div>
                    <ul>
                        <li>
                            <small><strong>Your Location</strong></small>
                            <br />
                            <small>Home</small>
                        </li>
                        <br />
                        <li>
                            <small><strong>Shop Address</strong></small>
                            <br />
                            <small>Grand Nawab</small>
                        </li>
                    </ul>
                    <h3>09:30</h3>
                    <small>Estimated delivery time</small>
                    <div className="trackHelmet" style={{ display: 'flex' }}>
                        <img src={logo2} alt="" />
                        <div style={{paddingTop:'15px'}}>
                            <small>Ordered by</small>
                            <br/>
                            <small><strong>{auth.user && auth.user.name}</strong></small>
                        </div>
                    </div>
                    <button>Contact</button>
                </div>
            </div>
        </div>
    );
};

export default TrackOrder;