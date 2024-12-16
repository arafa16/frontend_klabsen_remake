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

export const getEvents : any = createAsyncThunk("getEvents", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/event/datas`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getEventsByMonth : any = createAsyncThunk("getEventsByMonth", async(datas:any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/event/table?${datas}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getEventsById : any = createAsyncThunk("getEventsById", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/event/data/`+datas.id,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getEventsTable : any = createAsyncThunk("getEventsTable", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/event/table?${datas}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const createEvents : any = createAsyncThunk("createEvents", async(datas : any, thunkAPI) => {
    try {
        console.log(datas, 'data')
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/event/data`,{
            name: datas.name,
            bulan: datas.bulan,
            tahun: datas.tahun,
            tanggal_mulai: datas.tanggal_mulai,
            tanggal_selesai: datas.tanggal_selesai,
            tipe_event_id: datas.tipe_event_id,
            note: datas.note,
            code: datas.code,
            is_active: datas.is_active
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

export const updateEvents : any = createAsyncThunk("updateEvents", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/event/data/`+datas.id,{
            name: datas.name,
            bulan: datas.bulan,
            tahun: datas.tahun,
            tanggal_mulai: datas.tanggal_mulai,
            tanggal_selesai: datas.tanggal_selesai,
            tipe_event_id: datas.tipe_event_id,
            note: datas.note,
            code: datas.code,
            is_active: datas.is_active
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

export const deleteEvents : any = createAsyncThunk("deleteEvents", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/event/data/`+datas.id,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers:{
        resetEvents: (state) => initialState
    },
    extraReducers:(builder) => {
        // get events
        builder.addCase(getEvents.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getEvents.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getEvents.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get events
        builder.addCase(getEventsByMonth.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getEventsByMonth.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getEventsByMonth.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

         // get events
         builder.addCase(getEventsById.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getEventsById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getEventsById.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get events table
        builder.addCase(getEventsTable.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getEventsTable.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getEventsTable.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get events table
        builder.addCase(updateEvents.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateEvents.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(updateEvents.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get events table
        builder.addCase(createEvents.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createEvents.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(createEvents.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // deleteEvents
        builder.addCase(deleteEvents.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(deleteEvents.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(deleteEvents.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

    }
})

export const {resetEvents} = eventsSlice.actions;
export default eventsSlice.reducer;