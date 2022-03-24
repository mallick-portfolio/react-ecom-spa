import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import OrderSummary from "../Order/OrderSummary";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const addToCart = (product) => {
    const uniqueProduct = carts.find(
      (cartProduct) => product.id === cartProduct.id
    );
    if (uniqueProduct !== undefined) {
      alert("this product is already added");
      return;
    }
    setCarts([...carts, product]);
  };

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container>
      <Row>
        <div className="col-lg-9 mt-5">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {products.map((product) => (
              <Product
                addToCart={addToCart}
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
        <div className="col-lg-3">
          <OrderSummary carts={carts} />
        </div>
      </Row>
    </Container>
  );
};

export default Shop;
