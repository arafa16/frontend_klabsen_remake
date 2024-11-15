import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice";
import colorSchemeReducer from "./colorSchemeSlice";
import sideMenuReducer from "./sideMenuSlice";
import authReducer from "./features/authSlice";
import forgotPasswordReducer from "./features/forgotPasswordSlice";
import resetPasswordReducer from "./features/resetPasswordSlice";
import meReducer from "./features/meSlice";
import eventReducer from "./features/eventSlice";
import userReducer from "./features/userSlice";
import photoReducer from "./features/photoSlice";
import PenempatanReducer from "./features/penempatanSlice";
import GanderReducer from "./features/ganderSlice";
import SliderReducer from "./features/sliderSlice";
import periodeKerjaReducer from "./features/periodeKerjaSlice";
import inOut2Reducer from "./features/inOut2Slice";
import inOutReducer from "./features/inOutSlice";
import koreksiReducer from "./features/koreksiSlice";
import koreksi2Reducer from "./features/koreksi2Slice";
import pelanggaranReducer from "./features/pelanggaranSlice";
import tipeAbsenReducer from "./features/tipeAbsenSlice";
import JamOperasionalGroupReducer from "./features/jamOperasionalGroupSlice";
import jamOperasionalReducer from "./features/jamOperasionalSlice";

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
    event: eventReducer,
    user: userReducer,
    penempatan:PenempatanReducer,
    periodeKerja: periodeKerjaReducer,
    gander: GanderReducer,
    slider:SliderReducer,
    inOut2: inOut2Reducer,
    inOut: inOutReducer,
    koreksi: koreksiReducer,
    koreksi2: koreksi2Reducer,
    pelanggaran: pelanggaranReducer,
    tipeAbsen: tipeAbsenReducer,
    jamOperasionalGroup:JamOperasionalGroupReducer,
    jamOperasional: jamOperasionalReducer,
    
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
