import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = ({ defaultState = [] })=> {
    
    const [ categorias, setCategoria ] = useState( defaultState )

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategoria } />
            <hr />
            <ol>
                { categorias.map( (cate, i ) => { 
                    return <GifGrid key={`${cate}`} category={ cate } />
                } ) }
            </ol>
        </div>
    );
}