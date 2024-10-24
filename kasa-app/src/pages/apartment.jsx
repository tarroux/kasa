import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { fetchApartmentById } from '../services/data.jsx';
import "../sass/apartment.scss";
import Carousel from '../components/carousel.jsx';
import KnowMore from '../components/know-more.jsx';
import Presentation from "../components/presentation.jsx"
import starActive from "../assets/star-active.png";
import starNoActive from "../assets/star-no-active.png";

function Apartment() {
    const { id } = useParams();
    const [apartment, setApartment] = useState(null);

    useEffect(() => {
        const getApartment = async () => {
            try {
                const data = await fetchApartmentById(id);
                setApartment(data);
            } catch (error) {
                console.error('Error fetching apartment', error);
            }
        };
        getApartment();
    }, [id]);

    if (!apartment) {
        return <h1>Appartement non trouvé</h1>;
    }

    // Fonction pour afficher les étoiles
    const renderStars = (rating) => {
        const totalStars = 5;
        const stars = [];

        for (let i = 1; i <= totalStars; i++) {
            if (i <= rating) {
                stars.push(
                    <img 
                        key={i} 
                        src={starActive} 
                        alt="Étoile active" 
                        className="star-icon" 
                    />
                );
            } else {
                stars.push(
                    <img 
                        key={i} 
                        src={starNoActive} 
                        alt="Étoile non active" 
                        className="star-icon" 
                    />
                );
            }
        }

        return stars;
    };


    return (
        <>
            <div className="general-style">
                {/* <Header /> */}
                <div className='apartment'>
                    <Carousel pictures={apartment.pictures} />
                    <Presentation
                        title={apartment.title}
                        location={apartment.location}
                        host={apartment.host}
                        tags={apartment.tags}
                        rating={apartment.rating}
                        description={apartment.description}
                        equipments={apartment.equipments}
                        renderStars={renderStars}
                    />
                </div>
            </div>
        </>
    );
}

export default Apartment;