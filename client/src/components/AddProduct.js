import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Axios from "axios";

const AddProduct = () => {

    const [data, setData]=useState({
        name: "",
        picture:"",
        discription:"",
        category: "",
        price: "",
        url: "",
        stock:false
    })

    const changeHandler=(event)=>{
        if(event.target.name === "stock"){
            setData({...data, [event.target.name]:event.target.checked})
        }
        else{
            setData({...data, [event.target.name]:event.target.value})
        }
    }

    const submitHandler= event =>{
        event.preventDefault();
        
        Axios.post("http://localhost:3001/api/insert", {
            name:data.name, 
            picture:data.picture, 
            discription:data.discription, 
            category:data.category, 
            price:data.price, 
            url:data.url, 
            stock:data.stock
        })
       console.log(data);
        setData({
            name: "",
            picture:"",
            discription:"",
            category: "1",
            price: "",
            url: "",
            stock:false
        })     
    }

    return (
        <Form onSubmit={submitHandler}>
            <h2>محصول جدید</h2>
            <Form.Group className="mb-3">
                <Form.Label> اسم محصول</Form.Label>
                <Form.Control type="text"  name="name" value={data.name} onChange={changeHandler}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>عکس محصول</Form.Label>
                <Form.Control type="text"  name="picture" value={data.picture} onChange={changeHandler}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>توضیحات</Form.Label>
                <Form.Control as="textarea" rows={4} name="discription" value={data.discription} onChange={changeHandler}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>دسته بندی</Form.Label>
                <Form.Select name="category" value={data.category} onChange={changeHandler}>
                    <option value="1">اتاق</option>
                    <option value="2">ست</option>
                    <option value="3">آویز ماشین</option>
                    <option value="4">جاکلیدی</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label> قیمت محصول</Form.Label>
                <Form.Control type="text" name="price" value={data.price} onChange={changeHandler}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>لینک دیجی کالا</Form.Label>
                <Form.Control type="text" name="url" value={data.url} onChange={changeHandler}/>
            </Form.Group>
            <Form.Group className="mb-3 me-auto">
                <Form.Check type="checkbox" label="موجود" name="stock" value={data.stock} onChange={changeHandler}/>
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    );
};

export default AddProduct;