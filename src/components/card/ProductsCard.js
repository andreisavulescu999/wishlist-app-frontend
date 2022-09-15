
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import {useState } from 'react';

const AddFeatures = (feature) => {
    const keys = Object.keys(feature); 
    const elements = keys.map((elem) =>{
        return(<ListGroup.Item key={elem}>{elem} : {feature[elem]}</ListGroup.Item>)
    });
    return elements;
}

const AddImage = (image) => {
    const keys = Object.keys(image); 
    const elements = keys.map((elem) =>{
        return (image[elem]);
    });
    return elements;
}

const ProductsCard = (props) => {
  const productFeatures = AddFeatures(props.features);
  const productImage    = AddImage(props.images);  
  return (
        <Col md={4}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props?.image?.src} />
                <Card.Body>
                    <Card.Title>{props?.name}</Card.Title>
                    <Card.Text>
                                {props?.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    {productFeatures}
                </ListGroup>
                <Card.Body>
                     <button class="btn btn-primary"><a class="text-white" href={`/product/${props?.id}`}>Go to</a></button>
                </Card.Body>
            </Card>
        </Col>
  ); 
} 
 
export default ProductsCard;