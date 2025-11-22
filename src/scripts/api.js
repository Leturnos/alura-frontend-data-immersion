export async function buscarDadosDaApi(category, page, userApiKey) {    
    const options = {
        method: 'GET',
        url: 'https://real-time-amazon-data.p.rapidapi.com/best-sellers',
        params: {
            category: category,
            country: 'BR',
            page: page
        },
        headers: {
            'x-rapidapi-key': userApiKey,
            'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
        }
    };

    const response = await axios.request(options);
    return response.data.data.best_sellers; 
}