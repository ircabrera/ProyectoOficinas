import {Link} from 'react-router-dom';
import './Oficina.css'


function Oficina (props){
    console.log(props)
    return(
        <tr>
            
            <td> {props.itemOficina.codigo} </td>
            <td> {props.itemOficina.direccion} </td>
            
            <td><Link to={`/updateOficina/${props.itemOficina.id}`}>Edit</Link> </td>
        </tr>
            );
        }

export default Oficina;
