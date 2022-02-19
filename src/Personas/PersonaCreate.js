import React, { useState } from "react";
import { createPersona } from '../service/PersonaService'



function PersonaCreate() {

   
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [cedula, setCedula] = useState('');
    const [celular, setCelular] = useState('');
    

    const onSubmit = (event) => {
        event.preventDefault();
        const Personas = {
            
            nombre: nombre,
            apellido:apellido,
            cedula:cedula,
            celular:celular,
        }
        createPersona(Personas)
    }


    const onChange = (event) => {
       
        if (event.target.name === 'nombre')
            setNombre(event.target.value)

        if (event.target.name === 'apellido')
            setApellido(event.target.value)
            
        if (event.target.name === 'cedula')
            setCedula(event.target.value)

        if (event.target.name === 'celular')
            setCelular(event.target.value)

    }

    return (
        <div>
            <h2>CREAR NUEVA PERSONA</h2>
            <form onSubmit={onSubmit} >
                
                <label>
                    Nombre:
                    <input name="nombre" 
                    value={ nombre}
                    onChange={onChange} 
                     />
                </label>
                <label>
                   Apellido:
                    <input name="apellido" 
                    value={ apellido}
                    onChange={onChange}
                     />
                    
                </label>

                <label>
                    Cédula:
                    <input name="cedula" 
                    value={ cedula}
                    onChange={onChange}
                     />
                    
                </label>

                <label>
                    Celular:
                    <input name="celular" 
                    value={ celular}
                    onChange={onChange}
                     />
                    
                </label>

               

                <button type="submit">Guardar</button>
            </form>
        </div >
    );
}

export default PersonaCreate;