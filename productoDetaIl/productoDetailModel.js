const parseProducto = (anuncio) => {
    return {
        id: anuncio.id,
        photo: anuncio.photo,
        name: anuncio.name.toUpperCase(),
        date: anuncio.date, 
        description: anuncio.description,
        price: anuncio.price,
        isForSale: anuncio.isForSale,
        userId: anuncio.user.id,
        id: anuncio.id
    }
}


export const getProducto = async (anuncioId) => {
    const url = `http://localhost:8000/api/anuncios/${anuncioId}?_expand=user`;
    let producto;
    try {
        const response = await fetch(url);
        if(response.ok){
            producto = await response.json();
        }else{
            throw new Error('El producto no existe');
        }
    } catch (error) {
        throw error.message;
    }

    return parseProducto(producto)
}



export const deleteProducto = async (anuncioId) => {
    const url = `http://localhost:8000/api/anuncios/${anuncioId}`;

    const token = localStorage.getItem('token');

    let response;
    try {
        response = await fetch(url, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if(!response.ok){
            const data = await response.json()
            throw new Error(data.message);
        }
    } catch (error) {
        if(error.message){
            throw error.message;
        }else{
            throw error;
        }
    }
}
