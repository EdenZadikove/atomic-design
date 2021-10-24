import { RootState } from "../store";

export const selectSelectedProduct = (state: RootState) => 
    state.products.selectedProduct;

export const selectProducts = (state: RootState) => 
    state.products.products;

export const selectActionType = (state: RootState) => 
    state.products.actionType;