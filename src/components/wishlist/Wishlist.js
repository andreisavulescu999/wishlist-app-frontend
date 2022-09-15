import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { getWishlist,getWishlistProducts } from '../../api/wishlist';
import { useEffect, useState } from 'react';
import ProductsCard from '../card/ProductsCard';

const Wishlist = () => {
    let id = useParams();
    const [wishlist,setWishlist] = useState([]);
    const [products,setProducts] = useState([]);
    useEffect(() => {
      const getCurentWishlist = async(id) => {
        const CurentWishlist = await getWishlist(id);
        setWishlist(CurentWishlist.data);
        const products = CurentWishlist.data.wishlistproducts; 
        const elements = products.map((elem,index) => {
           return <ProductsCard index={index} id={elem.product.id} name={elem.product.name} features={elem.product.features} images={elem.product.images}/>
        });
        setProducts(elements);
      };
      getCurentWishlist(id.id);
    },
    [getWishlist]
    ); 



    return(
      <>
        <div class="row">
          <div class="text-white col-md-12">
              <h1>{wishlist.name}</h1>
          </div>
          <div class="text-white col-md-12">
              <h1>{wishlist.user_id}</h1>
          </div>
        </div>
        <div class="row">
            {products}
        </div>
      </>

    )
};

export default Wishlist;