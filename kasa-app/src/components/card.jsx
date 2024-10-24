import "../sass/card.scss";
import React from 'react';
import { Link } from 'react-router-dom';

function Card({ apartment }) {
    return (
        <>
            <Link to={`/apartment/${apartment.id}`} className="cards">
                <div className="card-image-container">
                    <img src={apartment.cover} alt={apartment.title} className="card-image" />
                    <div className="card-gradient"></div>
                </div>
                <h2 className="card-title">{apartment.title}</h2>
            </Link>
        </>
    );
}
  
  export default Card;