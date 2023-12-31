import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { fetchProducts } from "../actions/productActions";
import Loader from "../components/Loaders";
import Message from "../components/Message";

function HomeScreen() {
  const dispatch = useDispatch();
  const listProducts = useSelector((state) => state.listProduct);
  const { error, loading, products } = listProducts;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]); // Include dispatch in the dependency array

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" text={error} />
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default HomeScreen;
