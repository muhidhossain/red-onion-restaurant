import React from 'react';
import logo2 from '../../images/logo/logo2.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
// const handleAddInventory = () => {
//     const foodItem = FakeData[0];
//     console.log(foodItem)
//     fetch('https://aqueous-spire-21006.herokuapp.com/addFoodItems', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(FakeData)
//       })
//       .then(res => res.json())
//       .then(data => {
//           console.log('post successful', data)
//       })
// }

    return (
        <div className="header-container">
            <div>
                <nav className="navbar">
                    <div>
                        <img src={logo2} alt=""/>
                    </div>
                    <div className="rightNav">
                        <a><FontAwesomeIcon icon={faShoppingCart} /></a>
                        <a>Login</a>
                        <button className="signUpBtn">Sign up</button>
                    </div>
                </nav>
            </div>
            <div className="search-container">
                <div className="container">
                    <h1>Best food waiting for your belly</h1>
                    <form>
                        <input type="search" placeholder="Search.." name="search"/>
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Header;