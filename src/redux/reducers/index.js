import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productreducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
});

export default reducers;
