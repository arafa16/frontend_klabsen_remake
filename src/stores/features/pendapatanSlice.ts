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


// export const getPendapatans : any = createAsyncThunk("getPendapatans", async(_, thunkAPI) => {
//     try {
//         const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/pendapatans`,{
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

export const importPendapatans : any = createAsyncThunk("importPendapatans", async(datas :any, thunkAPI) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/pendapatan/import`, datas.formData ,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getPendapatansById : any = createAsyncThunk("getPendapatansById", async(datas : any, thunkAPI) => {

    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/pendapatan/data/${datas.id}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getPendapatansTable : any = createAsyncThunk("getPendapatansTable", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/pendapatan/admin/table?${datas}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getPendapatansTableById : any = createAsyncThunk("getPendapatansTableById", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/pendapatan/user/table?${datas}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        console.log(datas.toString(), response, 'response')

        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const pendapatansSlice = createSlice({
    name: "pendapatans",
    initialState,
    reducers:{
        resetPendapatans: (state) => initialState
    },
    extraReducers:(builder) => {
        // // get Pendapatans
        // builder.addCase(getPendapatans.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(getPendapatans.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.data = action.payload;
        // });
        // builder.addCase(getPendapatans.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // })

        // get Pendapatans
        builder.addCase(importPendapatans.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(importPendapatans.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(importPendapatans.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get Pendapatans by Id
        builder.addCase(getPendapatansById.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getPendapatansById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getPendapatansById.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get Pendapatans table
        builder.addCase(getPendapatansTable.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getPendapatansTable.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getPendapatansTable.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get Pendapatans table by id
        builder.addCase(getPendapatansTableById.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getPendapatansTableById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getPendapatansTableById.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
})

export const {resetPendapatans} = pendapatansSlice.actions;
export default pendapatansSlice.reducer;