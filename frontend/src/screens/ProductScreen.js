import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import Rating from "../components/Rating";

function ProductScreen() {
  const { id } = useParams(); // Extract the 'id' from the URL
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(`/api/v1/products/${id}`);
        setProduct(data);
      } catch (error) {
        // Handle error if needed
        console.error("Error fetching product:", error);
      }
    }
    fetchProduct();
  }, [id]);

  return (
    <div>
      <Link to="/" className="btn btn-dark my-3">
        go back
      </Link>
      <Row>
        <Col sm={12} md={6} lg={6} xl={6}>
          <Image src={product.image} alt={product.name} />
        </Col>

        <Col sm={12} md={3} lg={3} xl={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h5>{product.name}</h5>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={"#F8E825"}
              />
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col sm={12} md={3} lg={3} xl={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>price;</Col>
                <Col>${product.price}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>status;</Col>
                <Col>
                  {product.countInStock > 0 ? "in stock" : "out fo stock"}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroupItem>
              <Button
                type="button"
                className="btn-block"
                disabled={product.countInStock === 0}
              >
                add to card{" "}
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <strong>Description:</strong> {product.description}
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;
