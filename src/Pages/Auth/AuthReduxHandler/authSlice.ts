import { createSlice } from "@reduxjs/toolkit";
import { Login, register } from "./authService";

const isAuthenticated = localStorage.getItem("IsAuthenticated");

const initialState = {
  isAuthenticated: isAuthenticated || false,
  error: "",
  currentUser: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem("jwt_Token");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => ({
        ...state,
        isAuthenticated: true,
        currentUser: action.payload,
        error: "",
      }))
      .addCase(register.rejected, (state, action) => ({
        ...state,
        isAuthenticated: false,
        currentUser: {},
        error: action.payload as string,
      }))

      .addCase(Login.fulfilled, (state, action) => ({
        ...state,
        isAuthenticated: true,
        currentUser: action.payload,
        error: "",
      }))
      .addCase(Login.rejected, (state, action) => ({
        ...state,
        isAuthenticated: false,
        currentUser: {},
        error: action.payload as string,
      }));
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
