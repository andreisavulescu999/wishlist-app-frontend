import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const WishlistCard = (props) => {
    return (
          <Col md={4}>
              <Card style={{ width: '18rem' }}>
                  <Card.Body>
                      <Card.Title>{props?.name}</Card.Title>
                      <Card.Text>
                                  {props?.description}
                      </Card.Text>
                  </Card.Body>
                  <Card.Body>
                       <button class="btn btn-primary"><a class="text-white" href={`/wishlist/${props?.id}`}>Go to</a></button>
                  </Card.Body>
              </Card>
          </Col>
    ); 
} 
   
export default WishlistCard;