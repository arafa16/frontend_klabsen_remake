import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    data: any;
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    message: string;
}

const initialState : variabel = {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const createPrivileges : any = createAsyncThunk("createPrivileges", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/privileges`,{
            userId:datas.userId, 
            dashboard:datas.dashboard, 
            editUserSub:datas.editUserSub, 
            absen:datas.absen, 
            kalendarSub:datas.kalendarSub,
            absenModal:datas.absenModal,
            wfhModal:datas.wfhModal,
            shiftModal:datas.shiftModal,
            absenCheck:datas.absenCheck,
            adminEvent:datas.adminEvent,
            perhitunganAbsen:datas.perhitunganAbsen,
            pengajuanKoreksiSub:datas.pengajuanKoreksiSub, 
            approvalKoreksiSub:datas.approvalKoreksiSub,
            approvalAllKoreksiSub:datas.approvalAllKoreksiSub,
            slipGaji:datas.slipGaji,
            pendapatanSub:datas.pendapatanSub,
            pendapatanLainSub:datas.pendapatanLainSub,
            pendapatanAdminSub:datas.pendapatanAdminSub,
            employees:datas.employees,
            dataEmployee:datas.dataEmployee,
            attribute:datas.attribute,
            setting:datas.setting
        },{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const updatePrivileges : any = createAsyncThunk("updatePrivileges", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/privileges/${datas.idPrivilege}`,{
            userId:datas.userId, 
            dashboard:datas.dashboard, 
            editUserSub:datas.editUserSub, 
            absen:datas.absen, 
            kalendarSub:datas.kalendarSub,
            absenModal:datas.absenModal,
            wfhModal:datas.wfhModal,
            shiftModal:datas.shiftModal,
            absenCheck:datas.absenCheck,
            adminEvent:datas.adminEvent,
            perhitunganAbsen:datas.perhitunganAbsen,
            pengajuanKoreksiSub:datas.pengajuanKoreksiSub, 
            approvalKoreksiSub:datas.approvalKoreksiSub,
            approvalAllKoreksiSub:datas.approvalAllKoreksiSub,
            slipGaji:datas.slipGaji,
            pendapatanSub:datas.pendapatanSub,
            pendapatanLainSub:datas.pendapatanLainSub,
            pendapatanAdminSub:datas.pendapatanAdminSub,
            employees:datas.employees,
            dataEmployee:datas.dataEmployee,
            attribute:datas.attribute,
            setting:datas.setting
        },{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});


export const privilegesSlice = createSlice({
    name: "privileges",
    initialState,
    reducers:{
        resetPrivileges: (state) => initialState
    },
    extraReducers:(builder) => {

        // create Privileges
        builder.addCase(createPrivileges.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createPrivileges.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(createPrivileges.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        
        // update Privileges
        builder.addCase(updatePrivileges.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updatePrivileges.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(updatePrivileges.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })



    }
})

export const {resetPrivileges} = privilegesSlice.actions;
export default privilegesSlice.reducer;