import React from "react";
import HomePage from "./components/HomePage";
import Container from "react-bootstrap/Container";
import AddProduct from "./components/AddProduct";
import Products from "./components/Products";

const App = () => {
    return (
        <Container>
            <HomePage />
            <AddProduct/>
            <Products/>
        </Container>
    );
};

export default App;
