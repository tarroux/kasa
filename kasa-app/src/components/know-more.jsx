import React, { useState } from 'react';
import arrowUp from "../assets/arrow_up.png";
import arrowDown from "../assets/arrow_back.png";
import "../sass/know-more.scss";

function KnowMore({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="section">
            <div className='background-section-header'>
                <div className="section-header" onClick={toggleOpen}>
                    <h3>{title}</h3>
                    <img 
                        src={isOpen ? arrowUp : arrowDown} 
                        alt={isOpen ? "Flèche haut" : "Flèche bas"} 
                        className="arrow-icon" 
                    />
                </div>
            </div>
            <div className={`section-content ${isOpen ? 'open' : ''}`}>
                {typeof content === 'string' ? (
                    <p>{content}</p>
                ) : (
                    <ul>
                        {content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default KnowMore;