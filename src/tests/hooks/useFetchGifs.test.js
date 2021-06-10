import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe( 'Pruebas con el Hook useFetchGifs', ()=>{
    
    test('Debe de retornar el estado original', async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs() );
        const { data, loading } = result.current;

        await waitForNextUpdate();
        // console.log( data, loading );
        expect( data ).toEqual( [] )
        expect( loading ).toBe( true )
    });
    
    test('Debe de retornar un arreglo de imgs y el loading en false', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Tacos' ) );
        await waitForNextUpdate();
        
        const { data, loading } = result.current;

        expect( data.length ).toBe( 25 );
        expect( loading ).not.toBeTruthy();

    } );

} );