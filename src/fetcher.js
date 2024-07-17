const BASE_URL = 'http://localhost:3001';
export const fetcher = async (url) => {
    let responseObject = { errorMessage: '', data: [] };
    try {

        const response = await fetch(BASE_URL + url);
        //throw an error if url is invalid
        if (!response.ok) {
            throw new Error(`HTTP Error ${response.status}`);
        }

        const responseData = await response.json();
        responseObject.data = responseData;
        responseObject.errorMessage = '';
    }
    catch (err) {
        responseObject.errorMessage = err.message;
    }
    return responseObject;
}

export const getCategories = () => {
    return fetcher('/categories');
}

export const getProducts = id => {
    return fetcher('/products?catId=' + id)
}