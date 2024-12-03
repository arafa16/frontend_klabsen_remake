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

export const getBanks : any = createAsyncThunk("getBanks", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/bank/datas`,{
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

// export const getBanksById : any = createAsyncThunk("getBanksById", async(datas : any, thunkAPI) => {
//     try {
//         const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/banks/${datas.uuid}`,{
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

// export const getBanksTable : any = createAsyncThunk("getBanksTable", async(datas :any, thunkAPI) => {
//     try {
//         const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/banks/${datas.limit}&${datas.page}`,{
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

// export const createBanks : any = createAsyncThunk("createBanks", async(datas : any, thunkAPI) => {
//     try {
//         const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/banks`,{
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

// export const updateBanks : any = createAsyncThunk("updateBanks", async(datas : any, thunkAPI) => {
//     try {
//         const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/banks/${datas.uuid}`,{
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

// export const deleteBanks : any = createAsyncThunk("deleteBanks", async(datas : any, thunkAPI) => {
//     try {
//         const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/banks/${datas.uuid}`,{
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

export const bankSlice = createSlice({
    name: "banks",
    initialState,
    reducers:{
        resetBank: (state) => initialState
    },
    extraReducers:(builder) => {
        // get banks
        builder.addCase(getBanks.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getBanks.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getBanks.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // // get banks by id
        // builder.addCase(getBanksById.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(getBanksById.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.data = action.payload;
        // });
        // builder.addCase(getBanksById.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // })

        // // get banks table
        // builder.addCase(getBanksTable.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(getBanksTable.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.data = action.payload;
        // });
        // builder.addCase(getBanksTable.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // })

        // // create banks
        // builder.addCase(createBanks.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(createBanks.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.message = action.payload;
        // });
        // builder.addCase(createBanks.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // })

        // // update banks
        // builder.addCase(updateBanks.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(updateBanks.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.message = action.payload;
        // });
        // builder.addCase(updateBanks.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // })

        // // create banks
        // builder.addCase(deleteBanks.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(deleteBanks.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.message = action.payload;
        // });
        // builder.addCase(deleteBanks.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // })
    }
})

export const {resetBank} = bankSlice.actions;
export default bankSlice.reducer;