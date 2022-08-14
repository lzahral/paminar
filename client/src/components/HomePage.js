import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import "./HomePage.css";

const HomePage = (props) => {
    const category1=()=>{
        props.history.push("products/1")
    }
    const category2=()=>{
        props.history.push("products/2")
    }
    const category3=()=>{
        props.history.push("products/3")
    }
    const category4=()=>{
        props.history.push("products/4")
    }
    return (
        <div>
            <Row >
                <Col  xs={12} lg={5}>
                    <Image alt='logo' src='https://s24.picofile.com/file/8452074718/photo.jpg' fluid />
                </Col>
                <Col xs={10} lg={5} className='col' >
                    <h1 className='mb-4'>لورم ایپسوم متن ساختگی</h1>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراح گرافیک است، </p>
                    <br/>
                    <Button className=' ms-3 '>شروع خرید</Button>
                    <Button>  اینستاگرام ما</Button>
                </Col>
            </Row>
            <div className='categories d-none d-lg-flex align-items-stretch mx-auto'>
                <button onClick={category1} className='start-btn flex-fill'> اتاق</button>
                <button onClick={category2} className='flex-fill'> ست</button>
                <button onClick={category3} className='flex-fill'> اویز ماشین</button>
                <button onClick={category4} className='end-btn flex-fill'> جاکلیدی</button>
            </div>
        </div >
    );
};

export default HomePage;