import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./usersSlice.js";

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
})