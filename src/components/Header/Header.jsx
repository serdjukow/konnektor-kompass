import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <nav className="nanigation">
                <NavLink className="nanigation-link" to={`/`}>HOME</NavLink>
                <NavLink className="nanigation-link" to={`/konnektoren`}>
                    Konnektoren
                </NavLink>
                <NavLink className="nanigation-link" to={`/test`}>
                    Test
                </NavLink>
                {/* <NavLink className="nanigation-link" to={`/test/result`}>
                    Test result
                </NavLink> */}
            </nav>
           
        </header>
    );
}
export default Header