import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./Corrusel.css";
import slider2 from "../Imagenes/slider2.jpg";
import slider1 from "../Imagenes/slider1.jpg";
import slider3 from "../Imagenes/slider3.jpg";


export default function Slider () {
    return (
        <Carousel variant="dark" id="Carrusel">
  <Carousel.Item className="item-corrusel">
    <img className="d-block w-100 h-100" src= {slider1} alt="First slide" />
    <Carousel.Caption>
      <h5 className="plight">Lorem impsum</h5>
      <p className="plight">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="item-corrusel">
    <img className="d-block w-100 h-100" src={slider2} alt="Second slide"/>
    <Carousel.Caption>
      <h5 className="plight">Lorem impsum</h5>
      <p className="plight">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="item-corrusel ">
    <img className="d-block w-100 h-100" src={slider3} alt="Third slide" />
    <Carousel.Caption>
      <h5 className="plight">Lorem impsum</h5>
      <p className="plight">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}