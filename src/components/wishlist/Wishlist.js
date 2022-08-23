import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Wishlist = (product) => {
    return(
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.src} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
                        {product.description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{product.feature}</ListGroup.Item>
          </ListGroup>
          {/* <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
          </Card.Body> */}
        </Card>
    )
};

export default Wishlist;