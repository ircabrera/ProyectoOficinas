
import React, {useState, useEffect} from "react";
import Personas from './Personas';
import Persona from './Persona'
import { getListPersonas } from '../service/PersonaService'
import { Link } from "react-router-dom";

function PersonasPage () {
    
    const [personas, setPersonas] = useState([]);

    useEffect(() => {

        getListPersonas().then(data => {
            setPersonas(data);
        }
        );
    }, []);

    return (
        <div>
            
            <Link to ='./createpersona'>
                Crear Persona
            </Link>
            <h2>LISTA DE PERSONAS</h2>
            <Personas>
                {
                    personas.map(item =>
                        <Persona
                        key={item.id}
                        itemPersona={item} />

                    )
                }
            </Personas>
        </div>
    );
}

export default PersonasPage


			