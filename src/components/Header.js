import React from 'react'

/**
 * Créate component header
 * @returns  { React.Component }
 */
const Header = () => {
    return (
        <div className="header">
            <div className="content">
                <div className="bloc_logo">
                    <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="logo" className="logo"/>
                </div>
                <div className="nav">
                    <ul>
                        <li>
                            Accueil
                        </li>
                        <li>
                            Profil
                        </li>
                        <li>
                            Réglage
                        </li>
                        <li>
                            Communauté
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;