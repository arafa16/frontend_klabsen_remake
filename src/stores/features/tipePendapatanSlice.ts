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

export const getTipePendapatans : any = createAsyncThunk("getTipePendapatans", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/tipe_pendapatan/datas`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getTipePendapatansById : any = createAsyncThunk("getTipePendapatansById", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/tipe_pendapatan/data/${datas.uuid}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getTipePendapatansTable : any = createAsyncThunk("getTipePendapatansTable", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/tipe_pendapatan/table?${datas}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const createTipePendapatans : any = createAsyncThunk("createTipePendapatans", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/tipe_pendapatan/data`,{
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

export const updateTipePendapatans : any = createAsyncThunk("updateTipePendapatans", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/tipe_pendapatan/data/${datas.uuid}`,{
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

export const deleteTipePendapatans : any = createAsyncThunk("deleteTipePendapatans", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/tipe_pendapatan/data/${datas.uuid}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const tipePendapatansSlice = createSlice({
    name: "tipePendapatans",
    initialState,
    reducers:{
        resetTipePendapatan: (state) => initialState
    },
    extraReducers:(builder) => {
        // get tipePendapatans
        builder.addCase(getTipePendapatans.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getTipePendapatans.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getTipePendapatans.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get tipePendapatans by id
        builder.addCase(getTipePendapatansById.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getTipePendapatansById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getTipePendapatansById.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get tipePendapatans table
        builder.addCase(getTipePendapatansTable.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getTipePendapatansTable.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getTipePendapatansTable.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // create tipePendapatans
        builder.addCase(createTipePendapatans.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createTipePendapatans.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(createTipePendapatans.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // update tipePendapatans 
        builder.addCase(updateTipePendapatans.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateTipePendapatans.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(updateTipePendapatans.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // delete tipePendapatans 
        builder.addCase(deleteTipePendapatans.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(deleteTipePendapatans.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(deleteTipePendapatans.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
})

export const {resetTipePendapatan} = tipePendapatansSlice.actions;
export default tipePendapatansSlice.reducer;