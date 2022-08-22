const BASE_URL = 'https://fakestoreapi.com';

export async function fetchProducts(){
    return fetch(`${BASE_URL}/products`).then((response)=>response.json());
}

export async function fetchProduct(id:string|string[]|undefined){
    return fetch(`${BASE_URL}/products/${id}`).then((response)=>response.json());
}

export async function fetchAllCategories(){
    return fetch(`${BASE_URL}/products/categories`).then((response)=>response.json());
}

export async function fetchSpecificCategory(category:string){
    return fetch(`${BASE_URL}/products/category/${category}`).then((response)=>response.json());
}

export async function fetchAllCarts(){
    return fetch(`${BASE_URL}/carts`).then((response)=>response.json());
}