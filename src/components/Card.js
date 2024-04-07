import React from 'react';

function Card({ id, name, ingridients }) {
    const imageUrl = `/img/${id}.jpeg`;

    return (
        <div>
            <img src={imageUrl} alt={`${name}`} />
            <div>
                <h2>{ name }</h2>
                <ul>
                    {ingridients.map((ingridient, index) => (
                        <li key={index}>{ingridient}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Card;