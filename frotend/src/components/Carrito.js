import React from 'react';
function formulario_show(){
  console.log('aaaaaaaaa');
  document.getElementById("tienda").style.display = "none";
  document.getElementById("formulario12").style.display = "block";

}
export function Carrito(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.costo, 0);
  
  return (
    <aside className="block col-1 container" id='aa'>
      <h2>Carrito</h2>
      <div className='container'>
        {cartItems.length === 0 && <div>El carrito esta vacio</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="">{item.nombre}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.costo.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className='container'>
              <div className="row">
                <div className="col-2">Items Price</div>
                <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
              </div>
            </div>
            <div className="">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
            </div>
            <hr />
            <div className="">
              <button onClick={formulario_show}>
                Terminar compra
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}