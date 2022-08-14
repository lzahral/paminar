/* eslint-disable eqeqeq */
import React, {useContext} from 'react';

import Image from 'react-bootstrap/Image';

import { ProdouctsContext } from '../context/ProductContext';
import {Link } from 'react-router-dom';

const Details = (props) => {

    const id = props.match.params.id;
    const data = useContext(ProdouctsContext)
    const product = data.filter(item=>item.id == id)[0];

    return (
        <div>
            <Image src={product.picture} fluid/>
            <h3>{product.name}</h3>
            <br/>
            {product.stock && <span>موجود</span>}
            <p dir="ltr"> {product.price} تومان </p>
            <Link to={product.url}/>
        </div>
    );
};

export default Details;