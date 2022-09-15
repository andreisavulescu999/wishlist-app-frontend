import { useEffect, useState } from 'react';
import {All} from '../../api/wishlist';
import NewCard from '../card/NewCard';
import WishlistCard from '../card/WishlistCard.js';


const AllWishlists = () => {
    const [wishlists,setWishlists] = useState([]);
    useEffect(() => {
      const getWishlists = async() => {
        const Wishlists = await All(); 
        setWishlists(Wishlists.data);
      };
      getWishlists();
    },
    [All]
    );
    if(wishlists){
      const elements =  wishlists.map(function(elem) {
        return (
          <WishlistCard id={elem.id} name={elem.name}/>
        );
      });
      return elements; 
    }
    else{
      return (
        <NewCard title='No items' description='No products' link='link' height={300}/>
      );
    }

};

export default AllWishlists; 