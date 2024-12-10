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

export const getStatus : any = createAsyncThunk("getStatus", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/status/datas`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getStatusById : any = createAsyncThunk("getStatusById", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/status/data/${datas.uuid}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getStatusTable : any = createAsyncThunk("getStatusTable", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/status/table?${datas}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const createStatus : any = createAsyncThunk("createStatus", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/status/data`,{
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

export const updateStatus : any = createAsyncThunk("updateStatus", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/status/data/${datas.uuid}`,{
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

export const deleteStatus : any = createAsyncThunk("deleteStatus", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/status/data/${datas.uuid}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const statusSlice = createSlice({
    name: "Status",
    initialState,
    reducers:{
        resetStatus: (state) => initialState
    },
    extraReducers:(builder) => {
        // get status
        builder.addCase(getStatus.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getStatus.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getStatus.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get status by id
        builder.addCase(getStatusById.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getStatusById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getStatusById.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })


        // get status table
        builder.addCase(getStatusTable.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getStatusTable.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getStatusTable.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // create status 
        builder.addCase(createStatus.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createStatus.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(createStatus.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // create status 
        builder.addCase(updateStatus.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateStatus.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(updateStatus.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // create status 
        builder.addCase(deleteStatus.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(deleteStatus.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(deleteStatus.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
})

export const {resetStatus} = statusSlice.actions;
export default statusSlice.reducer;