import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/slice/authSlice";
import { userProfileSlice } from "../features/slice/userSlice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        userProfile: userProfileSlice.reducer
    }
})

export default store