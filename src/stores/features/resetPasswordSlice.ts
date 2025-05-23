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


export const ResetPasswordByToken : any = createAsyncThunk("reset/ResetPasswordByToken", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+'/reset/'+datas.token, {
            password: datas.password,
            confPassword: datas.confPassword,
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

export const resetSlice = createSlice({
    name: "resetPassword",
    initialState,
    reducers:{
        resetStatePassword: (state) => initialState
    },
    extraReducers:(builder) => {
        
        //reset password Token
        builder.addCase(ResetPasswordByToken.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(ResetPasswordByToken.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(ResetPasswordByToken.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
})

export const {resetStatePassword} = resetSlice.actions;
export default resetSlice.reducer;