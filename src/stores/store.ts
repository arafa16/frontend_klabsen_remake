import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice";
import colorSchemeReducer from "./colorSchemeSlice";
import sideMenuReducer from "./sideMenuSlice";
import authReducer from "./features/authSlice";
import forgotPasswordReducer from "./features/forgotPasswordSlice";
import resetPasswordReducer from "./features/resetPasswordSlice";
import meReducer from "./features/meSlice";
import userReducer from "./features/userSlice";
import photoReducer from "./features/photoSlice";
import PenempatanReducer from "./features/penempatanSlice";
import GanderReducer from "./features/ganderSlice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    colorScheme: colorSchemeReducer,
    sideMenu: sideMenuReducer,
    auth: authReducer,
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,
    me: meReducer,
    photo: photoReducer,
    user: userReducer,
    penempatan:PenempatanReducer,
    gander: GanderReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
