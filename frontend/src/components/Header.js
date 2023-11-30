import React from "react";
import { Container, Navbar, Nav} from "react-bootstrap";

function header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" className="dark-body-tertiary" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">E-Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/cart"><i class="fa-solid fa-cart-shopping"></i>Cart</Nav.Link>
              <Nav.Link href="/login"><i class="fa-solid fa-user"></i>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default header;
