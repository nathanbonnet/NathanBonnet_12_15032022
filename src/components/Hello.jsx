import React from 'react'
import PropTypes from 'prop-types';
import '../styles/_hello.scss';

/**
 * Créate component hello
 * @param { string } name - the name of the user
 * @returns  { React.Component }
 */
const Hello = (data) => {
    return (
        <div className="bloc-hello">
            <p className="hello">Bonjour <span>{data.name}</span></p>
            <p className="hello-content">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}

export default Hello;


Hello.propTypes = {
    name: PropTypes.string
};