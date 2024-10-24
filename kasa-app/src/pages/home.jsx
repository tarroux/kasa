import React, { useState, useEffect } from 'react';
import Banner from "../components/banner.jsx";
import Card from "../components/card.jsx";
import { fetchApartmentsData } from '../services/data.jsx';
import "../sass/home.scss"


function Home() {

    const [apartments, setApartments] = useState([]);

    useEffect(() => {
        const getApartments = async () => {
            try {
                const data = await fetchApartmentsData();
                setApartments(data);
            } catch (error) {
                console.error('Error fetching apartments :', error);
            }
        };
        getApartments();
    }, []);

    return (
        <>
            <div className='general-style'>
                
                <Banner />
                <div className="card-container">
                    <div className='cards-list'>
                        {apartments.map((apartment) => 
                        <Card key={apartment.id} apartment={apartment}/>
                        )}
                    </div>
                </div>
             </div>
        </>
    );
  }
  
  export default Home;
  