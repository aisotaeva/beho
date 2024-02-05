import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const dataFetch = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const { data } = await axios.get(
      "https://65268fd1917d673fd76c8856.mockapi.io/api/products"
    );
    console.log(data, "----");
    return data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  extraReducers: (builder) => {
    builder.addCase(dataFetch.pending, () => {});
    builder.addCase(dataFetch.fulfilled, (state, action) => {
        state.products = action.payload
    });
    builder.addCase(dataFetch.rejected, () => {});
  },
});

export const productsReducers = productSlice.reducer
