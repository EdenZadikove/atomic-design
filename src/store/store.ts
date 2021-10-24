import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "./slices/paginationSlice";
import productsReducer from './slices/productsSlice';

const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    products: productsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;