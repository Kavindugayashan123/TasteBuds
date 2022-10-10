import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
    wish: {
        wishItems: [],
    }
};

function reducer(state, action){
    switch (action.type){
        case 'WISH_ADD_ITEM':
            return {...state, wish: {...state.wish, wishItems: [...state.wish.wishItems, action.payload]}};
        default: 
            return state;   
    }
}

export function StoreProvider(props){
    const[state, dispatch] = useReducer(reducer, initialState);
    const value = {state, dispatch};

    return <Store.Provider value={value}>{props.children}</Store.Provider>
}
