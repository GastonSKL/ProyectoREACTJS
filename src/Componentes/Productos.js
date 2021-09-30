import React, {useState} from 'react';
import Producto from './Producto';
import "./Productos.css";

const Productos = () => {
    const [productos, setProductos] = useState([
        {id:1 , name:"Remera", cost:1500, stock:3, img:"https://media1.sistemacontinuo.com.ar/5289/remera-hombre-sublimable.jpg"},
        {id:2 , name:"Pantalon", cost:2500, stock:7, img:"https://statics.glamit.com.ar/media/catalog/product/cache/8/image/9df78eab33525d08d6e5fb8d27136e95/g/r/grisino_g3pg22_mg_1.jpg"},
        {id:3 , name:"Buzo", cost:4000, stock:8, img:"https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/b/u/buzo_gris_melange_liso.jpg"},
        
    ]);

    return (
        <div id="Productos" className="productosContainer container">
            

            {productos.map(producto => {
                return <Producto name={producto.name} img={producto.img} cost={producto.cost} stock={producto.stock}/>
            })}          
               
        </div>
    )
}

export default Productos
