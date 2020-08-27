import React, {useState, useEffect} from 'react';
import Pokemon from './pokemon';
import axios from 'axios';

const PokeContainer = ({ count, cache, pokemons }) => {
    const [sprite, setSprite] = useState({});
    const [name, setName] = useState('');

    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/pokemon/${count}`;
        if (pokemons[count]) {
          setSprite(pokemons[count]);
          console.log('THIS IS CACHED!');
        } else {
          axios.get(url)
          .then(res => {
            const { data: { name, sprites: { other } } } = res;
            const sprite = other["official-artwork"]["front_default"];
            const cachedPokemon = cache(count, sprite);
            setSprite(cachedPokemon);
            setName(name);
          });
        };
    }, [count, cache, pokemons]);

    return <Pokemon sprite={sprite} name={name} />;
}

export default PokeContainer;