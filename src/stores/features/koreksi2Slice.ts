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

export const getKoreksisTableByUser: any = createAsyncThunk("getKoreksisTableByUser", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/koreksi/table?${datas}`,{
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

export const getKoreksisTableByApprover: any = createAsyncThunk("getKoreksisTableByApprover", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/koreksi/table?${datas}`,{
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

export const koreksisSlice = createSlice({
    name: "koreksis",
    initialState,
    reducers:{
        resetKoreksis: (state) => initialState
    },
    extraReducers:(builder) => {
        
        // get koreksi table by user
        builder.addCase(getKoreksisTableByUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getKoreksisTableByUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getKoreksisTableByUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        
        // get koreksi table by approver
        builder.addCase(getKoreksisTableByApprover.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getKoreksisTableByApprover.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getKoreksisTableByApprover.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

    }
})

export const {resetKoreksis} = koreksisSlice.actions;
export default koreksisSlice.reducer;