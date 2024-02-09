import { Link } from "react-router-dom"


function Navbar() {
    return (

        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/contact">Contato</Link>
            </li>
            <li>
                <Link to="/company">Empresa</Link>
            </li>
            <li>
                <Link to="/NeewProject">Novo Projeto</Link>
            </li>
        </ul>

    )
}

export default Navbar