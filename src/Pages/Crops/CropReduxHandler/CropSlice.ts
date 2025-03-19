import { createSlice } from "@reduxjs/toolkit";
import { addCrop } from "./CropService";

const initialState = {
  crop: {},
  crops: [],
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
      error: action.payload as string,
    }));
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
