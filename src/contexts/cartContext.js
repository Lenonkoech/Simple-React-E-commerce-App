import React, { createContext, useReducer } from "react";
import { CartReducer } from "./cartReducer";

export const CartContext = createContext();

const intialState = { cartItems: [] };

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, intialState);

    const addProduct = payload => {
        dispatch({ type: 'ADD', payload });
    }
    const decreaseProduct = payload => {
        dispatch({ type: 'DECQTY', payload });
    }
    const increaseProduct = payload => {
        dispatch({ type: 'INCQTY', payload });
    }
    const removeProduct = payload => {
        dispatch({ type: 'REMOVE', payload });
    }
    const claerBasket = () => {
        dispatch({ type: 'CLEAR', payload: undefined });
    }
    const contextValues = {
        addProduct,
        decreaseProduct,
        increaseProduct,
        removeProduct,
        claerBasket,
        ...state
    }

    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;