import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import {All} from '../../api/product';

const AllProducts = () => {
    const products = All();
    if(products){
      products.map(function(elem) {
        return (
          <div>
          <Card className='row col-md-12' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={elem.image.src} />
          <Card.Body>
            <Card.Title>{elem.title}</Card.Title>
            <Card.Text>
                        {elem.description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{elem.feature}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href={"/product/".elem.id}>Card Link</Card.Link>
          </Card.Body>
        </Card>
        </div>
        )
      });
    }
    else{
      return (
        <p>No products records found</p>
      );
    }
};

export default AllProducts;