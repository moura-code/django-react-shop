import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";



export function LopinApp() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({"Entidad":"Persona"});

    const handleChange = (event) => {
        
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = () => {
    
        let csrftoken = document.cookie;
        csrftoken = csrftoken.split('=')[1].split(';')[0];
        fetch('/api/user/api-token-auth/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
    
            },
            body: JSON.stringify(inputs)
        })
        
    }

    

    return (
        <div>
            <div className="formulario" id="sesion">
                <form className="form" >
                    <label >Nombre:</label><br />
                    <input type="text" name="username" value={inputs.username || ""} onChange={handleChange}/><br />
                    <label >Passord:</label><br />
                    <input type="password" name="password" value={inputs.password || ""} onChange={handleChange}/><br />
                    <input type="button" onClick={handleSubmit} value="Entrar"/><br />
                    <button onClick={() => navigate("/register")} >Si no Tienes Cuenta Registrate Gratis</button>
                </form>
            </div>
        </div>
        );
}