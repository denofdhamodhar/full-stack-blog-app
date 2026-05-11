import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slice"

const store = configureStore({
    reducer: {
        "auth" : AuthSlice
    }
})

export default store