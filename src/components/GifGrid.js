import React from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import Proptypes from 'prop-types';

export const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs( category );
    
    return ( <>
        <h3> { category } </h3>
        { loading && <p className="animate__animated animate__flash "> Loading... </p> }

        <div className="card-grid"> 
            { data.map( ( item ) => { 
                return <GifGridItem key={item.id} {...item } />
            } ) }
        </div> 
    </>);
}

GifGrid.prototype  = {
    category: Proptypes.string.isRequired
}