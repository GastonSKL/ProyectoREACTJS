import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBtc } from "react-icons/fa";
import "./Navegacion.css";
import Carrito from "./CartWidget.js";
import ItemCounter from "./ItemsListContainer";




export default function Navegacion () {
    return (
      <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">{<FaBtc/>} APP REACTJS </Navbar.Brand>
      <Nav className="me-auto nav-link">
        <Nav.Link href="#home" className="nav-link-items">Inicio</Nav.Link>
        <Nav.Link href="#features" className="nav-link-items">Cualidades</Nav.Link>
        <Nav.Link href="#pricing" className="nav-link-items">Contacto</Nav.Link>
        < Carrito />
        < ItemCounter estado="0" />
      </Nav>
      </Container >

    </Navbar>
    )
}