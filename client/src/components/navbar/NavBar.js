import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'




const Navigation = () => {

 
    return (
        <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">JKHauth's Daily Problem</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <NavDropdown title="By Language" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Javascript</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Python</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
            <Nav.Link href="#deets">JKHauth Portfolio</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                Buy Me a Coffee
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
        </> 
     )
}
    
export default Navigation;