import React from 'react';
import Header from '../Header/Header';
import './Shop.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Breakfast from '../Breakfast/Breakfast';
import Lunch from '../Lunch/Lunch';
import Dinner from '../Dinner/Dinner';
import ProductDetails from '../ProductDetails/ProductDetails';
import Bottom from '../Bottom/Bottom';
import Footer from '../Footer/Footer';

const Shop = () => {
    return (
        <div className="shop-container">
            <Header></Header>
            <div className="meal-time">
                <a href="/breakfast">Breakfast</a>
                <a href="/lunch">Lunch</a>
                <a href="/dinner">Dinner</a>
            </div>
            <div>
                <Router>
                    <Switch>
                        <Route path="/breakfast">
                            <Breakfast></Breakfast>
                        </Route>
                        <Route path="/lunch">
                            <Lunch></Lunch>
                        </Route>
                        <Route path="/dinner">
                            <Dinner></Dinner>
                        </Route>
                        <Route exact path="/">
                            <Lunch></Lunch>
                        </Route>
                        <Route path="/product/:productKey">
                            <ProductDetails></ProductDetails>
                        </Route>
                    </Switch>
                </Router>
                <Bottom></Bottom>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Shop;