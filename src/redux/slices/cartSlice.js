// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);

      if (existingItem) {
        // If the item already exists, increase its quantity
        existingItem.quantity += 1;
      } else {
        // If the item doesn't exist, add it with quantity 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    decreaseQuantity: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
    },
    clearCart: state => {
      state.items = [];
    }
  },
});

export const { addItem, removeItem, decreaseQuantity, clearCart, calculateSubtotal } = cartSlice.actions;
export const selectCartItems = state => state.cart.items;
export default cartSlice.reducer;
