

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findByIdPersona,updatePersona } from '../service/PersonaService'
import './Persona.css'

function PersonasPage() {
  
  const { personaId } = useParams();
  const [persona, setPersona] = useState({nombre:'',apellido:'',cedula:'',celular:'',id_oficina:''});

  const onSubmit = (event) => {
    event.preventDefault();
    updatePersona(persona);
  }
  const onChange = (event) =>{
    if(event.target.name==='nombre')
      setPersona({...persona,nombre:event.target.value})    
    if(event.target.name==='apellido')    
      setPersona({...persona,apellido:event.target.value})
    if(event.target.name==='cedula')
      setPersona({...persona,cedula:event.target.value})
    if(event.target.name==='celular')    
      setPersona({...persona,celular:event.target.value})
    if(event.target.name==='id_oficina')
      setPersona({...persona,id_oficina:event.target.value})
  }

  useEffect(() => {    
    findByIdPersona(personaId).then(data => {
      setPersona(data);  
    }
    );
  }, [personaId]);

  return (
    <div className="boxUpdate">
      <form onSubmit={onSubmit} className="boxFormUpdate">
      <h2>ACTUALIZAR PERSONA</h2>
  
          <input 
          className="formUpdateInput"
            name="nombre"
            placeholder="Nombre" 
            value={persona.nombre}
            onChange={onChange}
   
          />
  
          <input 
           className="formUpdateInput"
            name="apellido"
            placeholder="Apellido"            
            value={persona.apellido}
            onChange={onChange}
          />
        
          <input 
           className="formUpdateInput"
           placeholder="Cedula"
            name="cedula"
            value={persona.cedula}
            onChange={onChange}
          />

            <input 
           className="formUpdateInput"
            name="celular"
            placeholder="Celular"            
            value={persona.celular}
            onChange={onChange}
          />
        
          <input 
           className="formUpdateInput"
           placeholder="Id_oficina"
            name="id_oficina"
            value={persona.id_oficina}
            onChange={onChange}
          />
        

        <button type="submit" className="formUpdateBtn">Guardar</button>

      </form>
      
    </div>
  );
}

export default PersonasPage;


