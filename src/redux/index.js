import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "./slices/categorySlice";
import { filterBtnReducer } from "./slices/filterButton";
import { productsReducers } from "./slices/categoryNewProduct";
import orderReducer from "./slices/OrderApp";


const rootReducer = combineReducers({
    category : categoryReducer,
    filters : filterBtnReducer,
    products : productsReducers,
    orders :  orderReducer
})

const store = configureStore({
    reducer : rootReducer
})

export default store