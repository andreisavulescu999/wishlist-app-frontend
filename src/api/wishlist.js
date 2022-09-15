import axios from '../axios/newaxios';

export const All = async() => {
    const wishlists =  await axios.get(`/wishlist`);
    return wishlists;
}

export const getWishlist = async(id) => {
  const wishlist = await axios.get(`/wishlist/${id}`);
  return wishlist;
}
export const getWishlistProducts = async(id) => {
  const wishlist = await axios.get(`/wishlist/${id}/products`);
  return wishlist;
}

export const AddWishlist = async (data) => {
  const wishlist = await axios.post(`/wishlist/create`,data);
  return wishlist;
} 

export const EditWishlist = async (id,data) => {
  const wishlist = await axios.post(`/wishlist/${id}/edit`,data);
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
