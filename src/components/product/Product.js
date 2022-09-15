import Carousel from 'react-bootstrap/Carousel';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { getProduct } from '../../api/product';
import NewCard from '../card/NewCard.js';


const Product = () => {
    let id = useParams();
    const [product,setProduct] = useState([]);
    useEffect(() => {
      const getProducts = async(id) => {
        const product = await getProduct(id);
        setProduct(product.data);
      };
      getProducts(id.id);
    },
    [getProduct]
    );

    const EditNewProduct = () =>{

    };
    const AddFeature = () => {
      //   return(<Form.Group className="mb-3 m-2" controlId="formBasicEmail">
      //   <Form.Label>Feature</Form.Label>
      //   <Form.Control type="text" value={feature.name} placeholder="Feature name" onChange={(name) => setProduct((prev) => ({...prev, name: name.target.value}))}/>
      //   <Form.Control type="text" value={feature.value} placeholder="Feature Value" onChange={(name) => setProduct((prev) => ({...prev, name: name.target.value}))}/>
      // </Form.Group>);
    }
    const AddImages = (images) => {
        const keys = Object.keys(images); 
        console.log(keys);
        const carousel = keys.map(function(elem) {
          return(
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={elem.src}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{elem.name}</h3>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
          );
        });
        return carousel;
    };
    console.log(product);
    
    if(!product)
      {
        return(
          <NewCard title="No product records"/>
        );
      }
    
    if(product?.images)
    {
      
    }
  
    return(
      <>
      <Card>
        <Card.Title>Edit Product</Card.Title>
        <Form>
      <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={product.name} placeholder="Enter name" onChange={(name) => setProduct((prev) => ({...prev, name: name.target.value}))}/>
      </Form.Group> 
      <div className=''>
      </div>
        <Button variant="primary" onClick={AddFeature}>
          Add feature
        </Button>    
        <Button variant="primary" onClick={EditNewProduct}>
          Submit
        </Button>
      </Form>
      </Card>
      </>
    );
};

export default Product;