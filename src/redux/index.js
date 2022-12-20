import { configureStore } from "@reduxjs/toolkit";
import { authSlice, redirectActions } from "./slices";
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    redirect: redirectActions.reducer,
  },
  devTools: true,
});
export default store;
