import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../../config/client";
import { Crop, cropDataType } from "../../../utils/Types";

export const addCrop = createAsyncThunk(
  "addCrop",
  async (data: cropDataType, thunkAPI) => {
    try {
      const testToken = localStorage.getItem("jwt_Token");
      const response = await axios.post(`${baseUrl}crops/add-crop`, data, {
        headers: {
          Authorization: `${testToken}`,
        },
      });
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updateCrop = createAsyncThunk(
  "updateCrop",
  async (data: Crop, thunkAPI) => {
    try {
      const testToken = localStorage.getItem("jwt_Token");
      const response = await axios.put(
        `${baseUrl}crops/update-crop/${data._id}`,
        data,
        {
          headers: {
            Authorization: `${testToken}`,
          },
        }
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getCrops = createAsyncThunk("getCrops", async () => {
  try {
    const testToken = localStorage.getItem("jwt_Token");
    const response = await axios.get(`${baseUrl}crops/`, {
      headers: {
        Authorization: `${testToken}`,
      },
    });
    if (response.status === 200) {
      localStorage.setItem("crops", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error: any) {
    return error.message;
  }
});
export const deleteCrop = createAsyncThunk(
  "deleteCrop",
  async (cropId: String) => {
    try {
      const testToken = localStorage.getItem("jwt_Token");
      const response = await axios.delete(
        `${baseUrl}crops/delete-crop/${cropId}`,
        {
          headers: {
            Authorization: `${testToken}`,
          },
        }
      );
      return response.data;
    } catch (error: any) {
      return error.message;
    }
  }
);
