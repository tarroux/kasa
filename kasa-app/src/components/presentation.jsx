import React from 'react';
import "../sass/presentation.scss";
import KnowMore from './know-more.jsx';

function Presentation({ title, location, host, tags, rating, description, equipments, renderStars }) {
    const [firstName, lastName] = host.name.split(' ');

    return (
        <>
            <div className='flex-between'>
                <div className='label-apartment'>
                    <h1>{title}</h1>
                    <p className='location'>{location}</p>
                </div>
                <div className='identity label-apartment'>
                    <h2>
                        {firstName} <br />
                        {lastName}
                    </h2>
                    <img src={host.picture} alt="Photo du propriétaire" />
                </div>
            </div>
            <div className='tag-racing flex-between'>
                <ul className='tag-list'>
                    {tags.map((tag, index) => (
                        <li key={index} className="tag-item">
                            <p className="tag">{tag}</p>
                        </li>
                    ))}
                </ul>
                <div className='star'>
                    {renderStars(rating)}
                </div>
            </div>
            <div className='flex-between space-section'>
                <KnowMore title="Description" content={description} />
                <KnowMore title="Équipements" content={equipments} />
            </div>
        </>
    );
}

export default Presentation;