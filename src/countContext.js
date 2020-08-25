import React, { createContext, useContext } from 'react';
import {useLocalStore} from 'mobx-react'
import CreateCountStore from './store/store';

const CountContext = createContext(null);

const CountProvider = ({ children }) => {
    const countStore = useLocalStore(CreateCountStore);

    return(
        <CountContext.Provider value={countStore}>
            {children}
        </CountContext.Provider>
    )
};

export const useCountStore = () => useContext(CountContext);

export default CountProvider;