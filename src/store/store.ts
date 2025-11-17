import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counterSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})

//infer types for use throughout the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch