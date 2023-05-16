import { configureStore } from "@reduxjs/toolkit";
import completedItemsReducer from "../assets/reducers/completedItemsReducer";

export const store = configureStore({
    reducer: {
        todos: completedItemsReducer
    }
})