import React from "react";
import { useLoaderData } from "react-router-dom";

const CountryDetails = () => {
  const data = useLoaderData();
  
  const firstCountry = data[0];

  return (
    <div>
      <h3>Details</h3>
      {firstCountry && (
        <p>
          Area: {firstCountry.area} 
        </p>
      )}
    </div>
  );
};

export default CountryDetails;
