import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices , setPrices] = useState([])

    useEffect(()=> {
        fetch("prices.json")
        .then(res => res.json())
        .then(data => setPrices(data.gymMembershipOptions))
    },[])
    return (
        <div>
            <h2 className='text-4xl  bg-purple-300 font-bold p-4 text-'>All Product Price</h2>
            <div className='grid md:grid-cols-3  gap-8'>
            {
                prices.map((price) => <PriceCard
                key={price.id}
                price={price}
                ></PriceCard>)
            }
            </div>
        </div>
    );
};

export default PriceList;