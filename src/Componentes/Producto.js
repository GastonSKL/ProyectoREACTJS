import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Producto.css';
import Counter from './Counter';


const Producto = (props) => {
    return (
        <div>
          
            <Card className="text-center" style={{ width: '18rem' }}>
             <Card.Img variant="top" src={props.img} />
             <Card.Body className="cardItemBody">
             <Card.Title>{props.name}</Card.Title>
             <Card.Text>{props.cost}</Card.Text>
             <Card.Text>Stock: {props.stock}</Card.Text>
             <Button variant="primary" size="sm">Añadir al carrito</Button>
             <Card.Text><Counter /></Card.Text>
             </Card.Body>
            </Card>
        </div>
    )
}

export default Producto


