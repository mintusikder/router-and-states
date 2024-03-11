import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  let total = 0;
  let totalShipping = 0;
  for (const product of cart) {
    total = total + product.price;
    totalShipping = totalShipping + product.shipping;
  }
  const taxt = (total * 7) / 100;
  const grandTotal = total + totalShipping + taxt
  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: {total}</p>
      <p>Total Shipping: {totalShipping}</p>
      <p>Tax: {taxt.toFixed(2)}</p>
      <h4>Grand Total: {grandTotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
