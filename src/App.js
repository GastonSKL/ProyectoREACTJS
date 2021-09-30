import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from "./Componentes/Navegacion.js";
import Slider from './Componentes/Corrusel.js';
import Productos from './Componentes/Productos.js';
import './Componentes/Global.css';
import Producto from './Componentes/Producto.js';
import ItemsListContainer from './Componentes/ItemsListContainer.js';


function App() {
  return (
    <div>
      
      < Navegacion />
      < Slider />
      <Productos />
      
    </div>
  );
}

export default App;
