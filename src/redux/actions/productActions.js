import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
    return {
        //returns a plain js object with 
        //type and payload as keys.
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
};

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
};
