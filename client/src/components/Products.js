import React,{ useState, useEffect } from 'react';
import Axios from 'axios';
import Row from 'react-bootstrap/Row';

import Product from './Product';

const Products = () => {
    const [data, setData]=useState([])

    useEffect(()=>{
        Axios.get("http://localhost:3001/api/get")
        .then((response)=> setData(response.data))
    },[])

    return (
        <Row xs={1} md={2} lg={4} >
            {data.map(item=><Product key={item.id} data={item}/>)}
        </Row>
    );
};

export default Products;