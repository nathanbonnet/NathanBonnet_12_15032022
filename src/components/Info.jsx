import React from 'react';
import PropTypes from 'prop-types';
import '../styles/_info.scss';

/**
 * Créate component info
 * @param { string } nameCategory - the name of the categorie 
 * @returns  { React.Component }
 */
const Info = (nameCategory) => {

    let image;
    switch (nameCategory.category) {
        case "Calories": 
            image = process.env.PUBLIC_URL + '/img/calories-icon.png';
        break;
        case "Proteines": 
            image = process.env.PUBLIC_URL + '/img/proteines-icon.png';
        break;
        case "Glucides": 
            image = process.env.PUBLIC_URL + '/img/glucides-icon.png';
        break;
        case "Lipides": 
            image = process.env.PUBLIC_URL + '/img/lipides-icon.png';
        break;
        default: return "";
    }

    return (
        <div className="info-content">
            <img src={image} alt="image categorie"/>
            <div>
                <p className="content-category">{nameCategory.data}</p>
                <p className="category">{nameCategory.category}</p>
            </div>
        </div>
    )
}

export default Info;

Info.propTypes = {
    category: PropTypes.string,
    data: PropTypes.string
};