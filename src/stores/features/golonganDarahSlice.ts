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


export const getGolonganDarahs : any = createAsyncThunk("getGolonganDarahs", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/golongan_darah/datas`,{
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

// export const getGolonganDarahsById : any = createAsyncThunk("getGolonganDarahsById", async(datas : any, thunkAPI) => {
//     try {
//         const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/golonganDarahs/${datas.uuid}`,{
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

// export const getGolonganDarahsTable : any = createAsyncThunk("getGolonganDarahsTable", async(datas : any, thunkAPI) => {
//     try {
//         const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/golonganDarahs/${datas.limit}&${datas.page}`,{
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

// export const createGolonganDarahs : any = createAsyncThunk("createGolonganDarahs", async(datas : any, thunkAPI) => {
//     try {
//         const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/golonganDarahs`,{
//             name: datas.name,
//             code: datas.code,
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

// export const updateGolonganDarahs : any = createAsyncThunk("updateGolonganDarahs", async(datas : any, thunkAPI) => {
//     try {
//         const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/golonganDarahs/${datas.uuid}`,{
//             name: datas.name,
//             code: datas.code,
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

// export const deleteGolonganDarahs : any = createAsyncThunk("deleteGolonganDarahs", async(datas : any, thunkAPI) => {
//     try {
//         const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/golonganDarahs/${datas.uuid}`,{
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

export const golonganDarahSlice = createSlice({
    name: "golonganDarahs",
    initialState,
    reducers:{
        resetGolonganDarah: (state) => initialState
    },
    extraReducers:(builder) => {
        // get golongan darah
        builder.addCase(getGolonganDarahs.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getGolonganDarahs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getGolonganDarahs.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // // get golongan darah table
        // builder.addCase(getGolonganDarahsTable.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(getGolonganDarahsTable.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.data = action.payload;
        // });
        // builder.addCase(getGolonganDarahsTable.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // })

        // // get golongan darah by id
        // builder.addCase(getGolonganDarahsById.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(getGolonganDarahsById.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.data = action.payload;
        // });
        // builder.addCase(getGolonganDarahsById.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // })

        // // create golongan darah
        // builder.addCase(createGolonganDarahs.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(createGolonganDarahs.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.message = action.payload;
        // });
        // builder.addCase(createGolonganDarahs.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // })

        // // update golongan darah
        // builder.addCase(updateGolonganDarahs.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(updateGolonganDarahs.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.message = action.payload;
        // });
        // builder.addCase(updateGolonganDarahs.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // })

        // // delete golongan darah
        // builder.addCase(deleteGolonganDarahs.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(deleteGolonganDarahs.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.message = action.payload;
        // });
        // builder.addCase(deleteGolonganDarahs.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // })
    }
})

export const {resetGolonganDarah} = golonganDarahSlice.actions;
export default golonganDarahSlice.reducer;