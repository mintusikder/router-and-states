import React from 'react';

const PriceCard = (props) => {
    const {name,price,duration,features} =props.price
    console.log(props.price)
    // {name,price,duration,features}
    return (
        <div className='bg-indigo-300 mt-4 rounded p-6'>
            <h2 className='text-xl font-bold mt-4'>{name}</h2>
            <p>{price}</p>
            <p>{duration}</p>
            <p>{features}</p>
        </div>
    );
};

export default PriceCard;