

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findByIdArriendo,updateArriendo } from '../service/ArriendoService'
import './Arriendo.css'

function ArriendosPage() {
  
  const { arriendoId } = useParams();
  const [arriendo, setArriendo] = useState({finicio:'',ffin:'',valor:'',id_persona:'',id_oficina:''});

  const onSubmit = (event) => {
    event.preventDefault();
    updateArriendo(arriendo);
  }
  const onChange = (event) =>{
    if(event.target.name === 'finicio')
      setArriendo({...arriendo,finicio:event.target.value})    
    if(event.target.name==='ffin')    
      setArriendo({...arriendo,ffin:event.target.value})
    if(event.target.name==='valor')
      setArriendo({...arriendo,valor:event.target.value})
    if(event.target.name==='id_persona')    
      setArriendo({...arriendo,id_persona:event.target.value})
    if(event.target.name==='id_oficina')
      setArriendo({...arriendo,id_oficina:event.target.value})
  }

  useEffect(() => {    
    findByIdArriendo(arriendoId).then(data => {
      setArriendo(data);  
    }
    );
  }, [arriendoId]);

  return (
    <div className="boxUpdate">
      <form onSubmit={onSubmit} className="boxFormUpdate">
      <h2>ACTUALIZAR ARRIENDO</h2>
  
          <input 
          className="formUpdateInput"
            name="finicio"
            placeholder="Finicio" 
            value={arriendo.finicio}
            onChange={onChange}
   
          />
  
          <input 
           className="formUpdateInput"
            name="ffin"
            placeholder="Ffin"            
            value={arriendo.ffin}
            onChange={onChange}
          />
        
          <input 
           className="formUpdateInput"
           placeholder="Valor"
            name="valor"
            value={arriendo.valor}
            onChange={onChange}
          />

            <input 
           className="formUpdateInput"
            name="id_persona"
            placeholder="Id_persona"            
            value={arriendo.id_persona}
            onChange={onChange}
          />
        
          <input 
           className="formUpdateInput"
           placeholder="Id_oficina"
            name="id_oficina"
            value={arriendo.id_oficina}
            onChange={onChange}
          />
        

        <button type="submit" className="formUpdateBtn">Guardar</button>

      </form>
      
    </div>
  );
}

export default ArriendosPage;


