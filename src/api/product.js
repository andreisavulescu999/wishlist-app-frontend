import axios from '../axios/newaxios';

export const All = async () => {
    const response = await axios.get(`/product`);
    console.log(response);
    return response;
}

export const getProduct = async(id) => {
  console.log(id);
  const product = await axios.get(`/product/${id}`);
  return product;
}

export const AddProduct = async (data) => {
  const product = await axios.post(`/product/create`,data);
  return product;
} 

export const EditProduct = async (id,data) => {
  data = JSON.stringify(data);
  const product = await axios.post(`/product/${id}/edit`,{data})
  .then(res => {
    console.log(res);
    console.log(res.data);
  });
  return product;
} 

export const DeleteProduct = async (id) => {
  const product = await axios.get(`/product/${id}/delete`,{})
  .then(res => {
    console.log(res);
    console.log(res.data);
  });
  return 'Product deleted';
} 