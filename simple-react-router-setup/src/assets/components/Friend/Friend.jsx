// import React from 'react';
import { Link } from "react-router-dom";
import "./Friend.css";

const Friend = ({ friend }) => {
//   console.log(friend);
  const { name, email, phone, id } = friend;
  return (
    <div className="friend">
      <h2>{name}</h2>
      <p>Email :{email}</p>
      <p>Phone :{phone}</p>
      <p>
        <Link to={`/friend/${id}`}>Show More Details</Link>
      </p>
    </div>
  );
};

export default Friend;
