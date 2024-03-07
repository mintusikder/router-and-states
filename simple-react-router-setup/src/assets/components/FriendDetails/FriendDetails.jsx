import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const user = useLoaderData()
    console.log(user)
    return (
        <div>
            <h2>This is friend details</h2>
            <h4>{user.name}</h4>
            <p>{user.phone}</p>
            <p></p>
        </div>
    );
};

export default FriendDetails;