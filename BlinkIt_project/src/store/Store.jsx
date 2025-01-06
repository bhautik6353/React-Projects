import { configureStore } from "@reduxjs/toolkit";
import { api}  from "../slice/BlinkitSlice";

export const Store = configureStore({
    reducer:{
        apiKey :api.reducer
    }
})