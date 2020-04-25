import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './Components/Shop/Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Bottom from './Components/Bottom/Bottom';
import Footer from './Components/Footer/Footer';
import ProductDetails from './Components/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:key">
            <ProductDetails></ProductDetails>
          </Route>
        </Switch>
      </Router>
      <Bottom></Bottom>
      <Footer></Footer>
    </div>
  );
}

export default App;
