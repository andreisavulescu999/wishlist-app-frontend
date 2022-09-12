import { useEffect, useState } from 'react';
import {All} from '../../api/product';
import NewCard from '../card/NewCard';
import ProductsCard from '../card/ProductsCard';


const AllProducts = () => {
    const [products,setProducts] = useState([]);
    useEffect(() => {
      const getProducts = async() => {
        const Products = await All(); 
        setProducts(Products.data);
      };
      getProducts();
    },
    [All]
    );
    
    if(products){
      const elements =  products.map(function(elem) {
        return (
          <ProductsCard id={elem.id} name={elem.name} features={elem.features}/>
        );
      });
      return elements; 
    }
    else{
      return (
        <NewCard title='Create an event' description='birthday, weeding or just to hang out' link='link' height={300}/>
      );
    }

};

export default AllProducts;