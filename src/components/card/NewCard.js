import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const NewCard = (props) => {
  return (
    <Row>
        <Col md={12}>
            <Card>
            <Card.Img className='rounded shadow-lg' height={props.height} variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                {props.description}
                </Card.Text>
                {/* <Button href={props?.link} variant="primary">Go somewhere</Button> */}
            </Card.Body>
            </Card>
        </Col>
    </Row>
  ); 
}
 
export default NewCard;