import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    data: any;
    data2: any;
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    message: any;
}

const initialState : variabel = {
    data: null,
    data2: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const getPeriodeKerjas : any = createAsyncThunk("getPeriodeKerjas", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/periode_kerja/datas`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getPeriodeKerjaSelect : any = createAsyncThunk("getPeriodeKerjaSelect", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/periode_kerja/select`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getPeriodeKerjasTable : any = createAsyncThunk("getPeriodeKerjasTable", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/periode_kerja/table?${datas}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

// export const getPeriodeKerjasTableStatus : any = createAsyncThunk("getPeriodeKerjasTableStatus", async(datas : any, thunkAPI) => {
//     try {
//         const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/periode/${datas.limit}&${datas.page}&${datas.isActive}`,{
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

export const getPeriodeKerjasById : any = createAsyncThunk("getPeriodeKerjasById", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/periode_kerja/data/${datas.uuid}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        console.log(response, 'response');
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getPeriodeKerjasByIdForInout : any = createAsyncThunk("getPeriodeKerjasByIdForInout", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/periode_kerja/data/${datas.uuid}/${datas.userUuid}/inout`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const createPeriodeKerjas : any = createAsyncThunk("createPeriodeKerjas", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/periode_kerja/data`,{
            name:datas.name,
            bulan:datas.bulan,
            tahun:datas.tahun,
            tanggal_mulai:datas.tanggal_mulai,
            tanggal_selesai:datas.tanggal_selesai,
            jumlah_hari:datas.jumlah_hari,
            code:datas.code,
            is_active:datas.is_active
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

export const updatePeriodeKerjas : any = createAsyncThunk("updatePeriodeKerjas", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/periode_kerja/data/${datas.uuid}`,{
            name:datas.name,
            bulan:datas.bulan,
            tahun:datas.tahun,
            tanggal_mulai:datas.tanggal_mulai,
            tanggal_selesai:datas.tanggal_selesai,
            jumlah_hari:datas.jumlah_hari,
            code:datas.code,
            is_active:datas.is_active
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

export const deletePeriodeKerjas : any = createAsyncThunk("deletePeriodeKerjas", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/periode_kerja/data/${datas.uuid}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});


export const periodeKerjasSlice = createSlice({
    name: "periodeKerjas",
    initialState,
    reducers:{
        resetPeriodeKerja: (state) => initialState
    },
    extraReducers:(builder) => {

        // get periode kerja
        builder.addCase(getPeriodeKerjas.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getPeriodeKerjas.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getPeriodeKerjas.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        // get periode kerja select
        builder.addCase(getPeriodeKerjaSelect.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getPeriodeKerjaSelect.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getPeriodeKerjaSelect.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        // get periode kerja table
        builder.addCase(getPeriodeKerjasTable.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getPeriodeKerjasTable.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getPeriodeKerjasTable.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        // // get periode kerja table
        // builder.addCase(getPeriodeKerjasTableStatus.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(getPeriodeKerjasTableStatus.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.data = action.payload;
        // });
        // builder.addCase(getPeriodeKerjasTableStatus.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // });

        // get periode kerja id
        builder.addCase(getPeriodeKerjasById.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getPeriodeKerjasById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getPeriodeKerjasById.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        // get periode kerja id for inout
        builder.addCase(getPeriodeKerjasByIdForInout.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getPeriodeKerjasByIdForInout.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data2 = action.payload;
        });
        builder.addCase(getPeriodeKerjasByIdForInout.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        // create periode kerja
        builder.addCase(createPeriodeKerjas.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createPeriodeKerjas.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(createPeriodeKerjas.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        // update periode kerja
        builder.addCase(updatePeriodeKerjas.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updatePeriodeKerjas.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(updatePeriodeKerjas.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        // delete periode kerja
        builder.addCase(deletePeriodeKerjas.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(deletePeriodeKerjas.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(deletePeriodeKerjas.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
})

export const {resetPeriodeKerja} = periodeKerjasSlice.actions;
export default periodeKerjasSlice.reducer;