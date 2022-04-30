import React, { useState } from 'react';
import { useEffect } from 'react';

function show_alert(data) {
    let a = ''
    let dict = {'username': 'Nombre','DNI': "DNI","Telefono" : 'Telefono'  , "Direccion" : "Direccion","email": 'Email'}
    data.forEach(element => {
        a += dict[element]
        a += '\n'
    });
    alert('Los campos:\n' + a + 'Son invalidos, porfavor intentalo otra vez.')
    
}
function tienda_show(){
    document.getElementById("tienda").style.display = "block";
    document.getElementById("formulario12").style.display = "none";
}

export function RegisterApp(props) {
    let items =  props.cartItems
    const [load,setData] = useState(false)
    
    const [inputs, setInputs] = useState({"Entidad":"Persona"});

    const handleChange = (event) => {
        
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit =  () => {
        inputs.password = "contrasena"
        let csrftoken = document.cookie;
        csrftoken = csrftoken.split('=')[1].split(';')[0];
         fetch('/api/user/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
    
            },
            body: JSON.stringify(inputs)
        })
    .then(res => {if (res.status == 400) {res.json().then(data => show_alert(Object.keys(data)))}}).finally(() => {
        
        
            const json = {'productos': {}}
            
    
            items.map((product) =>(
                json["productos"][product.nombre] = product.qty)
            )
            let csrftoken = document.cookie;
        csrftoken = csrftoken.split('=')[1].split(';')[0];
            fetch('/api/user/me/' +inputs.username + '/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken
        
                },
                
                body: JSON.stringify(json)
            })
            alert('Pedido hecho, pronto entraremos en contacto contigo,podes cerrar la pagina ya')
            
      })
        
    }
    
    
   
        
        

        



    return (<div>
                  <div className="formularioRe" id="sesion">
                  <button type='button' onClick={tienda_show}>Volver a la tienda</button><br />
                      <form className="form1" >
                      <label >Formulario</label><br />
                          <label >Nombre:</label><br />
                              <input type="text" name="username" value={inputs.username || ""} onChange={handleChange}/><br />
                          <label >DNI:</label><br />
                              <input type="text" name="DNI" value={inputs.DNI || ""} onChange={handleChange}/><br />
                            <label >Email:</label><br />
                              <input type="text" name="email" value={inputs.email || ""} onChange={handleChange}/><br />
                          <label className="col-sm-2 control-label" >Entidad</label><br />
                              <select className="form-control" id="slcNacionalidad" name="Entidad" value={inputs.Entidad} onChange={handleChange}>
                                  <option value="Persona">Persona</option>
                                   <option value="Empresa">Empresa</option>
                            </select><br />
                          <label >Telefono:</label><br />
                              <input type="text" name="Telefono" value={inputs.Telefono || ""} onChange={handleChange}/><br />
                          <label >Direccion:</label><br />
                              <textarea placeholder="Escribe tu direccion" name='Direccion' value={inputs.Direccion || ""} onChange={handleChange}></textarea><br />
                             <button type='button' onClick={handleSubmit}>Confirmar pedido</button><br />
                             
                      </form>
                      
                      <script src="{% static 'js/registro.js' %}"></script>
                  </div>
              </div>
        );
}