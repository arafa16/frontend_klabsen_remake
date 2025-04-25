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

export const getOvertimeTask : any = createAsyncThunk("getOvertimeTask", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/overtime_task/datas`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getOvertimeTaskById : any = createAsyncThunk("getOvertimeTaskById", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/overtime_task/data/${datas.uuid}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getOvertimeTaskTable : any = createAsyncThunk("getOvertimeTaskTable", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/overtime_task/table?${datas}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getOvertimeTaskTableByUser : any = createAsyncThunk("getOvertimeTaskTableByUser", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/overtime_task/table/user?${datas}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getOvertimeTaskTableByAssignor : any = createAsyncThunk("getOvertimeTaskTableByAssignor", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/overtime_task/table/assignor?${datas}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getOvertimeTaskTableBySuperior : any = createAsyncThunk("getOvertimeTaskTableBySuperior", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/overtime_task/table/superior?${datas}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const createOvertimeTask : any = createAsyncThunk("createOvertimeTask", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/overtime_task/data`,{
            assignor_id:datas.assignorId,
            user_id:datas.userId,
            number:datas.number,
            time_start_task:datas.timeStartTask,
            time_finised_task:datas.timeFinisedTask,
            note_task:datas.noteTask,
            time_start_report:datas.timeStartReport,
            time_finised_report:datas.timeFinisedReport,
            note_report:datas.noteReport,
            superior_id:datas.superiorId,
            status_code:datas.statusCode
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

export const updateOvertimeTask : any = createAsyncThunk("updateOvertimeTask", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/overtime_task/data/${datas.uuid}`,{
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
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/overtime_task/data/${datas.uuid}/status`,{
            overtime_task_status_code:datas.overtime_task_status_code
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

export const deleteOvertimeTask : any = createAsyncThunk("deleteOvertimeTask", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/overtime_task/data/${datas.uuid}`,{
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
    name: "OvertimeTask",
    initialState,
    reducers:{
        resetOvertimeTask: (state) => initialState
    },
    extraReducers:(builder) => {
        // get overtime_task
        builder.addCase(getOvertimeTask.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getOvertimeTask.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getOvertimeTask.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get overtime_task by id
        builder.addCase(getOvertimeTaskById.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getOvertimeTaskById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getOvertimeTaskById.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })


        // get overtime_task table
        builder.addCase(getOvertimeTaskTable.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getOvertimeTaskTable.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getOvertimeTaskTable.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get overtime_task table
        builder.addCase(getOvertimeTaskTableByUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getOvertimeTaskTableByUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getOvertimeTaskTableByUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get overtime_task asiggnor table
        builder.addCase(getOvertimeTaskTableByAssignor.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getOvertimeTaskTableByAssignor.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getOvertimeTaskTableByAssignor.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get overtime_task superior table
        builder.addCase(getOvertimeTaskTableBySuperior.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getOvertimeTaskTableBySuperior.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getOvertimeTaskTableBySuperior.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // create overtime_task 
        builder.addCase(createOvertimeTask.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createOvertimeTask.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(createOvertimeTask.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // update overtime_task 
        builder.addCase(updateOvertimeTask.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateOvertimeTask.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(updateOvertimeTask.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // update status overtime_task 
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

        // create overtime_task 
        builder.addCase(deleteOvertimeTask.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(deleteOvertimeTask.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(deleteOvertimeTask.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
})

export const {resetOvertimeTask} = overtimeTaskSlice.actions;
export default overtimeTaskSlice.reducer;