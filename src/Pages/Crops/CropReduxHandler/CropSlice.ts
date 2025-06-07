import { createSlice } from "@reduxjs/toolkit";
import { addCrop, deleteCrop, getCrops, updateCrop } from "./CropService";

const initialState = {
  crop: {},
  crops: localStorage.getItem("crops")
    ? JSON.parse(localStorage.getItem("crops") as string)
    : [],
  isError: false,
  isSuccess: false,
  error: "",
};

const authSlice = createSlice({
  name: "crop",
  initialState,
  reducers: {
    reset: (state) => {
      state.crop = {};
      state.crops = [];
      state.isError = false;
      state.isSuccess = false;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(addCrop.fulfilled, (state, action) => ({
      ...state,
      crop: action.payload,
      error: "",
    }));
    builder.addCase(addCrop.rejected, (state, action) => ({
      ...state,
      isError: true,
      error: action.payload as string,
    }));
    builder.addCase(getCrops.fulfilled, (state, action) => ({
      ...state,
      crops: action.payload,
      error: "",
    }));
    builder.addCase(getCrops.rejected, (state, action) => ({
      ...state,
      isError: true,
      error: action.payload as string,
    }));
    builder.addCase(deleteCrop.fulfilled, (state, action) => ({
      ...state,
      crops: action.payload,
      error: "",
    }));
    builder.addCase(deleteCrop.rejected, (state, action) => ({
      ...state,
      isError: true,
      error: action.payload as string,
    }));
    builder.addCase(updateCrop.fulfilled, (state, action) => ({
      ...state,
      crop: action.payload,
      error: "",
    }));
    builder.addCase(updateCrop.rejected, (state, action) => ({
      ...state,
      isError: true,
      error: action.payload as string,
    }));
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
