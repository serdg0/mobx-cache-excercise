import React from 'react';
import { useCountStore } from './countContext';
import { useObserver } from 'mobx-react';

const App = () => {
  const store = useCountStore();
  console.log(store.count);
  return useObserver(() => (
    <p>Perro</p>
  ));
}

export default App;
