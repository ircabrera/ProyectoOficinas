
import React, {useState, useEffect} from "react";
import Oficinas from './Oficinas';
import Oficina from './Oficina'
import { getListOficinas } from '../service/OficinaService'
import { Link } from "react-router-dom";

function OficinasPage () {
    
    const [oficinas, setOficinas] = useState([]);

    useEffect(() => {

        getListOficinas().then(data => {
            setOficinas(data);
        }
        );
    }, []);

    return (
        <div>
            
            <Link to ='./createoficina'>
                Crear Oficina
            </Link>
            <h2>LISTA DE OFICINA</h2>
            <Oficinas>
                {
                    oficinas.map(item =>
                        <Oficina
                        key={item.id}
                        itemOficina={item} />

                    )
                }
            </Oficinas>
        </div>
    );
}

export default OficinasPage


			