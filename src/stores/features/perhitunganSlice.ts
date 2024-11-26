import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import fileDownload from "js-file-download";

interface variabel {
    data: any;
    isError: boolean;
    isSuccess: boolean;
    isLoading1: boolean;
    isLoading2: boolean;
    message: string;
}

const initialState : variabel = {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading1: false,
    isLoading2: false,
    message: '',
}

export const getPerhitunganByGroupPeriode : any = createAsyncThunk("getPerhitunganByGroupPeriode", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/perhitungan/count?${datas}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
})

export const downloadPerhitunganByGroupPeriode : any = createAsyncThunk("downloadPerhitunganByGroupPeriode", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/perhitungan/export/count?${datas.searchParams}`,{
            responseType: 'blob',
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        return fileDownload(response.data, datas.name);

    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
})

export const perhitunganSlice = createSlice({
    name: "perhitungan",
    initialState,
    reducers:{
        resetPerhitungan: (state) => initialState
    },
    extraReducers:(builder) => {
        // get inOuts
        builder.addCase(getPerhitunganByGroupPeriode.pending, (state) => {
            state.isLoading1 = true;
        });
        builder.addCase(getPerhitunganByGroupPeriode.fulfilled, (state, action) => {
            state.isLoading1 = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getPerhitunganByGroupPeriode.rejected, (state, action) => {
            state.isLoading1 = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get inOuts
        builder.addCase(downloadPerhitunganByGroupPeriode.pending, (state) => {
            state.isLoading2 = true;
        });
        builder.addCase(downloadPerhitunganByGroupPeriode.fulfilled, (state, action) => {
            state.isLoading2 = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(downloadPerhitunganByGroupPeriode.rejected, (state, action) => {
            state.isLoading2 = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
})

export const {resetPerhitungan} = perhitunganSlice.actions;
export default perhitunganSlice.reducer;