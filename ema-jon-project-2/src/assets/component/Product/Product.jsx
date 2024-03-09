// import React from 'react';
import "./Product.css";
const Product = ({ product }) => {
  console.log(product);
  const { name, price, img, category, ratings, quantity, seller } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <h4 className="name">{name}</h4>
      <h5 className="price">Price :{price}</h5>
      <p className="seller">Seller :{seller}</p>
      <p className="rating"> Rating :{ratings}</p>
      <button className="btn ">Add Cart</button>
    </div>
  );
};

export default Product;
