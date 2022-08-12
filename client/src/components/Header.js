import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';;

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='d-none d-lg-block p-4 pb-0 bg-white'>
            <Container className='me-auto'>
                <Navbar.Brand href="#home">
                    <h3>پامینار</h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav variant="pills" className="me-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link className='px-3 m-1' href="#home">صفحه اصلی</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='px-3 m-1' href="#about">درباره ما</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;