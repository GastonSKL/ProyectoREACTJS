import React from "react";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaBtc } from "react-icons/fa";
import "./Navegacion.css"


export default function Navegacion () {
    return (
      <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">{<FaBtc/>} APP REACTJS </Navbar.Brand>
      <Nav className="me-auto nav-link">
        <Nav.Link href="#home" className="nav-link-items">Inicio</Nav.Link>
        <Nav.Link href="#features" className="nav-link-items">Cualidades</Nav.Link>
        <Nav.Link href="#pricing" className="nav-link-items">Contacto</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    )
}