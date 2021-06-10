import { getGif } from '../../helpers/getGifs'


describe( 'Pruebas con getGifs Fetch', () => {
    
    test( 'Debe de traer 10 o mas elemtos', async ()=> {
        const gifs = await getGif( 'goku' );
        
        expect( gifs.length ).toBeGreaterThanOrEqual( 10 );
    } );

    test( 'debe traer 0 elementos', async () => {
        const gifs = await getGif( '' );

        expect( gifs.length ).toBe( 0 );
    } );

} );