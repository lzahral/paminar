import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Container from "react-bootstrap/Container";
//import AddProduct from "./components/AddProduct";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Details from "./components/Details";

import ProductContext from './context/ProductContext';


const App = () => {
    return (
        <Container className="overflow-hidden bg-white div rounded-4 ">
            <ProductContext>
                <Header/>
                <Switch>
                    <Route path="/products/details/:id" component={Details}/>
                    <Route path="/home" component={HomePage}/>
                    <Route path="/about" component={AboutUs}/>
                    <Route path="/products/:category?" component={Products}/>
                    <Route path="/" component={HomePage}/>
                </Switch>
            </ProductContext>
        </Container>
    );
};

export default App;
