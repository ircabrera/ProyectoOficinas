
import React, {useState, useEffect} from "react";
import Arriendos from './Arriendos';
import Arriendo from './Arriendo'
import { getListArriendos } from '../service/ArriendoService'
import { Link } from "react-router-dom";

function ArriendosPage () {
    
    const [arriendos, setArriendos] = useState([]);

    useEffect(() => {

        getListArriendos().then(data => {
            setArriendos(data);
        }
        );
    }, []);

    return (
        <div>
            
            <Link to ='./createarriendo'>
                Crear Arriendo
            </Link>
            <h2>LISTA DE ARRIENDOS</h2>
            <Arriendos>
                {
                    arriendos.map(item =>
                        <Arriendo
                        key={item.id}
                        itemArriendo={item} />

                    )
                }
            </Arriendos>
        </div>
    );
}

export default ArriendosPage


			