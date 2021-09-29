import { render } from "@testing-library/react";
import React, { useState } from "react";
import "./ItemsListContainer.css";

export default function ItemCounter (props){
    const [counter, setCounter] = useState(0);

    function sumar () {
        setCounter(counter + 1)
    };

    function restar () {
        setCounter (counter - 1)
    };

        return (
            <div className="counter" >
                <button onClick={sumar} className="btn btn-primary counter-item" size="sm">+</button>
                <h3 className="counter-item">{counter}</h3>
                <button onClick={restar} className="btn btn-primary counter-item" size="sm">-</button>
            </div>
        )
    }
    





    
    
    
    
