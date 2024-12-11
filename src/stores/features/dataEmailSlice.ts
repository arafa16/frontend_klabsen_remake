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

export const getDataEmailById : any = createAsyncThunk("getDataEmailById", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/data_email/data/${datas.uuid}`,{
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

export const getDataEmailTable : any = createAsyncThunk("getDataEmailTable", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/data_email/table?${datas}`,{
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

export const createDataEmail : any = createAsyncThunk("createDataEmail", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/data_email/data`,{
            name: datas.name,
            from: datas.from,
            to: datas.to, 
            subject: datas.subject, 
            text_email: datas.text_email, 
            status_email_id: datas.status_email_id, 
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

export const updateDataEmail : any = createAsyncThunk("updateDataEmail", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/data_email/data/${datas.uuid}`,{
            name: datas.name,
            from: datas.from,
            to: datas.to, 
            subject: datas.subject, 
            text_email: datas.text_email, 
            status_email_id: datas.status_email_id, 
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

export const deleteDataEmail : any = createAsyncThunk("deleteDataEmail", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/data_email/data/${datas.uuid}`,{
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

export const emailSlice = createSlice({
    name: "email",
    initialState,
    reducers:{
        resetDataEmail: (state) => initialState
    },
    extraReducers:(builder) => {

        // get data email table
        builder.addCase(getDataEmailTable.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getDataEmailTable.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getDataEmailTable.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        // get data by id
        builder.addCase(getDataEmailById.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getDataEmailById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getDataEmailById.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        // create data by id
        builder.addCase(createDataEmail.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createDataEmail.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(createDataEmail.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        // update data by id
        builder.addCase(updateDataEmail.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateDataEmail.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(updateDataEmail.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        // delete data by id
        builder.addCase(deleteDataEmail.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(deleteDataEmail.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(deleteDataEmail.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
})

export const {resetDataEmail} = emailSlice.actions;
export default emailSlice.reducer;