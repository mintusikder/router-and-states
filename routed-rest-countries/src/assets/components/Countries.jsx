// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Country from "./Country";

const Countries = () => {
    const countries = useLoaderData()
  
    return (
        <div>
            <h3>This is all Countries</h3>
            {
        countries.map(country => <Country
        key={country.id}
        country={country}
            

        ></Country> )
            }
        </div>
    );
};

export default Countries;