import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {IP4} from "./pref";


export const loadProducts = () => async (dispatch) => {
    // try {
    //     const requestOptions = {
    //     headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
    //     },
    // };
    //     const response = await axios.get(`${IP4}products`, requestOptions);
    //     dispatch(setProducts(response.data)); 
    // } catch (error) {
    // }

    const response = await axios.get(`https://6558eca7e93ca47020a9e559.mockapi.io/products/`);
    // console.log(response.data);
    dispatch(setProducts(response.data));
}

export const delProducts = (id) => async (dispatch) => {
    // try {
    //     const requestOptions = {
    //     headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
    //     },
    // };
        const response = await axios.delete(`${IP4}products/${id}`);
        dispatch(setProducts(response.data.data)); 
    // } catch (error) {
    // }
}



export const productsSlice = createSlice({
    name: "productsSlice",
    initialState : {
        products: [],
    },

    reducers: {
        clearProducts: (state, action) => {
            state.products = [];
        },
        setProducts: (state, action) => {
            state.products = action.payload;
        }
    }
});

export const {
    clearProducts,
    setProducts
} = productsSlice.actions;

export default productsSlice.reducer;