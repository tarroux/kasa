import React, { useState } from 'react';
import "../sass/carousel.scss";
import arrowLeft from "../assets/arrow_left.png";
import arrowRight from "../assets/arrow_right.png";


function Carousel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="carousel">
            <img 
                src={pictures[currentIndex]} 
                alt={`Image ${currentIndex + 1}`} 
                className="carousel-image"
            />
            <button className="carousel-arrow left" onClick={handlePrevious}>
                <img src={arrowLeft} alt="Précédente" />
            </button>
            <button className="carousel-arrow right" onClick={handleNext}>
                <img src={arrowRight} alt="Suivante" />
            </button>
        </div>
    );
}

export default Carousel;
