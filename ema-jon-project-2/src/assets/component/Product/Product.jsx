// import React from 'react';

const Product = ({ product }) => {
  console.log(product);
  const {
    name,price,img,category,ratings,
  } = product[0];
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default Product;
