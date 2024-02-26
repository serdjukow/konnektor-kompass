import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'

const Header = ({ connectors }) => {
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
            </nav>
            <div className="info-panel">
                <span className="connectors-value">{connectors.length || 0}</span>
                <span className="answer-wrong">0</span>
                <span className="answer-right">0</span>
            </div>
        </header>
    );
}
export default Header