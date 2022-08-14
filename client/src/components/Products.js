import React,{ useContext } from 'react';
import Row from 'react-bootstrap/Row';

import Product from './Product';
import  { ProdouctsContext } from '../context/ProductContext';


const Products = (props) => {


    const category = props.match.params.category;
    const data = useContext(ProdouctsContext);
    let product = data;
    if(category!==undefined){
        product= data.filter(item=>item.category === category);
    }

    return (
        <Row xs={1} md={2} lg={4} >
            {product.length?product.map(item=><Product key={item.id} data={item} {...props}/>): <h1>loading..</h1>}
        </Row>
    );
};

export default Products;