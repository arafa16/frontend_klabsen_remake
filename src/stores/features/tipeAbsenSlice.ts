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

export const getTipeAbsens : any = createAsyncThunk("getTipeAbsens", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/tipe_absen/datas`,{
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

// export const getTipeAbsensById : any = createAsyncThunk("getTipeAbsensById", async(datas : any, thunkAPI) => {
//     try {
//         const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/tipeAbsens/${datas.uuid}`,{
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

// export const getTipeAbsensTable : any = createAsyncThunk("getTipeAbsensTable", async(datas : any, thunkAPI) => {
//     try {
//         const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/tipeAbsens/${datas.limit}&${datas.page}`,{
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

// export const createTipeAbsens : any = createAsyncThunk("createTipeAbsens", async(datas : any, thunkAPI) => {
//     try {
//         const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/tipeAbsens`,{
//             name: datas.name,
//             code: datas.code,
//             isSelect : datas.isSelect,
//             isActive: datas.isActive
//         },{
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

// export const updateTipeAbsens : any = createAsyncThunk("updateTipeAbsens", async(datas : any, thunkAPI) => {
//     try {
//         const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/tipeAbsens/${datas.uuid}`,{
//             name: datas.name,
//             code: datas.code,
//             isSelect : datas.isSelect,
//             isActive: datas.isActive
//         },{
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

// export const deleteTipeAbsens : any = createAsyncThunk("deleteTipeAbsens", async(datas : any, thunkAPI) => {
//     try {
//         const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/tipeAbsens/${datas.uuid}`,{
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

export const tipeAbsensSlice = createSlice({
    name: "tipeAbsens",
    initialState,
    reducers:{
        resetTipeAbsen: (state) => initialState
    },
    extraReducers:(builder) => {
        // get tipeAbsens
        builder.addCase(getTipeAbsens.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getTipeAbsens.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getTipeAbsens.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // // get data by id
        // builder.addCase(getTipeAbsensById.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(getTipeAbsensById.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.data = action.payload;
        // });
        // builder.addCase(getTipeAbsensById.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // })

        // // get tipeAbsens table
        // builder.addCase(getTipeAbsensTable.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(getTipeAbsensTable.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.data = action.payload;
        // });
        // builder.addCase(getTipeAbsensTable.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // })

        // // create tipeAbsens
        // builder.addCase(createTipeAbsens.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(createTipeAbsens.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.message = action.payload;
        // });
        // builder.addCase(createTipeAbsens.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // })

        // // update tipeAbsens 
        // builder.addCase(updateTipeAbsens.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(updateTipeAbsens.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.message = action.payload;
        // });
        // builder.addCase(updateTipeAbsens.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // })

        // // delete tipeAbsens 
        // builder.addCase(deleteTipeAbsens.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(deleteTipeAbsens.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.message = action.payload;
        // });
        // builder.addCase(deleteTipeAbsens.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // });
    }
})

export const {resetTipeAbsen} = tipeAbsensSlice.actions;
export default tipeAbsensSlice.reducer;