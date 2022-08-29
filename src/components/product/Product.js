import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import Table from 'react-bootstrap/Table';

import { useParams } from "react-router-dom";

import { getProduct } from '../../api/product';


const Product = () => {
    let id = useParams();
    const product = getProduct(id);
    const carousel = product.images.map(function(elem) {
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
      )
  });
  const table = product.features.map(function(elem,index) {
    return(
        <tr>
          <td>{index}</td>
          <td>{elem.name}</td>
          <td>{elem.type}</td>
        </tr>
    )
});

  return(
    <>
    <Carousel>
        {carousel}           
    </Carousel>
    <Table striped bordered hover variant="dark">
        <tbody>
                {table}
        </tbody>
    </Table>
    </>
  )
};

export default Product;