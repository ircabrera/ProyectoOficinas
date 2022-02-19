

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findByIdOficina,updateOficina } from '../service/OficinaService'
import './Oficina.css'

function OficinasPage() {
  
  const { oficinaId } = useParams();
  const [oficina, setOficina] = useState({codigo:'',direccion:''});

  const onSubmit = (event) => {
    event.preventDefault();
    updateOficina(oficina);
  }
  const onChange = (event) =>{
    if(event.target.name==='codigo')
      setOficina({...oficina,finicio:event.target.value})    
    if(event.target.name==='direccion')    
      setOficina({...oficina,ffin:event.target.value})
    
  }

  useEffect(() => {    
    findByIdOficina(oficinaId).then(data => {
      setOficina(data);  
    }
    );
  }, [oficinaId]);

  return (
    <div className="boxUpdate">
      <form onSubmit={onSubmit} className="boxFormUpdate">
      <h2>ACTUALIZAR OFICINA</h2>
  
          <input 
          className="formUpdateInput"
            name="codigo"
            placeholder="Codigo" 
            value={oficina.finicio}
            onChange={onChange}
   
          />
  
          <input 
           className="formUpdateInput"
            name="direccion"
            placeholder="Direccion"            
            value={oficina.ffin}
            onChange={onChange}
          />
        
        

        <button type="submit" className="formUpdateBtn">Guardar</button>

      </form>
      
    </div>
  );
}

export default OficinasPage;


