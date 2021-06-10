import React from "react";
import "@testing-library/jest-dom";

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import { GifGrid } from "../components/GifGrid";
import { useFetchGifs } from "../hooks/useFetchGifs";
jest.mock( "../hooks/useFetchGifs" );


configure({adapter: new Adapter()});
describe('Pruebas con GifGrid.js', () => {
    const categoria = "tacos"

    test('Deberia hacer match con el snapshot', () => {
        useFetchGifs.mockReturnValue({ data: [], loading: true });

        let wrapper = shallow( <GifGrid category={ categoria } /> )
        expect( wrapper ).toMatchSnapshot();
    })
    

    test('Debe de mostar items cuando se carga imagenes useFetchGifs ', () => {

        const gifs = [{ id: "123", imagen: "https://www.hackeo.com", title: "hackeo" }]

        useFetchGifs.mockReturnValue({ data: gifs, loading: false });

        const wrapper = shallow( <GifGrid category={ categoria } /> )

        expect( wrapper ).toMatchSnapshot();
        
        expect( wrapper.find( 'p' ).exists() ).toBe(false);
        
        expect( wrapper.find('GifGridItem').length ).toBeGreaterThanOrEqual( gifs.length );
    });
    
    test('Debe ', () => {
        
    })
    

});


