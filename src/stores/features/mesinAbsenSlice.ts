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

export const getMesinAbsensTable: any = createAsyncThunk("getMesinAbsensTable", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/mesin_absen/table?${datas}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getMesinAbsensById: any = createAsyncThunk("getMesinAbsensById", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/mesin_absen/data/${datas.uuid}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const createMesinAbsens: any = createAsyncThunk("createMesinAbsens", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/mesin_absen/data`,{
            name: datas.name,
            ip_mesin: datas.ip_mesin,
            code: datas.code,
            day: datas.day,
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

export const updateMesinAbsens: any = createAsyncThunk("updateMesinAbsens", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/mesin_absen/data/${datas.uuid}`,{
            name: datas.name,
            ip_mesin: datas.ip_mesin,
            code: datas.code,
            day: datas.day,
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

export const deleteMesinAbsens: any = createAsyncThunk("deleteMesinAbsens", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/mesin_absen/data/${datas.uuid}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const mesinAbsenSlice = createSlice({
    name: "mesinAbsens",
    initialState,
    reducers:{
        resetMesinAbsen: (state) => initialState
    },
    extraReducers:(builder) => {


        // get mesin by table
        builder.addCase(getMesinAbsensTable.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getMesinAbsensTable.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getMesinAbsensTable.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get mesin by id
        builder.addCase(getMesinAbsensById.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getMesinAbsensById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getMesinAbsensById.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // create mesin
        builder.addCase(createMesinAbsens.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createMesinAbsens.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(createMesinAbsens.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // update mesin
        builder.addCase(updateMesinAbsens.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateMesinAbsens.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(updateMesinAbsens.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // delete mesin
        builder.addCase(deleteMesinAbsens.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(deleteMesinAbsens.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(deleteMesinAbsens.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

    }
});

export const {resetMesinAbsen} = mesinAbsenSlice.actions;
export default mesinAbsenSlice.reducer;