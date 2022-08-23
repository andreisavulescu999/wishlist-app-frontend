import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';

// const products = await axios.get(`https://locallhost:3001/products`)
//     .then(res => {
//       console.log(res);
//       console.log(res.data);
//     });

// console.log(products);
const AllProducts = (products) => {
    return(
        <Card className='row col-md-12' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={products.src} />
          <Card.Body>
            <Card.Title>{products.title}</Card.Title>
            <Card.Text>
                        {products.description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{products.feature}</ListGroup.Item>
          </ListGroup>
          {/* <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
          </Card.Body> */}
        </Card>
    )
};

export default AllProducts;