import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchData = createAsyncThunk("category", async () => {
    const {data} = await axios.get('https://65268fd1917d673fd76c8856.mockapi.io/api/category')
    console.log(data, "----");
    return data
});

const categorySlice = createSlice({
    name: "category",
    initialState: {
        items: [],
        error: ""
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, () => {});
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.items = action.payload
        });
        builder.addCase(fetchData.rejected, (state, action) => {
            state,error = action.payload
        });
    }
})
export const categoryReducer = categorySlice.reducer;