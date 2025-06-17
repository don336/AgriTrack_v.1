import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../../config/client";
import { SalesInterface } from "../../../utils/Types";

export const AddSale = createAsyncThunk(
  "AddSale",
  async (data: SalesInterface, thunkAPI) => {
    try {
      const authorization = await localStorage.getItem("jwt_Token");
      const response = await axios.post(`${baseUrl}sales/add-sale`, data, {
        headers: { Authorization: `${authorization}` },
      });
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const GetSales = createAsyncThunk("GetSale", async () => {
  try {
    const authorization = localStorage.getItem("jwt_Token");
    const response = await axios.get(`${baseUrl}sales`, {
      headers: { Authorization: `${authorization}` },
    });
    return response.data;
  } catch (error: any) {
    return error.message;
  }
});
