import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import AtasanReducer from "./features/atasanSlice";
import BankReducer from "./features/bankSlice";
import darkModeReducer from "./darkModeSlice";
import colorSchemeReducer from "./colorSchemeSlice";
import ContactReducer from "./features/contactSlice";
import sideMenuReducer from "./sideMenuSlice";
import authReducer from "./features/authSlice";
import forgotPasswordReducer from "./features/forgotPasswordSlice";
import resetPasswordReducer from "./features/resetPasswordSlice";
import meReducer from "./features/meSlice";
import eventReducer from "./features/eventSlice";
import userReducer from "./features/userSlice";
import user2Reducer from "./features/user2Slice";
import photoReducer from "./features/photoSlice";
import PenempatanReducer from "./features/penempatanSlice";
import GanderReducer from "./features/ganderSlice";
import GroupReducer from "./features/groupSlice";
import GolonganDarahReducer from "./features/golonganDarahSlice";
import JabatanReducer from "./features/jabatanSlice";
import SliderReducer from "./features/sliderSlice";
import statusInoutReducer from "./features/statusInoutSlice";
import StatusReducer from "./features/statusSlice";
import StatusPerkawinanReducer from "./features/statusPerkawinanSlice";
import PrivilegeReducer from "./features/privilegeSlice";
import periodeKerjaReducer from "./features/periodeKerjaSlice";
import PerhitunganReducer from "./features/perhitunganSlice";
import PendidikanReducer from "./features/pendidikanSlice";
import inOut2Reducer from "./features/inOut2Slice";
import inOutReducer from "./features/inOutSlice";
import koreksiReducer from "./features/koreksiSlice";
import koreksi2Reducer from "./features/koreksi2Slice";
import pelanggaranReducer from "./features/pelanggaranSlice";
import PendapatanReducer from "./features/pendapatanSlice";
import tipeAbsenReducer from "./features/tipeAbsenSlice";
import TipeEventReducer from "./features/tipeEventSlice";
import JamOperasionalGroupReducer from "./features/jamOperasionalGroupSlice";
import jamOperasionalReducer from "./features/jamOperasionalSlice";
import MesinAbsenReducer from "./features/mesinAbsenSlice";
import TipeNotificationReducer from "./features/tipeNotificationSlice";
import TipePendapatanReducer from "./features/tipePendapatanSlice";
import StatusKoreksiReducer from "./features/statusKoreksiSlice";

export const store = configureStore({
  reducer: {
    atasan:AtasanReducer,
    bank:BankReducer,
    darkMode: darkModeReducer,
    colorScheme: colorSchemeReducer,
    contact:ContactReducer,
    sideMenu: sideMenuReducer,
    auth: authReducer,
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,
    me: meReducer,
    photo: photoReducer,
    event: eventReducer,
    user: userReducer,
    user2: user2Reducer,
    penempatan:PenempatanReducer,
    periodeKerja: periodeKerjaReducer,
    perhitungan: PerhitunganReducer,
    gander: GanderReducer,
    golonganDarah:GolonganDarahReducer,
    group: GroupReducer,
    slider:SliderReducer,
    status: StatusReducer,
    privilege: PrivilegeReducer,
    pendidikan:PendidikanReducer,
    statusInout: statusInoutReducer,
    statusPerkawinan: StatusPerkawinanReducer,
    inOut2: inOut2Reducer,
    inOut: inOutReducer,
    koreksi: koreksiReducer,
    koreksi2: koreksi2Reducer,
    pelanggaran: pelanggaranReducer,
    pendapatan:PendapatanReducer,
    tipeAbsen: tipeAbsenReducer,
    tipeEvent: TipeEventReducer,
    jamOperasionalGroup:JamOperasionalGroupReducer,
    jamOperasional: jamOperasionalReducer,
    jabatan:JabatanReducer,
    mesinAbsen:MesinAbsenReducer,
    tipeNotification:TipeNotificationReducer,
    tipePendapatan:TipePendapatanReducer,
    statusKoreksi:StatusKoreksiReducer,
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
