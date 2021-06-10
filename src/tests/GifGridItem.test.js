import "@testing-library/jest-dom";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';

import { GifGridItem } from '../components/GifGridItem'


configure({adapter: new Adapter()});
describe( 'Pruebas con GifGridItem.js', () => {

    const title = "El hacker"
    const url = "https://www.hackeo.com"
    const wrapper = shallow( <GifGridItem title={ title } imagen={ url } /> )

    test( 'debe de mostrar el componente correctamente', () => { 
        expect( wrapper ).toMatchSnapshot();
    } );

    test( 'debe de tener un parrafo en el title', () => {
        const p = wrapper.find( 'p' );
        expect( p.text().trim() ).toBe( title )
    } );

    test( 'debe de obtener la imagen igual al props ', () => {
        const img = wrapper.find( 'img' );
        
        expect( img.props().src ).toBe( url );
        
        expect( img.props().alt ).toBe( title );
        
    } );

    test( 'debe de tener animate__animated animate__fadeIn', () => {
        const div = wrapper.find( 'div' );

        // otra manera de hacerlo
        // expect( div.props().className ).toContain( "animate__animated animate__fadeIn" )
        expect( div.props().className.includes( "animate__animated animate__fadeIn" ) ).toBe( true )
    } );

    

} );