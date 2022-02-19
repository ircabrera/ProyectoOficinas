import { Link } from 'react-router-dom';
import './Arriendo.css'

function Arriendo (props){
    console.log(props)
    return(
        <tr>
            
            <td> {props.itemArriendo.finicio} </td>
            <td> {props.itemArriendo.ffin} </td>
            <td> {props.itemArriendo.valor} </td>
            <td> {props.itemArriendo.id_persona} </td>
            <td> {props.itemArriendo.id_oficina} </td>
            <td><Link to={`/updateArriendo/${props.itemArriendo.id}`}>Edit</Link> </td>
        </tr>
    );
    
}
export default Arriendo;