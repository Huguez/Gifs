

export const getGif = async ( category ) => {
    
    const api_key = 'IqIIolx2W325nKcvPuEzq2JV8yUlgnUz'
    const endpoint = `https://api.giphy.com/v1/stickers/search?api_key=${ api_key }&q=${ category }&limit=25&offset=0&rating=g&lang=en`
    const resp = await fetch( endpoint )
    const { data } = await resp.json();
    
    const gifs = data.map( ( img ) => { 
        return {
            id: img.id,
            title: img.title,
            imagen: img.images?.downsized_medium.url
        }
    } );

    return gifs;
}

