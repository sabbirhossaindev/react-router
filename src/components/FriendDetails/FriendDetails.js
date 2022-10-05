import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './FriendDetails.css';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend)
    return (
        <div>
            <h1>friend Name: {friend.name}</h1>
            <h4>phone: { friend.phone}</h4>
            <h2>Everything you need to know</h2>
        </div>
    );
};

export default FriendDetails;