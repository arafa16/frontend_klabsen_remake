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

export const createKoreksi: any = createAsyncThunk("createKoreksi", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/koreksi/data`,{
            user_id : datas.user_id, 
            in_out_id :  datas.in_out_id, 
            keterangan : datas.keterangan, 
            code_status_koreksi : datas.code_status_koreksi, 
            is_active : datas.is_active,
            code_status_inout : datas.code_status_inout,
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

export const createKoreksisByDate: any = createAsyncThunk("createKoreksisByDate", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/koreksi/date`,{
            user_id:datas.user_id,
            tanggal_mulai:datas.tanggal_mulai,
            tanggal_selesai:datas.tanggal_selesai,
            tipe_absen_id:datas.tipe_absen_id,
            code_pelanggaran:datas.code_pelanggaran,
            code_status_inout:datas.code_status_inout,
            code_status_koreksi:datas.code_status_koreksi,
            jam_operasional_id:datas.jam_operasional_id,
            keterangan:datas.keterangan,
            is_absen_web:datas.is_absen_web,
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

// export const updateKoreksis: any = createAsyncThunk("updateKoreksis", async(datas : any, thunkAPI) => {
//     try {
//         const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/koreksis/${datas.id}`,{
//             userId : datas.userId, 
//             inOutId :  datas.inOutId, 
//             keterangan : datas.keterangan, 
//             codeStatusKoreksi : datas.codeStatusKoreksi, 
//             isActive : datas.isActive,
//             codeStatusInout : datas.codeStatusInout,
//         },{
//             withCredentials: true, // Now this is was the missing piece in the client side 
//         });
        
//         return response.data;
//     } catch (error : any) {
//         if(error.response){
        //     return thunkAPI.rejectWithValue(error.response);
        // }   
//     }
// });

export const approverKoreksis: any = createAsyncThunk("approverKoreksis", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/koreksi/table?${datas}`,{
            statusKoreksiId : datas.codeStatusKoreksi,
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

export const getKoreksisById: any = createAsyncThunk("getKoreksisById", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/koreksi/data/${datas.uuid}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getKoreksisTable: any = createAsyncThunk("getKoreksisTable", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/koreksi/table?${datas}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getKoreksisByUser: any = createAsyncThunk("getKoreksisByUser", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/koreksi/datas?${datas}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getKoreksisByApprover: any = createAsyncThunk("getKoreksisByApprover", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/koreksi/datas?${datas}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        console.log(response, 'getKoreksisByApprover')
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const koreksisSlice = createSlice({
    name: "koreksis",
    initialState,
    reducers:{
        resetKoreksis: (state) => initialState
    },
    extraReducers:(builder) => {
        
        // create koreksi
        builder.addCase(createKoreksi.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createKoreksi.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(createKoreksi.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // create koreksi
        builder.addCase(createKoreksisByDate.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createKoreksisByDate.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(createKoreksisByDate.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // // create koreksi
        // builder.addCase(updateKoreksis.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(updateKoreksis.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.message = action.payload;
        // });
        // builder.addCase(updateKoreksis.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // })

        // get koreksi by id
        builder.addCase(getKoreksisById.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getKoreksisById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getKoreksisById.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get koreksi table by user
        builder.addCase(getKoreksisByUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getKoreksisByUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getKoreksisByUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get koreksi by approver
        builder.addCase(getKoreksisByApprover.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getKoreksisByApprover.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getKoreksisByApprover.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // // get koreksi by approver
        // builder.addCase(approverKoreksis.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(approverKoreksis.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.message = action.payload;
        // });
        // builder.addCase(approverKoreksis.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // })


    }
})

export const {resetKoreksis} = koreksisSlice.actions;
export default koreksisSlice.reducer;