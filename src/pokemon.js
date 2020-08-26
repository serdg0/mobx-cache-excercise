import React from 'react';

const Pokemon = ({ sprite }) => {
    return (
        <div>
            <img src={sprite} />
        </div>
    )
};

export default Pokemon;