import { createSlice } from "@reduxjs/toolkit";

type PaginationState = {
  currentPage: number;
  total: number;
};

const initialState: PaginationState = {
  currentPage: 1,
  total: 0,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState: initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setTotal(state, action) {
      state.total = action.payload;
    },
  },
});

export const paginationActions = paginationSlice.actions;
export default paginationSlice.reducer;
