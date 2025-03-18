import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderedItems: [],
};

const orderReducer = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrderItem: (state, action) => {
      state.orderedItems.push(action.payload);
    },
    removeOrderItem: (state, action) => {
      state.orderedItems = state.orderedItems.filter(
        (order) => order._id !== action.payload
      );
    },
    updateOrderItem: (state, action) => {
      state.orderedItems = state.orderedItems.map((order) => {
        if (order._id === action.payload._id) return action.payload;
        return order;
      });
    },
    clearOrderItems: (state) => {
      state.orderedItems = [];
    },
  },
});

export const {
  addOrderItem,
  removeOrderItem,
  updateOrderItem,
  clearOrderItems,
} = orderReducer.actions;

export default orderReducer.reducer;
