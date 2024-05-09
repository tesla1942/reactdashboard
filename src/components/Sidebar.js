import React from 'react';
import { Nav, ListGroup, ListGroupItem } from 'react-bootstrap';

function Sidebar() {
  return (
    <ListGroup>
      <ListGroupItem active>
        <Nav.Link href="/">Home</Nav.Link>
      </ListGroupItem>
      <ListGroupItem>
        <Nav.Link href="/users">Users</Nav.Link>
      </ListGroupItem>
      <ListGroupItem>
        <Nav.Link href="/orders">Orders</Nav.Link>
      </ListGroupItem>
      <ListGroupItem>
        <Nav.Link href="/products">Products</Nav.Link>
      </ListGroupItem>
    </ListGroup>
  );
}

export default Sidebar;
