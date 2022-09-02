import axios from "axios";

export const All = async() => {
    const wishlists =  await axios.get(`/wishlist/all`)
    .then(res => {
      console.log(res);
      console.log(res.data);
    });
    return wishlists;
}

export const getWishlist = async(id) => {
  const wishlist = await axios.get(`/wishlist/${id}`)
  .then(res => {
    console.log(res);
    console.log(res.data);
  });
  return wishlist;
}

export const AddWishlist = async (data) => {
  data = JSON.stringify(data);
  const wishlist = await axios.post(`/wishlist/create`,{data})
  .then(res => {
    console.log(res);
    console.log(res.data);
  });
  return wishlist;
} 

export const EditWishlist = async (id,data) => {
  data = JSON.stringify(data);
  const wishlist = await axios.post(`/wishlist/${id}/edit`,{data})
  .then(res => {
    console.log(res);
    console.log(res.data);
  });
  return wishlist;
} 


export const DeleteWishlist = async (id) => {
    const wishlist = await axios.get(`/wishlist/${id}/delete`,{})
    .then(res => {
      console.log(res);
      console.log(res.data);
    });
    return 'Wishlist deleted';
  } 
