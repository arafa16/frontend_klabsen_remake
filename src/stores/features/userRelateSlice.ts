import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    data: any;
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    message: any;
}

const initialState : variabel = {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const getUserRelateTable : any = createAsyncThunk("getUserRelateTable", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/user_relate/table?${datas}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const createUserRelate : any = createAsyncThunk("createUserRelate", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/user_relate/data`,{
            user_uuid:datas.user_uuid,
            user_relate_uuid:datas.user_relate_uuid,
            is_active:datas.is_active
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

export const deleteUserRelate : any = createAsyncThunk("deleteUserRelate", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/user_relate/data/${datas.uuid}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const userRelateSlice = createSlice({
    name: "userRelates",
    initialState,
    reducers:{
        resetUserRelate: (state) => initialState
    },
    extraReducers:(builder) => {

        //get user relate table
        builder.addCase(getUserRelateTable.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getUserRelateTable.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getUserRelateTable.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });


        //create user relate table
        builder.addCase(createUserRelate.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createUserRelate.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(createUserRelate.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        //create user relate table
        builder.addCase(deleteUserRelate.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(deleteUserRelate.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(deleteUserRelate.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

    }
})

export const {resetUserRelate} = userRelateSlice.actions;
export default userRelateSlice.reducer;