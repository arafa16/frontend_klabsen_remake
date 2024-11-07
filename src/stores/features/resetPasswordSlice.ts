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

export const SendEmailForgot : any = createAsyncThunk("reset/SendEmailForgot", async(datas : any, thunkAPI) => {
    try {
        
        
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+'/reset/email', {
            email: datas.email
        },{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        return response.data;
    } catch (error: any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const VerifyToken : any = createAsyncThunk("reset/VerifyToken", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+'/reset/'+datas.token,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        return response.data;
    } catch (error: any) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
    }
});

export const resetPasswordSlice = createSlice({
    name: "resetPassword",
    initialState,
    reducers:{
        resetState: (state) => initialState
    },
    extraReducers:(builder) => {

        //Send Email Forgot
        builder.addCase(SendEmailForgot.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(SendEmailForgot.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(SendEmailForgot.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        //Verify Token
        builder.addCase(VerifyToken.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(VerifyToken.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(VerifyToken.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
})

export const {resetState} = resetPasswordSlice.actions;
export default resetPasswordSlice.reducer;