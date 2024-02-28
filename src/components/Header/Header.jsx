import { NavLink, Link } from 'react-router-dom'
import Logo from '../../assets/images/logo-2.png'

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="logo">
                <img src={Logo} alt="Logo" />
            </Link>
            <nav className="nanigation">
                <NavLink className="nanigation-link" to={`/`}>HOME</NavLink>
                <NavLink className="nanigation-link" to={`/konnektoren`}>
                    Konnektoren
                </NavLink>
                <NavLink className="nanigation-link" to={`/test`}>
                    Test
                </NavLink>
            </nav>
           
        </header>
    );
}
export default Header