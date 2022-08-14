import React, { useState, useEffect, createContext } from "react";

//API
import { getProducts } from "../services/api";

export const ProdouctsContext = createContext();

const ProductContext = ({ children }) => {
    const [products, setProducts] = useState([{}]);

    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getProducts());
        };
        fetchAPI();
    }, []);

    return (
        <ProdouctsContext.Provider value={products}>
            {children}
        </ProdouctsContext.Provider>
    );
};

export default ProductContext;
