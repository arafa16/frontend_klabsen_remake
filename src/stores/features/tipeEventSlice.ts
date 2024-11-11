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

export const getTipeEvents : any = createAsyncThunk("getTipeEvents", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/tipe_event/datas`,{
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

// export const getTipeEventsById : any = createAsyncThunk("getTipeEventsById", async(datas : any, thunkAPI) => {
//     try {
//         const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/tipeEvents/`+datas.uuid,{
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

// export const getTipeEventsTable : any = createAsyncThunk("getTipeEventsTable", async(datas : any, thunkAPI) => {
//     try {
//         const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/tipeEvents/table/${datas.limit}&${datas.page}`,{
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

// export const createTipeEvents : any = createAsyncThunk("createTipeEvents", async(datas : any, thunkAPI) => {
//     try {
//         const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/tipeEvents`,{
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

// export const updateTipeEvents : any = createAsyncThunk("updateTipeEvents", async(datas : any, thunkAPI) => {
//     try {
//         const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/tipeEvents/`+datas.uuid,{
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

// export const deleteTipeEvents : any = createAsyncThunk("deleteTipeEvents", async(datas : any, thunkAPI) => {
//     try {
//         const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/tipeEvents/`+datas.uuid,{
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

export const tipeEventsSlice = createSlice({
    name: "tipeEvents",
    initialState,
    reducers:{
        resetTipeEvent: (state) => initialState
    },
    extraReducers:(builder) => {
        // get tipeNotifications
        builder.addCase(getTipeEvents.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getTipeEvents.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getTipeEvents.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // // get tipeNotifications
        // builder.addCase(getTipeEventsById.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(getTipeEventsById.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.data = action.payload;
        // });
        // builder.addCase(getTipeEventsById.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // })

        // // get tipeNotifications
        // builder.addCase(getTipeEventsTable.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(getTipeEventsTable.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.data = action.payload;
        // });
        // builder.addCase(getTipeEventsTable.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // })

        // // get tipeNotifications
        // builder.addCase(createTipeEvents.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(createTipeEvents.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.message = action.payload;
        // });
        // builder.addCase(createTipeEvents.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // })

        // // update tipeNotifications
        // builder.addCase(updateTipeEvents.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(updateTipeEvents.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.message = action.payload;
        // });
        // builder.addCase(updateTipeEvents.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // })

        // // update tipeNotifications
        // builder.addCase(deleteTipeEvents.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(deleteTipeEvents.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.message = action.payload;
        // });
        // builder.addCase(deleteTipeEvents.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // })

    }
})

export const {resetTipeEvent} = tipeEventsSlice.actions;
export default tipeEventsSlice.reducer;