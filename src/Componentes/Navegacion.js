import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBtc } from "react-icons/fa";
import "./Navegacion.css";
import Carrito from "./CartWidget.js";





export default function Navegacion () {
    return (
      <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
      <Navbar.Brand href="#home">{<FaBtc/>} APP REACTJS </Navbar.Brand>
      <Nav className="me-auto nav-link">
        <Nav.Link href="#Carrusel" className="nav-link-items">Inicio</Nav.Link>
        <Nav.Link href="#Productos" className="nav-link-items">Productos</Nav.Link>
        <Nav.Link href="#pricing" className="nav-link-items">Contacto</Nav.Link>
        < Carrito />
        
      </Nav>
      </Container >

    </Navbar>
    )
}