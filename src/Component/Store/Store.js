import { configureStore } from "@reduxjs/toolkit";
import ajay from "../Reducer/Reducer"



export const Store = configureStore(
    {
        reducer: {
            data: ajay

        }
    }
)