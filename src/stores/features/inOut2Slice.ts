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

export const getInOutsById : any = createAsyncThunk("inOut2/getInOutsById", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/in_out/data/${datas.uuid}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const createInOuts : any = createAsyncThunk("creatInOuts", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/in_out/data`,{
            user_uuid:datas.user_uuid,
            tanggal_mulai:datas.tanggal_mulai,
            tanggal_selesai:datas.tanggal_selesai,
            tipe_absen_uuid:datas.tipe_absen_uuid,
            pelanggaran_uuid:datas.pelanggaran_uuid,
            status_inout_uuid:datas.status_inout_uuid,
            jam_operasional_uuid:datas.jam_operasional_uuid,
            is_absen_web:datas.is_absen_web
        },{
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

export const updateInOuts : any = createAsyncThunk("updateInOuts", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/in_out/data/${datas.uuid}`,{
            user_uuid:datas.user_uuid,
            tanggal_mulai:datas.tanggal_mulai,
            tanggal_selesai:datas.tanggal_selesai,
            tipe_absen_uuid:datas.tipe_absen_uuid,
            pelanggaran_uuid:datas.pelanggaran_uuid,
            status_inout_uuid:datas.status_inout_uuid,
            jam_operasional_uuid:datas.jam_operasional_uuid,
            is_absen_web:datas.is_absen_web
        },{
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

export const deleteInOuts : any = createAsyncThunk("deleteInOuts", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/in_out/data/${datas.uuid}`,{
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

export const inOutsSlice = createSlice({
    name: "inOut2",
    initialState,
    reducers:{
        resetInOut2: (state) => initialState
    },
    extraReducers:(builder) => {
       
        // get inOuts by id
        builder.addCase(getInOutsById.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(getInOutsById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });

        builder.addCase(getInOutsById.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        // create inOuts
        builder.addCase(createInOuts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createInOuts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(createInOuts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // update inOuts
        builder.addCase(updateInOuts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateInOuts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(updateInOuts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        
        // delete inOuts
        builder.addCase(deleteInOuts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(deleteInOuts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(deleteInOuts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

    }
})

export const {resetInOut2} = inOutsSlice.actions;
export default inOutsSlice.reducer;