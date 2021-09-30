import { render} from "@testing-library/react";
import React, { useState } from "react";
import "./ItemsListContainer.css";
import Producto from './Producto';
import Productos from "./Productos";

export default function ItemsListContainer (){

    return (
        <div className="container">
            <div className="row gy-3">
                <div className="col-md-3">
                < Productos />
                </div>

            </div>
        </div>
    )
}
    





    
    
    
    
