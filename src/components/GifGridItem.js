import React from 'react'

export const GifGridItem = ( {imagen, title, id} ) => {

    // console.log( imagen );
    return (
        <div className="card animate__animated animate__fadeIn">
            <p> { title } </p>
            <img alt={title} src={ imagen } />
        </div>
    )
}
