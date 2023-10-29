export const createAnuncio = async (photo, name, date, description, price, enVenta, enCompra) => {
    const url = "http://localhost:8000/api/anuncios";

    const token = localStorage.getItem('token');

    const body = {
        photo: photo,
        name: name,
        date: date,
        description: description,
        price: price,
        isForSale: enVenta,
        isForPurchase: enCompra
    }

    let response;
    try {
        response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
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