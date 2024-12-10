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

export const getPelanggarans : any = createAsyncThunk("getPelanggarans", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/pelanggaran/datas`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getPelanggaransById : any = createAsyncThunk("getPelanggaransById", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/pelanggaran/data/`+datas.uuid,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getPelanggaransTable : any = createAsyncThunk("getPelanggaransTable", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/pelanggaran/table?${datas}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const createPelanggarans : any = createAsyncThunk("createPelanggarans", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/pelanggaran/data`,{
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

export const updatePelanggarans : any = createAsyncThunk("updatePelanggarans", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/pelanggaran/data/`+datas.uuid,{
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

export const deletePelanggarans : any = createAsyncThunk("deletePelanggarans", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/pelanggaran/data/`+datas.uuid,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const pelanggaransSlice = createSlice({
    name: "Pelanggarans",
    initialState,
    reducers:{
        resetPelanggaran: (state) => initialState
    },
    extraReducers:(builder) => {
        // get pendidikan
        builder.addCase(getPelanggarans.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getPelanggarans.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getPelanggarans.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        // get pendidikan by id
        builder.addCase(getPelanggaransById.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getPelanggaransById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getPelanggaransById.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        // get pendidikan table
        builder.addCase(getPelanggaransTable.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getPelanggaransTable.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getPelanggaransTable.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // create pendidikan
        builder.addCase(createPelanggarans.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createPelanggarans.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(createPelanggarans.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // delete pendidikan
        builder.addCase(deletePelanggarans.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(deletePelanggarans.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(deletePelanggarans.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // update pendidikan
        builder.addCase(updatePelanggarans.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updatePelanggarans.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(updatePelanggarans.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
})

export const {resetPelanggaran} = pelanggaransSlice.actions;
export default pelanggaransSlice.reducer;