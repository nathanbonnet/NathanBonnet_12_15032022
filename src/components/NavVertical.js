import React from 'react'
import '../styles/_navHorizontal.scss'

/**
 * créate NavHorizontal
 * @returns { React.Component }
 */
const NavHorizontal = () => {

    return (
        <div className="navHorizontal">
            <div className="navHorizontal-content">
                <div className="nav-content">
                    <img src={process.env.PUBLIC_URL + '/img/icon.png'} alt="incon" className="incon"/>
                    <img src={process.env.PUBLIC_URL + '/img/icon-2.png'} alt="incon" className="incon"/>
                    <img src={process.env.PUBLIC_URL + '/img/icon-3.png'} alt="incon" className="incon"/>
                    <img src={process.env.PUBLIC_URL + '/img/icon-4.png'} alt="incon" className="incon"/>
                </div>
                <div className="bloc-Copiryght">
                    <p className="Copiryght">Copiryght, SportSee 2020</p>
                </div>
            </div>
        </div>
    )
}

export default NavHorizontal;