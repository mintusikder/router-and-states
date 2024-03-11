// import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  const { name, price, img, ratings, quantity, seller,  } =
    props.product;
    const handelAddToCart = props.handelAddToCart

  return (
    <div className="product">
      <img src={img} alt="" />
      <h4 className="name">{name}</h4>
      <h5 className="price">Price: {price}</h5>
      <p className="seller">Seller: {seller}</p>
      <p className="rating">Rating: {ratings}</p>
      <button onClick={() => handelAddToCart(props.product)} className="btn">
        Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
