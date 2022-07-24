import axios from 'axios';

const API = axios.create({
  baseURL: "http://localhost:5001",
});

// https://localhost:3000

export const fetchProducts = () => API.get('/products');
export const createProducts = (newProduct) => API.post('/products', newProduct);
export const updatePost = (id, updatedPost) => API.patch(`/products/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/products/${id}`);

export const getOrder = (formData) => API.post('/order', formData)
export const signIn = (formData) => API.post('/users/signin', formData);
export const signUp = (formData) => API.post('/users/signup', formData);


export const adminSignIn = (formData) => API.post('/admin/signin', formData);
export const adminSignUp = (formData)=>API.post('/admin/signup',formData)