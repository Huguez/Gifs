import React from 'react';

import "@testing-library/jest-dom";

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';


configure({adapter: new Adapter()});

describe('Pruebas con GifExpertApp.js', () => {

    let wrapper = shallow( <GifExpertApp/> );

    beforeEach( () => {
        wrapper = shallow( <GifExpertApp/> );
    } );

    test( 'Debe mostrar el componente correctamente', ()=>{
        const cate = [ 'taco', 'chorizo', 'empanada' ]

        let wrapper = shallow( <GifExpertApp defaultState={ cate } /> );
        
        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find( 'GifGrid' ).length ).toBe( cate.length );
        
    } );

} );