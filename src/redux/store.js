import { configureStore } from '@reduxjs/toolkit';
import {productsApi} from './api/producApi';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware)
});