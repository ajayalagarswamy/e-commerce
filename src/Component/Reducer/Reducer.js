import { createSlice } from "@reduxjs/toolkit";
import Product from "../Product/Product.json";
// import { Vegetables } from "../Vegetables/Vegetables";

export const Slice = createSlice({
    name: "arnold",

    initialState: {
        product: Product.product,
       

    },
    reducers: {
        updateProduct: (state, action) => {
            state.product = action.payload

        },
        updateCart:(state,action)=>{
            state.Cart=action.payload
        }


    }
})

export default Slice.reducer
export const { updateProduct ,updateCart} = Slice.actions

