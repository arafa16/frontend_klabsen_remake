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

export const getStatusEmail : any = createAsyncThunk("getStatusEmail", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/status_email/datas`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getStatusEmailById : any = createAsyncThunk("getStatusEmailById", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/status_email/data/${datas.uuid}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getStatusEmailTable : any = createAsyncThunk("getStatusEmailTable", async(datas : any, thunkAPI) => {
    
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/status_email/table?${datas}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const createStatusEmail : any = createAsyncThunk("createStatusEmail", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/status_email/data`,{
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

export const updateStatusEmail : any = createAsyncThunk("updateStatusEmail", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/status_email/data/${datas.uuid}`,{
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

export const deleteStatusEmail : any = createAsyncThunk("deleteStatusEmail", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/status_email/data/${datas.uuid}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const statusEmailSlice = createSlice({
    name: "StatusEmail",
    initialState,
    reducers:{
        resetStatusEmail: (state) => initialState
    },
    extraReducers:(builder) => {
        // get StatusEmail
        builder.addCase(getStatusEmail.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getStatusEmail.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getStatusEmail.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get StatusEmail by id
        builder.addCase(getStatusEmailById.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getStatusEmailById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getStatusEmailById.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })


        // get StatusEmail table
        builder.addCase(getStatusEmailTable.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getStatusEmailTable.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getStatusEmailTable.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // create StatusEmail 
        builder.addCase(createStatusEmail.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createStatusEmail.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(createStatusEmail.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // create StatusEmail 
        builder.addCase(updateStatusEmail.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateStatusEmail.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(updateStatusEmail.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // create StatusEmail 
        builder.addCase(deleteStatusEmail.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(deleteStatusEmail.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(deleteStatusEmail.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

    }
})

export const {resetStatusEmail} = statusEmailSlice.actions;
export default statusEmailSlice.reducer;