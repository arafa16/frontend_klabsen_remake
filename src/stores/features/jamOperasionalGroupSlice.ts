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

export const getJamOperasionalGroups : any = createAsyncThunk("getJamOperasionalGroups", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/jam_operasional_group/datas`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getJamOperasionalGroupsTable : any = createAsyncThunk("getJamOperasionalGroupsTable", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/jam_operasional_group/table?${datas}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getJamOperasionalGroupsById : any = createAsyncThunk("getJamOperasionalGroupsById", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/jam_operasional_group/data/${datas.uuid}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const createJamOperasionalGroups: any = createAsyncThunk("createJamOperasionalGroups", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/jam_operasional_group/data`,{
            name: datas.name,
            keterangan: datas.keterangan,
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

export const updateJamOperasionalGroups: any = createAsyncThunk("updateJamOperasionalGroups", async(datas : any, thunkAPI) => {

    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/jam_operasional_group/data/${datas.uuid}`,{
            name: datas.name,
            keterangan: datas.keterangan,
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

export const deleteJamOperasionalGroups: any = createAsyncThunk("deleteJamOperasionalGroups", async(jamOperasionals : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/jam_operasional_group/data/${jamOperasionals.uuid}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const jamOperasionalGroupSlice = createSlice({
    name: "jamOperasionalGroup",
    initialState,
    reducers:{
        resetJamOperasionalGroup: (state) => initialState
    },
    extraReducers:(builder) => {
        // get jam operasional
        builder.addCase(getJamOperasionalGroups.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getJamOperasionalGroups.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getJamOperasionalGroups.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get jam operasional by id
        builder.addCase(getJamOperasionalGroupsById.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getJamOperasionalGroupsById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getJamOperasionalGroupsById.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get jam operasional table
        builder.addCase(getJamOperasionalGroupsTable.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getJamOperasionalGroupsTable.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getJamOperasionalGroupsTable.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // create jam operasional 
        builder.addCase(createJamOperasionalGroups.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createJamOperasionalGroups.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(createJamOperasionalGroups.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // update jam operasional 
        builder.addCase(updateJamOperasionalGroups.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateJamOperasionalGroups.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(updateJamOperasionalGroups.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // delete jam operasional 
        builder.addCase(deleteJamOperasionalGroups.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(deleteJamOperasionalGroups.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(deleteJamOperasionalGroups.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
})

export const {resetJamOperasionalGroup} = jamOperasionalGroupSlice.actions;
export default jamOperasionalGroupSlice.reducer;