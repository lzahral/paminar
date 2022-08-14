import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className='d-none d-lg-block p-4 pb-0 bg-white'>
            
            <Container className='me-auto'>
                <Navbar.Brand href="#home">
                    <h3>پامینار</h3>
                </Navbar.Brand>

                <Nav className="me-auto" >
                    <Link className='nav-link px-3 m-1' to="/">صفحه اصلی</Link>
                    <Link className='nav-link px-3 m-1' to="/products">محصولات</Link>
                    <Link className='nav-link px-3 m-1' to="/about">درباره ما</Link>
                </Nav>
                
            </Container>          
        </Navbar>
    );
};

export default Header;