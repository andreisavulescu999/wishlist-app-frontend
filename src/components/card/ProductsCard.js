
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import {useState } from 'react';

const Addfeatures = (feature) => {
    for (var prop in feature) {
              return(<ListGroup.Item>{prop} : {feature[prop]}</ListGroup.Item>)
    };
}

const ProductsCard = (props) => {
  const [features,setFeatures] = useState([]);
  const x = Addfeatures(props.features);

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
                    {x}
                </ListGroup>
                <Card.Body>
                     <button class="btn btn-primary"><a class="text-white" href={`/product/${props?.id}`}>Go to</a></button>
                </Card.Body>
            </Card>
        </Col>
  ); 
} 
 
export default ProductsCard;