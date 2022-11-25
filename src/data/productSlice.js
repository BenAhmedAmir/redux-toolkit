import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import productList from './productList.json'
export const fetchAllProducts = createAsyncThunk('fetch-all-products', async (apiUrl) => {
    const response = await fetch(apiUrl)
    return response.json()

})
const productSlice = createSlice({
    name: 'products',
    initialState: {data: [], fetchStatus: ''},
    reducers: {},
    /*extraReducers option allows createSlice to respond
    to other action types besides the types it has generated.
     extraReducers would generate actions in the productSlice.actions property
     */
    extraReducers: (builder) => {
        /*
        The addCase function expects it's first arguments to be the dependent value.
        And the second function arguments to tell our reducer what to do
        * */
        builder
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.data = action.payload
                state.fetchStatus = 'success'
            })
            .addCase(fetchAllProducts.pending, (state, action) => {
                state.fetchStatus = 'loading'
            })
            .addCase(fetchAllProducts.rejected, (state, action) => {
               state.data = productList.products
                state.fetchStatus = 'error'
            })
    }
})
export default productSlice;