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

export const getOvertimeTaskStatus : any = createAsyncThunk("getOvertimeTaskStatus", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/overtime_task_status/datas`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getOvertimeTaskStatusById : any = createAsyncThunk("getOvertimeTaskStatusById", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/overtime_task_status/data/${datas.uuid}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getOvertimeTaskStatusTable : any = createAsyncThunk("getOvertimeTaskStatusTable", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/overtime_task_status/table?${datas}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const createOvertimeTaskStatus : any = createAsyncThunk("createOvertimeTaskStatus", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/overtime_task_status/data`,{
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

export const updateOvertimeTaskStatus : any = createAsyncThunk("updateOvertimeTaskStatus", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/overtime_task_status/data/${datas.uuid}`,{
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

export const deleteOvertimeTaskStatus : any = createAsyncThunk("deleteOvertimeTaskStatus", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/overtime_task_status/data/${datas.uuid}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const overtimeTaskSlice = createSlice({
    name: "OvertimeTaskStatus",
    initialState,
    reducers:{
        resetOvertimeTaskStatus: (state) => initialState
    },
    extraReducers:(builder) => {
        // get overtime_task_status
        builder.addCase(getOvertimeTaskStatus.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getOvertimeTaskStatus.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getOvertimeTaskStatus.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get overtime_task_status by id
        builder.addCase(getOvertimeTaskStatusById.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getOvertimeTaskStatusById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getOvertimeTaskStatusById.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })


        // get overtime_task_status table
        builder.addCase(getOvertimeTaskStatusTable.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getOvertimeTaskStatusTable.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getOvertimeTaskStatusTable.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // create overtime_task_status 
        builder.addCase(createOvertimeTaskStatus.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createOvertimeTaskStatus.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(createOvertimeTaskStatus.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // create overtime_task_status 
        builder.addCase(updateOvertimeTaskStatus.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateOvertimeTaskStatus.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(updateOvertimeTaskStatus.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // create overtime_task_status 
        builder.addCase(deleteOvertimeTaskStatus.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(deleteOvertimeTaskStatus.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(deleteOvertimeTaskStatus.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
})

export const {resetOvertimeTaskStatus} = overtimeTaskSlice.actions;
export default overtimeTaskSlice.reducer;