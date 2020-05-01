import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './Components/Shop/Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Bottom from './Components/Bottom/Bottom';
import Footer from './Components/Footer/Footer';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Logout from './Components/Logout/Logout';
import Shipment from './Components/Shipment/Shipment';
import TrackOrder from './Components/TrackOrder/TrackOrder';

function App() {

  return (
    <div>

      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar></Navbar>
            <Header></Header>
            <Shop></Shop>
            <Bottom></Bottom>
          </Route>
          <Route path="/product/:key">
          <Navbar></Navbar>
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="/cart">
          <Navbar></Navbar>
            <Cart></Cart>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signUp">
            <SignUp></SignUp>
          </Route>
          <Route path="/logout">
            <Logout></Logout>
          </Route>
          <Route path="/shipment">
            <Navbar></Navbar>
            <Shipment></Shipment>
          </Route>
          <Route path="/trackOrder">
            <Navbar></Navbar>
            <TrackOrder></TrackOrder>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
