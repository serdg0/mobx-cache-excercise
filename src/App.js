import React, { useEffect, useState} from 'react';
import { useCountStore } from './countContext';
import { useObserver } from 'mobx-react';
import axios from 'axios';
import Pokemon from './pokemon';

const App = () => {
  const [sprite, setSprite] = useState({});
  const store = useCountStore();

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${store.count}`;
    
    axios.get(url)
      .then(res => {
        const { data: { sprites: { other } } } = res;
        setSprite(other["official-artwork"]["front_default"]);
      });
  }, [store.count]);

  return useObserver(() => (
    <>
      <p>{store.count}</p>
      <button onClick={store.increment}>+</button>
      <button onClick={store.decrement}>-</button>
      <Pokemon sprite={sprite} />
    </>
  ));
}

export default App;
