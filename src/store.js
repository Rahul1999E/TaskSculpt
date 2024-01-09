import { configureStore } from "@reduxjs/toolkit";
import userDetailslice from "./Features/userDetailslice";

export const store = configureStore({
  reducer: { 
     app : userDetailslice
  }
});