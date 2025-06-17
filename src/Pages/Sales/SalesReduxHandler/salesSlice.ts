import { createSlice } from "@reduxjs/toolkit";
import { AddSale, GetSales } from "./saleService";

const initialState = {
  sale: {},
  sales: [],
  isError: false,
  isSuccess: false,
  error: "",
};

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    reset: (state) => {
      state.sale = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(AddSale.fulfilled, (state, action) => ({
        ...state,
        isSuccess: true,
        sale: action.payload,
        isError: false,
        error: "",
      }))
      .addCase(AddSale.rejected, (state, action) => ({
        ...state,
        isSuccess: false,
        isError: true,
        sale: {},
        error: action.payload as string,
      }))
      .addCase(GetSales.fulfilled, (state, action) => ({
        ...state,
        isSuccess: true,
        isError: false,
        sales: action.payload,
        error: "",
      }))
      .addCase(GetSales.rejected, (state, action) => ({
        ...state,
        isSuccess: true,
        isError: false,
        sales: [],
        error: action.payload as string,
      }));
  },
});

export const { reset } = salesSlice.actions;
export default salesSlice.reducer;
