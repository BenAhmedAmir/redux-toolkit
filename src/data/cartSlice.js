import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cartProductIds:[]
    },
    //will contain the actions for our cartSlice
    //each action is a function which expects parameter state and an action
    // to acces to cart state use state parameter and action from action parameter
    //the payload is the data we pass as an argument
    reducers: {
        // addToCart is an action
        addToCart:(state, action)=>{
            state.cartProductIds= [action.payload, ...state.cartProductIds]

        },
        removeFromCart:(state, action)=>{
            console.log("remove")
            const indexOfId= state.cartProductIds.indexOf(action.payload)
            state.cartProductIds.splice(indexOfId,1)
        },
        clearAllItems:(state, action)=>{
            state.cartProductIds = []
        }
    }
})
export default cartSlice;