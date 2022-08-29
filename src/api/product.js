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
