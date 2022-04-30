import React from "react";

export function Productos(props) {
  const { product, onAdd } = props;
  

  return (
    <div className="block" style={{width: "200px"}}>
        <img src={product.imagen} className="card-img-top" style={{width:"100px",height:"100px"}} alt={product.nombre} />
        <div className="card-body block">
            <h5 className="card-title">{product.nombre}</h5>
            <p className="card-text">A {product.costo}$ el Rollo</p>
        </div>
        <div>
            <button onClick={() => onAdd(product)}>Add To Cart</button>
        </div>
    </div>);
}