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

export const getAtasans : any = createAsyncThunk("getAtasans", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/user/atasan`,{
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

export const atasansSlice = createSlice({
    name: "atasans",
    initialState,
    reducers:{
        resetAtasans: (state) => initialState
    },
    extraReducers:(builder) => {
        // get atasans
        builder.addCase(getAtasans.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getAtasans.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getAtasans.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
})

export const {resetAtasans} = atasansSlice.actions;
export default atasansSlice.reducer;