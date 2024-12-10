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


export const getStatusKoreksi : any = createAsyncThunk("getStatusKoreksi", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/status_koreksi/datas`,{
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

export const getStatusKoreksiById : any = createAsyncThunk("getStatusKoreksiById", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/status_koreksi/data/${datas.uuid}`,{
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

export const getStatusKoreksiTable : any = createAsyncThunk("getStatusKoreksiTable", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/status_koreksi/table?${datas}`,{
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

export const createStatusKoreksi : any = createAsyncThunk("createStatusKoreksi", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/status_koreksi/data`,{
            name: datas.name,
            code: datas.code,
            is_active: datas.is_active
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

export const updateStatusKoreksi : any = createAsyncThunk("updateStatusKoreksi", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/status_koreksi/data/${datas.uuid}`,{
            name: datas.name,
            code: datas.code,
            is_active: datas.is_active
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

export const deleteStatusKoreksi : any = createAsyncThunk("deleteStatusKoreksi", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/status_koreksi/data/${datas.uuid}`,{
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

export const statusKoreksiSlice = createSlice({
    name: "StatusKoreksi",
    initialState,
    reducers:{
        resetStatusKoreksi: (state) => initialState
    },
    extraReducers:(builder) => {
        // get StatusKoreksi
        builder.addCase(getStatusKoreksi.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getStatusKoreksi.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getStatusKoreksi.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get StatusKoreksi by id
        builder.addCase(getStatusKoreksiById.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getStatusKoreksiById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getStatusKoreksiById.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })


        // get StatusKoreksi table
        builder.addCase(getStatusKoreksiTable.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getStatusKoreksiTable.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getStatusKoreksiTable.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // create StatusKoreksi 
        builder.addCase(createStatusKoreksi.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createStatusKoreksi.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(createStatusKoreksi.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // create StatusKoreksi 
        builder.addCase(updateStatusKoreksi.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateStatusKoreksi.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(updateStatusKoreksi.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // create StatusKoreksi 
        builder.addCase(deleteStatusKoreksi.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(deleteStatusKoreksi.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(deleteStatusKoreksi.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
})

export const {resetStatusKoreksi} = statusKoreksiSlice.actions;
export default statusKoreksiSlice.reducer;