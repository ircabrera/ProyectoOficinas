function arriendos(props) {
  return (
    <table>
      <thead >
        <tr>
          <th>Fecha de inicio </th>
          <th>Fecha de fin </th>
          <th> Valor </th>
          <th> Arrendatario </th>
          <th> oficina </th>
        </tr>
      </thead>
      <tbody>

        {props.children}

      </tbody>
    </table>
  );
}

export default arriendos;

