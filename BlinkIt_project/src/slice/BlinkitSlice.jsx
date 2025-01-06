import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("fetchData", async () => {
  let response = await axios.get("http://localhost:4000/Data");
  let res = response.data;
  return res;
});

export const api = createSlice({
  name: "api",
  initialState: { data: [], cart: [] },
  reducers: {
    fetchCart: (state) => {
      state.cart = JSON.parse(localStorage.getItem("cart")) || [];
    },
    addCart: (state, action) => {
      const exist = state.cart.find((el) => el.id === action.payload.id);
      if (exist) {
        exist.count = exist.count + 1;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      } else {
        const item = { ...action.payload };
        item.count = 1;
        state.cart.push(item);
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    removeCart: (state, action) => {
      const exist = state.cart.find((el) => el.id === action.payload.id);
      if (exist) {
        if (exist.count > 1) {
          exist.count = exist.count - 1;
          localStorage.setItem("cart", JSON.stringify(state.cart));
        } else {
          state.cart = state.cart.filter((el) => el.id !== action.payload.id);
          localStorage.setItem("cart", JSON.stringify(state.cart));
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});
export const { addCart, removeCart, fetchCart } = api.actions;
export default api.reducer;
