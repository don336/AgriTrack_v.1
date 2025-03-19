import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../../config/client";
import { cropDataType } from "../../../utils/Types";

export const addCrop = createAsyncThunk(
  "addCrop",
  async (data: cropDataType, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}crop/add-crop`, data);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
