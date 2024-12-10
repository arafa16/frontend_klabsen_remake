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

export const getJamOperasionals : any = createAsyncThunk("getJamOperasionals", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/jam_operasional/datas`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getJamOperasionalsTable : any = createAsyncThunk("getJamOperasionalsTable", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/jam_operasional/table?${datas}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getJamOperasionalsById : any = createAsyncThunk("getJamOperasionalsById", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/jam_operasional/data/${datas.uuid}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const createJamOperasionals: any = createAsyncThunk("createJamOperasionals", async(datas : any, thunkAPI) => {
    
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/jam_operasional/data`,{
            name: datas.name,
            jam_masuk: datas.jam_masuk,
            jam_pulang: datas.jam_pulang,
            keterangan: datas.keterangan,
            jam_operasional_group_id: datas.jam_operasional_group_id,
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

export const updateJamOperasionals: any = createAsyncThunk("updateJamOperasionals", async(datas : any, thunkAPI) => {
    
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/jam_operasional/data/${datas.uuid}`,{
            name: datas.name,
            jam_masuk: datas.jam_masuk,
            jam_pulang: datas.jam_pulang,
            keterangan: datas.keterangan,
            jam_operasional_group_id: datas.jam_operasional_group_id,
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

export const deleteJamOperasionals: any = createAsyncThunk("deleteJamOperasionals", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/jam_operasional/data/${datas.uuid}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const jamOperasionalsSlice = createSlice({
    name: "jamOperasionals",
    initialState,
    reducers:{
        resetJamOperasional: (state) => initialState
    },
    extraReducers:(builder) => {
        // get jam operasional
        builder.addCase(getJamOperasionals.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getJamOperasionals.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getJamOperasionals.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get jam operasional by id
        builder.addCase(getJamOperasionalsById.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getJamOperasionalsById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getJamOperasionalsById.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get jam operasional table
        builder.addCase(getJamOperasionalsTable.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getJamOperasionalsTable.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getJamOperasionalsTable.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // create jam operasional 
        builder.addCase(createJamOperasionals.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createJamOperasionals.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(createJamOperasionals.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // update jam operasional 
        builder.addCase(updateJamOperasionals.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateJamOperasionals.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(updateJamOperasionals.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // delete jam operasional 
        builder.addCase(deleteJamOperasionals.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(deleteJamOperasionals.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(deleteJamOperasionals.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
})

export const {resetJamOperasional} = jamOperasionalsSlice.actions;
export default jamOperasionalsSlice.reducer;