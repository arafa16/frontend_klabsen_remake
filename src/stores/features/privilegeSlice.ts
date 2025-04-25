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

export const getPrivilegeById : any = createAsyncThunk("getPrivilegeById", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/privilege/data/${datas.uuid}`,{
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

export const createPrivileges : any = createAsyncThunk("createPrivileges", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/privilege/data`,{
            user_id:datas.user_id, 
            dashboard:datas.dashboard, 
            edit_user_sub:datas.edit_user_sub, 
            absen:datas.absen, 
            kalendar_sub:datas.kalendar_sub,
            absen_modal:datas.absen_modal,
            wfh_modal:datas.wfh_modal,
            shift_modal:datas.shift_modal,
            absen_check:datas.absen_check,
            admin_event:datas.admin_event,
            perhitungan_absen:datas.perhitungan_absen,
            pengajuan_koreksi_sub:datas.pengajuan_koreksi_sub, 
            approval_koreksi_sub:datas.approval_koreksi_sub,
            approval_all_koreksi_sub:datas.approval_all_koreksi_sub,
            slip_gaji:datas.slip_gaji,
            pendapatan_sub:datas.pendapatan_sub,
            pendapatan_lain_sub:datas.pendapatan_lain_sub,
            pendapatan_admin_sub:datas.pendapatan_admin_sub,
            employees:datas.employees,
            data_employee:datas.data_employee,
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
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/privilege/data/${datas.uuid}`,{
            user_id:datas.user_id, 
            dashboard:datas.dashboard, 
            edit_user_sub:datas.edit_user_sub, 
            absen:datas.absen, 
            kalendar_sub:datas.kalendar_sub,
            absen_modal:datas.absen_modal,
            wfh_modal:datas.wfh_modal,
            shift_modal:datas.shift_modal,
            absen_check:datas.absen_check,
            admin_event:datas.admin_event,
            perhitungan_absen:datas.perhitungan_absen,
            pengajuan_koreksi_sub:datas.pengajuan_koreksi_sub, 
            approval_koreksi_sub:datas.approval_koreksi_sub,
            approval_all_koreksi_sub:datas.approval_all_koreksi_sub,
            slip_gaji:datas.slip_gaji,
            pendapatan_sub:datas.pendapatan_sub,
            pendapatan_lain_sub:datas.pendapatan_lain_sub,
            pendapatan_admin_sub:datas.pendapatan_admin_sub,
            employees:datas.employees,
            data_employee:datas.data_employee,
            attribute:datas.attribute,
            overtime:datas.overtime,
            overtime_user:datas.overtime_user,
            overtime_superior:datas.overtime_superior,
            overtime_assignor:datas.overtime_assignor,
            overtime_admin:datas.overtime_admin,
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

export const deletePrivilege : any = createAsyncThunk("deletePrivilege", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/privilege/data/${datas.uuid}`,{
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
        builder.addCase(getPrivilegeById.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getPrivilegeById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getPrivilegeById.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

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

        // create Privileges
        builder.addCase(deletePrivilege.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(deletePrivilege.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(deletePrivilege.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

    }
})

export const {resetPrivileges} = privilegesSlice.actions;
export default privilegesSlice.reducer;