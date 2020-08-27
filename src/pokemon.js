import React from 'react';

const Pokemon = ({ sprite, name }) => {
    return (
        <div>
            <h3>{name}</h3>
            <img src={sprite} />
        </div>
    )
};

export default Pokemon;