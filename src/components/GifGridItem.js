import React from 'react'
import { PropTypes } from 'prop-types';

export const GifGridItem = ( {imagen, title, id} ) => {

    // console.log( imagen );
    return (
        <div className="card animate__animated animate__fadeIn">
            <p> { title } </p>
            <img alt={title} src={ imagen } />
        </div>
    )
}

GifGridItem.prototype = {
    imagen: PropTypes.string.isRequired,
    title:  PropTypes.string.isRequired,
    id:     PropTypes.string
}
