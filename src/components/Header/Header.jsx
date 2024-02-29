import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../../assets/images/logo-2.png'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    function menuOpen() {
        setIsMenuOpen(!isMenuOpen)
    }

    const onNavLinkClick = () => {
        setIsMenuOpen(!isMenuOpen)
    }


    const menuList = [
        {
            itemName: 'Home',
            itemLink: '/'
        },
        {
            itemName: 'Konnektoren',
            itemLink: '/konnektoren'
        },
        {
            itemName: 'Test',
            itemLink: '/test'
        }
    ]



    const NavigationLink = () => {
        return (
            <nav className={`nanigation ${isMenuOpen ? '_active' : ''}`}>
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
            <Link to="/" className="logo">
                <img src={Logo} alt="Logo" />
            </Link>
            {/* <nav className={`nanigation ${isMenuOpen ? '_active' : ''}`}>
                <NavLink className="nanigation__link" to={`/`}>HOME</NavLink>
                <NavLink className="nanigation__link" to={`/konnektoren`}>
                    Konnektoren
                </NavLink>
                <NavLink className="nanigation__link" to={`/test`}>
                    Test
                </NavLink>
            </nav> */}
            <NavigationLink />
            <div className={`menu__button ${isMenuOpen ? '_active' : ''}`} onClick={menuOpen}>
                <div className={`menu__icon ${isMenuOpen ? '_active' : ''}`}>
                    <span></span>
                </div>
            </div>
        </header>
    );
}
export default Header