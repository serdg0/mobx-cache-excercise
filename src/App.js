import React, { useEffect, useState} from 'react';
import { useCountStore } from './countContext';
import { useObserver } from 'mobx-react';
import PokeContainer from './pokemonsContainer';

const App = () => {
  const store = useCountStore();

  return useObserver(() => (
    <>
      <p>{store.count}</p>
      <button onClick={store.increment}>+</button>
      <button onClick={store.decrement}>-</button>
      <PokeContainer count={store.count} cache={store.cache} pokemons={store.pokemons} />
    </>
  ));
}

export default App;
