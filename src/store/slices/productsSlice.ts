import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../models/Product";

type ProductsState = {
  products: Product[];
  productsPerPage: Product[];
  selectedProduct?: Product | null;
  actionType: "ADD" | "UPDATE";
};

const initialState: ProductsState = {
  products: [],
  productsPerPage: [],
  actionType: "ADD",
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setProductsPerPage(state, action) {
      state.productsPerPage = action.payload;
    },
    setSelectedProduct(state, action) {
      if (action.payload) {
        const selectedProduct = state.products.find(p => p.id === action.payload);
        if(selectedProduct) {
          state.selectedProduct = selectedProduct;
          state.actionType = "UPDATE";
        } else {
          state.selectedProduct = null;
          state.actionType = "ADD";
        }
      } else state.selectedProduct = action.payload;
    },
    setActionType(state, action) {
      state.actionType = action.payload;
    },
  },
});

export const productsActions = productsSlice.actions;
export default productsSlice.reducer;
