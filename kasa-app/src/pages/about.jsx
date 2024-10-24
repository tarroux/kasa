import "../sass/about.scss";
import React from 'react';
import MaskAbout from '../assets/MaskAbout.png'
import KnowMore from "../components/know-more.jsx";

function About() {
    return (
        <>
            <div className="general-style global-page">
                <img src={MaskAbout} alt="Paysage" />
                <div>
                    <KnowMore title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
                    <KnowMore title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                    <KnowMore title="Service" content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
                    <KnowMore title="Securité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services." />
                </div>
            </div>
        </>
    );
  }
  
  export default About;