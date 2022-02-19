
function Oficinas(props){
 
    return(
      <table>
        <thead >
          <tr>
            <th>Codigo </th>
            <th>Dirección </th>
            
          </tr>
        </thead>
        <tbody>
  
          {props.children}
  
        </tbody>
      </table>
    );
  }
export default Oficinas;

