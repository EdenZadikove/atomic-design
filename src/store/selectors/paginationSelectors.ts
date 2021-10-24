import { RootState } from "../store";

export const selectCurrentPage = (state: RootState) =>
  state.pagination.currentPage;

export const selectTotal = (state: RootState) =>
  state.pagination.total;