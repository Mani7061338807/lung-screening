import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./reducer/pageSlice";
import userReducer from "./reducer/userSlice";

export const store = configureStore({
  reducer: {
    page: pageReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
