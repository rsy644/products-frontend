import api from "./api"

const resource = "/products"

export const allProducts = () => api.get(resource)

export const showProduct = id => api.get(`${resource}/${id}`)

export const createProduct = product => api.post(resource, product)

export const updateproduct = (id, product) => api.put(`${resource}/${id}`, product)

export const removeProduct = id => api.delete(`${resource}/${id}`)

export const completeProduct = (id, product) => api.put(`${resource}/${id}/complete`, product)

/* calls to the php laravel api to fetch and store data */
