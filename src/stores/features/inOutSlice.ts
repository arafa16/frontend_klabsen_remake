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

// export const getInOuts : any = createAsyncThunk("getInOuts", async(_, thunkAPI) => {
//     try {
//         const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/inOuts`,{
//             withCredentials: true, // Now this is was the missing piece in the client side 
//         });
//         return response.data;
//     } catch (error : any) {
//         if(error.response){
//             const message = error.response.data.msg;
//             return thunkAPI.rejectWithValue(message);
//         }
//     }
// });

export const getInOutsByUser : any = createAsyncThunk("getInOutsByUser", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/in_out/user/${datas.uuid}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

// export const getInOutsByIdAndMonth : any = createAsyncThunk("getInOutsByIdAndMonth", async(datas : any, thunkAPI) => {
//     try {
//         const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/inOuts/idAndMonth/${datas.id}&${datas.tanggalMulai}&${datas.tanggalSelesai}`,{
//             withCredentials: true, // Now this is was the missing piece in the client side 
//         });
//         return response.data;
//     } catch (error : any) {
//         if(error.response){
//             const message = error.response.data.msg;
//             return thunkAPI.rejectWithValue(message);
//         }
//     }
// });

// export const getInOutsTable : any = createAsyncThunk("getInOutsTable", async(datas : any, thunkAPI) => {
//     try {
//         const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/inOuts/${datas.limit}&${datas.page}`,{
//             withCredentials: true, // Now this is was the missing piece in the client side 
//         });
//         return response.data;
//     } catch (error : any) {
//         if(error.response){
//             const message = error.response.data.msg;
//             return thunkAPI.rejectWithValue(message);
//         }
//     }
// });

export const createInOutsByAbsenWeb : any = createAsyncThunk("createInOutsByAbsenWeb", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/in_out/web`,{
            userId:datas.userId,
            tanggalMulai:datas.tanggalMulai,
            tanggalSelesai:datas.tanggalSelesai,
            codeTipeAbsen:datas.codeTipeAbsen
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



export const inOutsSlice = createSlice({
    name: "inOuts",
    initialState,
    reducers:{
        resetInOuts: (state) => initialState
    },
    extraReducers:(builder) => {
        // // get inOuts
        // builder.addCase(getInOuts.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(getInOuts.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.data = action.payload;
        // });
        // builder.addCase(getInOuts.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // })

        // // get inOuts
        // builder.addCase(getInOutsTable.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(getInOutsTable.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.data = action.payload;
        // });
        // builder.addCase(getInOutsTable.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // })

        // // get inOuts by id
        // builder.addCase(getInOutsByIdAndMonth.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(getInOutsByIdAndMonth.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.data = action.payload;
        // });
        // builder.addCase(getInOutsByIdAndMonth.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // })


        // get inOuts by user getInOutsByIdAndMonth
        builder.addCase(getInOutsByUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getInOutsByUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getInOutsByUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // // create inOuts
        // builder.addCase(createInOutsByAbsenWeb.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(createInOutsByAbsenWeb.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.message = action.payload;
        // });
        // builder.addCase(createInOutsByAbsenWeb.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // })

    }
})

export const {resetInOuts} = inOutsSlice.actions;
export default inOutsSlice.reducer;