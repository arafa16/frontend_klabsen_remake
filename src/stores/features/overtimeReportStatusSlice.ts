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

export const getOvertimeReportStatus : any = createAsyncThunk("getOvertimeReportStatus", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/overtime_report_status/datas`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getOvertimeReportStatusById : any = createAsyncThunk("getOvertimeReportStatusById", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/overtime_report_status/data/${datas.uuid}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getOvertimeReportStatusTable : any = createAsyncThunk("getOvertimeReportStatusTable", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/overtime_report_status/table?${datas}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const createOvertimeReportStatus : any = createAsyncThunk("createOvertimeReportStatus", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/overtime_report_status/data`,{
            name: datas.name,
            code: datas.code,
            is_active: datas.is_active
        },{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const updateOvertimeReportStatus : any = createAsyncThunk("updateOvertimeReportStatus", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/overtime_report_status/data/${datas.uuid}`,{
            name: datas.name,
            code: datas.code,
            is_active: datas.is_active
        },{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const deleteOvertimeReportStatus : any = createAsyncThunk("deleteOvertimeReportStatus", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/overtime_report_status/data/${datas.uuid}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const overtimeReportSlice = createSlice({
    name: "OvertimeReportStatus",
    initialState,
    reducers:{
        resetOvertimeReportStatus: (state) => initialState
    },
    extraReducers:(builder) => {
        // get overtime_report_status
        builder.addCase(getOvertimeReportStatus.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getOvertimeReportStatus.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getOvertimeReportStatus.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get overtime_report_status by id
        builder.addCase(getOvertimeReportStatusById.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getOvertimeReportStatusById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getOvertimeReportStatusById.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })


        // get overtime_report_status table
        builder.addCase(getOvertimeReportStatusTable.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getOvertimeReportStatusTable.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getOvertimeReportStatusTable.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // create overtime_report_status 
        builder.addCase(createOvertimeReportStatus.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createOvertimeReportStatus.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(createOvertimeReportStatus.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // create overtime_report_status 
        builder.addCase(updateOvertimeReportStatus.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateOvertimeReportStatus.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(updateOvertimeReportStatus.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // create overtime_report_status 
        builder.addCase(deleteOvertimeReportStatus.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(deleteOvertimeReportStatus.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(deleteOvertimeReportStatus.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
})

export const {resetOvertimeReportStatus} = overtimeReportSlice.actions;
export default overtimeReportSlice.reducer;