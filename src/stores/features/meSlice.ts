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

export const getMe: any = createAsyncThunk("me/getMe", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+'/auth/me',{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        
        return response.data;
    } catch (error: any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

// export const ResetPassword: any = createAsyncThunk("auth/ResetPassword", async(datas : any, thunkAPI) => {
//     try {
//         const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/reset/${datas.token}`, {
//             password: datas.password,
//             confPassword: datas.confPassword
//         },{
//             withCredentials: true, // Now this is was the missing piece in the client side 
//         });

//         return response.data;
//     } catch (error: any) {
//         if(error.response){
//             return thunkAPI.rejectWithValue(error.response);
//         }
//     }
// });

export const authSlice = createSlice({
    name: "me",
    initialState,
    reducers:{
        resetMe: (state) => initialState
    },
    extraReducers:(builder) => {
        //login
        builder.addCase(getMe.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getMe.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getMe.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        // // Reset Password
        // builder.addCase(ResetPassword.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(ResetPassword.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.data = action.payload;
        // });
        // builder.addCase(ResetPassword.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // });

    }
})

export const {resetMe} = authSlice.actions;
export default authSlice.reducer;