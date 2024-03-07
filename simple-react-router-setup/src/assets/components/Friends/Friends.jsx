// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Friend from "../Friend/Friend";
import './Friends.css'
const Friends = () => {
  const data = useLoaderData();

  return (
    <div>
      <h2>We Are Friends {Friends.length}</h2>
   <div className="friends">
       {data.map((friend) => (
        <Friend key={friend.id} friend={friend}></Friend>
      ))}
   </div>
    </div>
  );
};

export default Friends;
