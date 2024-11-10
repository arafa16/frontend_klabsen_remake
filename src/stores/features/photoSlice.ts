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

export const ChangePhotoProfile: any = createAsyncThunk("photo/ChangePhotoProfile", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/user/photo/${datas.uuid}`, datas.formData,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error: any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const photoSlice = createSlice({
    name: "photo",
    initialState,
    reducers:{
        resetPhoto: (state) => initialState
    },
    extraReducers:(builder) => {

        //photo profile
        builder.addCase(ChangePhotoProfile.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(ChangePhotoProfile.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(ChangePhotoProfile.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
})

export const {resetPhoto} = photoSlice.actions;
export default photoSlice.reducer;