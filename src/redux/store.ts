import { configureStore } from "@reduxjs/toolkit";
import { onboardReducer } from "./onboard/OnboardSlice";
import { UserSlice, userReducer } from "./data/UserSlice";

export const store = configureStore({
  reducer: {
    onBoard: onboardReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
