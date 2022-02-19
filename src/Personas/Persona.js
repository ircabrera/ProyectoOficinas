import { Link } from 'react-router-dom';
import './Persona.css'


function Persona (props){
    console.log(props)
            return(
                <tr>
                    <td>{props.itemPersona.nombre}</td>
                    <td>{props.itemPersona.apellido}</td>
                    <td>{props.itemPersona.cedula}</td>
                    <td>{props.itemPersona.celular}</td>
                    <td><Link to={`/updatePersona/${props.itemPersona.id}`}>Edit</Link> </td>

                </tr>
                    
            );
        }

export default Persona;
