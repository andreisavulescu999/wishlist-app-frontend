import axios from "axios";

export const All = async() => {
    const products =  await axios.get(`/product/all`)
    .then(res => {
      console.log(res);
      console.log(res.data);
    });
    return products;
}

export const getProduct = async(id) => {
  const product = await axios.get(`/product/${id}`)
  .then(res => {
    console.log(res);
    console.log(res.data);
  });
  return product;
}

export const AddProduct = async (data) => {
  data = JSON.stringify(data);
  const product = await axios.post(`/product/create`,{data})
  .then(res => {
    console.log(res);
    console.log(res.data);
  });
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