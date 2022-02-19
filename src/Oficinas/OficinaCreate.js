import React, { useState } from "react";
import { createOficina } from '../service/OficinaService'



function OficinaCreate() {

   
    const [codigo, setCodigo] = useState('');
    const [direccion, setDireccion] = useState('');
   

    const onSubmit = (event) => {
        event.preventDefault();
        const Oficinas = {
            
            codigo: codigo,
            direccion: direccion,
        }
        createOficina(Oficinas)
    }


    const onChange = (event) => {
       
        if (event.target.name === 'codigo')
            setCodigo(event.target.value)

        if (event.target.name === 'direccion')
            setDireccion(event.target.value)
            
    }

    return (
        <div>
            <h2>CREAR NUEVA OFICINA</h2>
            <form onSubmit={onSubmit} >
                
                <label>
                    Código:
                    <input name="codigo" 
                    value={ codigo}
                    onChange={onChange} 
                     />
                </label>
                <label>
                    Dirección de la oficina:
                    <input name="direccion" 
                    value={direccion}
                    onChange={onChange}
                     />
                    
                </label>

               <button type="submit">Guardar</button>
            </form>
        </div >
    );
}

export default OficinaCreate;