import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalAmount += parseFloat(newItem.price.replace("$", ""));
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: parseFloat(newItem.price.replace("$", "")),
          image: newItem.image,
        });
        state.totalQuantity++;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += parseFloat(newItem.price.replace("$", ""));
        state.totalQuantity++;
      }
    },
    removeFromCart(state, action) {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);
      if (existingItem) {
        state.totalQuantity--;
        state.totalAmount -= existingItem.price;
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== itemId);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= parseFloat(
            existingItem.price.replace("$", "")
          );
        }
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
