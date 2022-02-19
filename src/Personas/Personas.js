function Oficinas(props){
 
  return(
    <table>
      <thead >
        <tr>
          <th>Nombre </th>
          <th>Apellido </th>
          <th>Cedula </th>
          <th>Celular </th>
          
          
        </tr>
      </thead>
      <tbody>

        {props.children}

      </tbody>
    </table>
  );
}
export default Oficinas;

