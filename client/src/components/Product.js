import React from 'react';
import Image from 'react-bootstrap/Image';

const Product = (props) => {
    const data = props.data;

    const clickHandler= ()=>{
        props.history.push(`/products/details/${data.id}`)
    }

    return (
        <div onClick={clickHandler} className='product bg-white m-2 p-3 pb-1 overflow-hidden rounded-4'>
            <Image src={data.picture} fluid/>
            <h3>{data.name}</h3>
            <br/>
            {data.stock && <span>موجود</span>}
            <p dir="ltr"> {data.price} تومان </p>
        </div>
    );
};

export default Product;