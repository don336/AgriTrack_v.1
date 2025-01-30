import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode"; // Ensure correct import
import { baseUrl } from "../../../config/client";
import { userDataType } from "../../../utils/Types";

export const register = createAsyncThunk(
  "register",
  async (data: userDataType, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}auth/signup`, data);
      const { accessToken } = response.data;
      localStorage.setItem("jwt_Token", accessToken);
      return jwtDecode(accessToken);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
