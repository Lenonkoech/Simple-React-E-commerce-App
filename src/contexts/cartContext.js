import React, { createContext, useReducer } from "react";
import { CartReducer } from "./cartReducer";
export const CartContext = createContext();
const Storage = sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : [];

const intialState = { cartItems: Storage }
const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, intialState);

    const addProduct = payload => {
        dispatch({ type: 'ADD', payload });
        return state.cartItems;
    }
    const decreaseProduct = payload => {
        dispatch({ type: 'DECQTY', payload });
        return state.cartItems;
    }
    const increaseProduct = payload => {
        dispatch({ type: 'INCQTY', payload });
        return state.cartItems;
    }
    const removeProduct = payload => {
        dispatch({ type: 'REMOVE', payload });
        return state.cartItems;
    }
    const clearBasket = () => {
        dispatch({ type: 'CLEAR', payload: undefined });
        return state.cartItems;
    }
    const getItems = () => {
        return state.cartItems;
    }
    const contextValues = {
        addProduct,
        decreaseProduct,
        increaseProduct,
        removeProduct,
        clearBasket,
        getItems,
        ...state
    }

    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;