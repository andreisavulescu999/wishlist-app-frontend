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
      const elements =  products.map((elem,index) => {
        return (
          <ProductsCard index={index} id={elem.id} name={elem.name} features={elem.features} images={elem.images}/>
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

export default AllProducts;