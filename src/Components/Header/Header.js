import React from 'react';
import './Header.css';

const Header = () => {

    return (
        <div className="header-container">
            <div className="search-container">
                <div className="container">
                    <h1>Best food waiting for your belly</h1>
                    <form>
                        <input style={{ outline: 'none' }} type="search" placeholder="Search.." name="search" />
                        <button style={{ outline: 'none' }} type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Header;