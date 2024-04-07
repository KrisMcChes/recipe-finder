import React from 'react';
import Card from './Card';
// import { recipes } from '../recipes';

const CardList = ({ recipes }) => {
    return (
        <div>
            {recipes.map((recipe, index) => (
                <Card key={index} id={recipe.id} name={recipe.name} ingridients={recipe.ingridients} />
            ))};
        </div>
    );
}

export default CardList;