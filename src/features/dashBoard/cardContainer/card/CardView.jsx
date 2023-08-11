import React from 'react';
import './Card.css';

function CardView({ title, description }) {

    const singleCard = {
        "key": 0,
        "Title": "Tom Riddle",
        "Description": "This diary belongs to tom riddle",
        isPinned: true,
        "tag": "Personal",
        "date": "2017-01-01"

    };

    return (
        <div className="SingleCard">
            <h2>{ title }</h2>
            <p>{ description }</p>
        </div>
    );
}

export default CardView;