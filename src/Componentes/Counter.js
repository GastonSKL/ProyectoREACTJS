import { render} from "@testing-library/react";
import React, { useState } from "react";
import "./Counter.css";
import Producto from './Producto';
import Productos from "./Productos";

export default function Counter (props){
    const [counter, setCounter] = useState(0);


    function sumar (props) {
        setCounter(counter + 1)
    };

    function restar () {
         if (counter > 0) {setCounter (counter - 1)}
    };

        return (
            <div className="counter" >
                <button onClick={sumar} className="btn btn-primary counter-item" size="sm">+</button>
                <h3 className="counter-item">{counter}</h3>
                <button onClick={restar} className="btn btn-primary counter-item" size="sm">-</button>
            </div>
        )
    }