import { configureStore } from "@reduxjs/toolkit";
import { uiSlice, contentSlice, authSlice } from "./";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    content: contentSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
