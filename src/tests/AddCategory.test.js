import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../components/AddCategory";

describe( 'Pruebas con AddCategory.js', ()=>{

    const setCategory = jest.fn();

    let wrapper = shallow( <AddCategory setCategories={ setCategory } /> );

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategory } /> );
    })

    test( 'debe de mostrar correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    } );

    test('debe de cambiar la caja de texto', ()=>{
        const input = wrapper.find( 'input' );
        const value = "hacker";
        input.simulate('change', { target: { value } } );

        expect( wrapper.find( 'p' ).text().trim()  ).toBe( value )

    } );

    test( 'No debe de postear la informacion', () => {
        wrapper.find( 'form' ).simulate( 'submit', { preventDefault(){} } );

        expect( setCategory ).not.toHaveBeenCalled();
    } );

    test(' Debe de llamar el setCategory ', ()=>{
        
        const value = "hacker";
        
        wrapper.find( 'input' ).simulate('change', { target: { value } } );
        
        wrapper.find( 'form' ).simulate( 'submit', { preventDefault(){} } ); 
                
        expect( setCategory ).toHaveBeenCalled();
        expect( setCategory ).toHaveBeenCalledTimes(1);
        expect( setCategory ).toHaveBeenCalledWith( expect.any( Function ) )
        
        expect( wrapper.find( 'input' ).props().value  ).toBe( '' );
    } );
    
} );