import { list } from "postcss";
import React from "react";

import Feature from "../Feature/Feature";
const PriceCard = (props) => {
  const { name, price, duration, features } = props.price;
  console.log(props.price);
  // {name,price,duration,features}
  return (
    <div className="bg-indigo-300 mt-4 rounded p-6 flex flex-col">
      <h2 className="text-xl font-bold mt-4">{name}</h2>
      <p>{price}</p>
      <p>{duration}</p>
      <p>Features :</p>
      {features.map((feature, index) => <Feature
      key={index}
      feature={feature}
      ></Feature>)}
      <button className="bg-green-600 hover:bg-green-800  w-full py-2 rounded text-white font-bold mt-auto">Buy Now</button>
    </div>
  );
};

export default PriceCard;
