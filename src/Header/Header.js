import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import'./Header.css'
const Header = () => {
    return (
        <Navbar bg="secondary" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
              <img src="./image/logo.webp" className='text-light bg-info p-2 rounded' alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto  my-2 my-lg-0"
              style={{ maxHeight: '100px'}}
              navbarScroll
            >
              <NavLink to='/home' className='text-light nav'>Home</NavLink>
              <NavLink to='/service' className='text-light nav'>Service</NavLink>
              <NavLink to="/about"className='text-light nav'>About</NavLink>
              <NavLink to='/contact' className='text-light nav'>Contact</NavLink>

            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button className='btn btn-primary' variant="outline-dark">SignUp</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;