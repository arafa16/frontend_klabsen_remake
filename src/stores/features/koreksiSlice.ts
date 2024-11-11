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
            userId : datas.userId, 
            inOutId :  datas.inOutId, 
            keterangan : datas.keterangan, 
            codeStatusKoreksi : datas.codeStatusKoreksi, 
            isActive : datas.isActive,
            codeStatusInout : datas.codeStatusInout,
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
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/koreksi/byDate`,{
            userId:datas.userId,
            tanggalMulai:datas.tanggalMulai,
            tanggalSelesai:datas.tanggalSelesai,
            tipeAbsenId:datas.tipeAbsenId,
            codePelanggaran:datas.codePelanggaran,
            codeStatusInout:datas.codeStatusInout,
            codeStatusKoreksi:datas.codeStatusKoreksi,
            jamOperasionalId:datas.jamOperasionalId,
            keterangan:datas.keterangan,
            isAbsenWeb:datas.isAbsenWeb,
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
//             const message = error.response.data.msg;
//             return thunkAPI.rejectWithValue(message);
//         }
//     }
// });

// export const approverKoreksis: any = createAsyncThunk("approverKoreksis", async(datas : any, thunkAPI) => {
//     try {
//         console.log(datas, 'datas');
//         const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/koreksis/${datas.id}/approve`,{
//             statusKoreksiId : datas.codeStatusKoreksi,
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

// export const getKoreksisById: any = createAsyncThunk("getKoreksisById", async(datas : any, thunkAPI) => {
//     try {
//         const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/koreksis/${datas.id}`,{
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

// export const getKoreksisTable: any = createAsyncThunk("getKoreksisTable", async(datas : any, thunkAPI) => {
//     try {
//         const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/koreksis/${datas.limit}&${datas.page}`,{
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

// export const getKoreksisByUser: any = createAsyncThunk("getKoreksisByUser", async(datas : any, thunkAPI) => {
//     try {
//         const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/koreksis/${datas.id}/user`,{
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

// export const getKoreksisByApprover: any = createAsyncThunk("getKoreksisByApprover", async(datas : any, thunkAPI) => {
//     try {
//         const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/koreksis/${datas.id}/approver`,{
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

        // // create koreksi
        // builder.addCase(createKoreksisByDate.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(createKoreksisByDate.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.message = action.payload;
        // });
        // builder.addCase(createKoreksisByDate.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // })

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

        // // get koreksi by id
        // builder.addCase(getKoreksisById.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(getKoreksisById.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.data = action.payload;
        // });
        // builder.addCase(getKoreksisById.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // })

        // // get koreksi table by user
        // builder.addCase(getKoreksisByUser.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(getKoreksisByUser.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.data = action.payload;
        // });
        // builder.addCase(getKoreksisByUser.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // })

        // // get koreksi by approver
        // builder.addCase(getKoreksisByApprover.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(getKoreksisByApprover.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.data = action.payload;
        // });
        // builder.addCase(getKoreksisByApprover.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // })

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