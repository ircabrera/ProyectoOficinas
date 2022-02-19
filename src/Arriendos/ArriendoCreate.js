import React, { useState } from "react";
import { createArriendo } from '../service/ArriendoService'



function ArriendoCreate() {

   
    const [finicio, setFinicio] = useState('');
    const [ffin, setFfin] = useState('');
    const [valor, setValor] = useState('');
    const [id_persona, setId_persona] = useState('');
    const [id_oficina, setId_oficina] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        const Arriendos = {
            
            finicio: finicio,
            ffin: ffin,
            valor: valor,
            id_persona: id_persona,
            id_oficina: id_oficina
        }
        createArriendo(Arriendos)
    }


    const onChange = (event) => {
       
        if (event.target.name === 'finicio')
            setFinicio(event.target.value)

        if (event.target.name === 'ffin')
            setFfin(event.target.value)
            
        if (event.target.name === 'valor')
            setValor(event.target.value)

        if (event.target.name === 'id_persona')
            setId_persona(event.target.value)

        if (event.target.name === 'id_oficina')
            setId_oficina(event.target.value)
    }

    return (
        <div>
            <h2>CREAR NUEVO ARRIENDO</h2>
            <form onSubmit={onSubmit} >
                
                <label>
                    Fecha de inicio del contrato:
                    <input name="finicio" 
                    value={ finicio}
                    onChange={onChange} 
                     />
                </label>
                <label>
                    Fecha de fin del contrato:
                    <input name="ffin" 
                    value={ ffin}
                    onChange={onChange}
                     />
                    
                </label>

                <label>
                    Valor del arriendo:
                    <input name="valor" 
                    value={ valor}
                    onChange={onChange}
                     />
                    
                </label>

                <label>
                    Arrendatario:
                    <input name="id_persona" 
                    value={ id_persona}
                    onChange={onChange}
                     />
                    
                </label>

                <label>
                    Oficina:
                    <input name="id_oficina" 
                    value={ id_oficina}
                    onChange={onChange}
                     />
                    
                </label>

                <button type="submit">Guardar</button>
            </form>
        </div >
    );
}

export default ArriendoCreate;