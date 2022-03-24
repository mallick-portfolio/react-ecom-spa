import React from "react";
import "./OrderSummary.css";
const OrderSummary = ({ carts }) => {
  const totalPrice = carts.reduce((pre, cur) => pre + cur.price, 0);
  const totalShipping = carts.reduce((pre, cur) => pre + cur.shipping, 0);
  const tax = (totalPrice * 0.1).toFixed(2);
  const grandTotal = totalPrice + totalShipping + parseFloat(tax);
  return (
    <div className="orderSummary">
      <h3 className="orderTitle">Order Summary</h3>
      <p className="common">Selected Items: {carts.length}</p>
      <p className="common">Total Price: ${totalPrice}</p>
      <p className="common">Total Shipping Charge: ${totalShipping}</p>
      <p className="common">Tax: ${tax}</p>
      <h5 className="common grandTotal">Grand Total: ${grandTotal.toFixed(2)}</h5>
      <div>
        <button className="cartBtn">Clear Cart</button>
      </div>
      <div>
        <button className="cartBtn review">Review Order</button>
      </div>
    </div>
  );
};

export default OrderSummary;
