import React from "react";
import "./Product.css";
const Product = ({ product, addToCart }) => {
  const { img, name, price, ratings, seller } = product;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} className="productImg" alt="..." />
        <div className="card-body">
          <h5 className="card-title productTitle">{name}</h5>
          <p className="card-text productPrice">Price: ${price}</p>
          <p className="productSeller">Manufacturer : {seller}</p>
          <p className="productRating">Rating : {ratings} star</p>
        </div>
        <button className="addBtn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
