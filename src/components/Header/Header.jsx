import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../../assets/images/logo-2.png'
import { menuList, HOME_ROUTE } from '../../utils/consts'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    function menuOpen() {
        setIsMenuOpen(!isMenuOpen)
    }

    const NavigationLink = () => {
        return (
            <nav className={`nanigation ${isMenuOpen && '_active'}`}>
                {menuList.map((item, id) => {
                    return (
                        <NavLink key={id} onClick={() => setIsMenuOpen(!isMenuOpen)} className="nanigation__link" to={item.itemLink}>
                            {item.itemName}
                        </NavLink>
                    )
                })}
            </nav>
        )
    }

    return (
        <header className="header">
            <Link to={HOME_ROUTE} className="logo">
                <img src={Logo} alt="Konnektor Kompas Logo" />
            </Link>
            <NavigationLink />
            <div className={`menu__button ${isMenuOpen && '_active'}`} onClick={menuOpen}>
                <div className={`menu__icon ${isMenuOpen && '_active'}`}>
                    <span></span>
                </div>
            </div>
        </header>
    );
}
export default Header