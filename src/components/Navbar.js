
import { NavLink } from "react-router-dom";
import "./Navbar.css";
export default function Navbar (){

return (
    <ul>
        <li>
            <NavLink to="/arriendos" className="navlink">
                Arriendos
            </NavLink>
        </li>
        <li>
            <NavLink to="/oficinas" className="navlink">
                Oficinas
            </NavLink>
        </li>
        <li>
            <NavLink to="/personas" className="navlink">
                Personas
            </NavLink>
        </li>
       
    </ul>
);

}
