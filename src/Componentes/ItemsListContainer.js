import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./ItemsListContainer.css";

export default function ItemCounter (props){
    const {estado} = props;


        return (

            <div className="counter">
    <button className="btn btn-primary counter-item">+</button>
    <h3 className="counter-item">{estado}</h3>
    <button className="btn btn-primary counter-item">-</button>
    </div>

        )
    }
    





    
    
    
    
