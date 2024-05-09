import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container> 
        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-scroll" />
        <Navbar.Collapse id="navbar-scroll">
          {/* Add navigation links here */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar