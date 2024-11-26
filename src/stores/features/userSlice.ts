import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import fileDownload from "js-file-download";

interface variabel {
    data: any;
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    message: any;
}

const initialState : variabel = {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

interface varPassword {
    id: string;
    password: string;
}

export const changePassword: any = createAsyncThunk("user/changePassword", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+'/user/password/'+datas.uuid, {
            password: datas.password,
            confPassword: datas.confPassword
        },{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        return response.data;
    } catch (error: any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const getCountUser: any = createAsyncThunk("users/getCountUser", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/user/count`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        
        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

// export const getUsers: any = createAsyncThunk("users/getUsers", async(_, thunkAPI) => {
//     try {
//         const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/users`,{
//             withCredentials: true, // Now this is was the missing piece in the client side 
//         });
        
//         return response.data;
//     } catch (error : any) {
//         if(error.response){
//             const message = error.response.data;
//             return thunkAPI.rejectWithValue(message);
//         }
//     }
// });

// export const downloadUsers : any = createAsyncThunk("downloadUsers", async(status : any, thunkAPI) => {
//     try {
//         return axios({
//             url:`${import.meta.env.VITE_REACT_APP_API_URL}/usersExport/${status.code}`,
//             responseType: 'blob',
//             method: 'GET'
//         }).then((response)=>{
//             fileDownload(response.data, status.name);
//         });
//     } catch (error : any) {
//         if(error.response){
//             const message = error.response.data.msg;
//             return thunkAPI.rejectWithValue(message);
//         }
//     }
// })

// export const importUsers: any = createAsyncThunk("users/importUsers", async(datas : any, thunkAPI) => {
//     try {
//         const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/users/import`, datas.formData,{
//             withCredentials: true, // Now this is was the missing piece in the client side 
//         });
//         return response.data;
//     } catch (error: any) {
//         if(error.response){
//             return thunkAPI.rejectWithValue(error.response);
//         }
//     }
// });

// export const UpdateUser  : any = createAsyncThunk("users/UpdateUser", async(datas : any, thunkAPI) => {
//     try {
//         const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/users/${datas.id}`, {
//             nik:datas.nik,
//             absenId:datas.absenId,
//             name:datas.name, 
//             ganderId:datas.ganderId, 
//             email:datas.email,
//             extention:datas.extention,
//             nomorHp:datas.nomorHp,
//             penempatanId:datas.penempatanId,
//             jabatanId:datas.jabatanId,
//             atasanId:datas.atasanId,
//             nomorKtp:datas.nomorKtp,
//             alamatKtp:datas.alamatKtp,
//             alamatDomisili:datas.alamatDomisili,
//             tempatLahir:datas.tempatLahir,
//             tanggalLahir:datas.tanggalLahir,
//             nomorNpwp:datas.nomorNpwp,
//             statusPerkawinanId:datas.statusPerkawinanId,
//             jumlahAnak:datas.jumlahAnak,
//             namaIbu:datas.namaIbu,
//             pendidikanId:datas.pendidikanId,
//             namaSekolah:datas.namaSekolah,
//             jurusanSekolah:datas.jurusanSekolah,
//             tahunLulus:datas.tahunLulus,
//             ipk:datas.ipk,
//             nomorBpjsKesehatan:datas.nomorBpjsKesehatan,
//             nomorBpjsKetenagakerjaan:datas.nomorBpjsKetenagakerjaan,
//             contactEmergencyId:datas.contactEmergencyId,
//             emergencyNumber:datas.emergencyNumber,
//             emergencyAddress:datas.emergencyAddress,
//             nomorSim:datas.nomorSim,
//             golonganDarahId:datas.golonganDarahId,
//             bankId:datas.bankId,
//             nomorRekening:datas.nomorRekening,
//             jamOperasionalGroupId:datas.jamOperasionalGroupId,
//             groupId:datas.groupId,
//             quote:datas.quote,
//             statusId:datas.statusId,
//             isAtasan:datas.isAtasan,
//             isActive:datas.isActive
//         },{
//             withCredentials: true, // Now this is was the missing piece in the client side 
//         });
//         return response.data;
//     } catch (error : any) {
//         if(error.response){
//             const message = error.response.data;
//             return thunkAPI.rejectWithValue(message);
//         }
//     }
// });

// export const CreateUser  : any = createAsyncThunk("users/CreateUser", async(datas : any, thunkAPI) => {
//     try {
//         const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/users`, {
//             nik:datas.nik,
//             absenId:datas.absenId,
//             name:datas.name,
//             ganderId:datas.ganderId, 
//             email:datas.email,
//             password:datas.password,
//             extention:datas.extention,
//             nomorHp:datas.nomorHp,
//             penempatanId:datas.penempatanId,
//             jabatanId:datas.jabatanId,
//             atasanId:datas.atasanId,
//             nomorKtp:datas.nomorKtp,
//             alamatKtp:datas.alamatKtp,
//             alamatDomisili:datas.alamatDomisili,
//             tempatLahir:datas.tempatLahir,
//             tanggalLahir:datas.tanggalLahir,
//             nomorNpwp:datas.nomorNpwp,
//             statusPerkawinanId:datas.statusPerkawinanId,
//             jumlahAnak:datas.jumlahAnak,
//             namaIbu:datas.namaIbu,
//             pendidikanId:datas.pendidikanId,
//             namaSekolah:datas.namaSekolah,
//             jurusanSekolah:datas.jurusanSekolah,
//             tahunLulus:datas.tahunLulus,
//             ipk:datas.ipk,
//             nomorBpjsKesehatan:datas.nomorBpjsKesehatan,
//             nomorBpjsKetenagakerjaan:datas.nomorBpjsKetenagakerjaan,
//             contactEmergencyId:datas.contactEmergencyId,
//             emergencyNumber:datas.emergencyNumber,
//             emergencyAddress:datas.emergencyAddress,
//             nomorSim:datas.nomorSim,
//             golonganDarahId:datas.golonganDarahId,
//             bankId:datas.bankId,
//             nomorRekening:datas.nomorRekening,
//             jamOperasionalGroupId:datas.jamOperasionalGroupId,
//             groupId:datas.groupId,
//             quote:datas.quote,
//             statusId:datas.statusId,
//             isAtasan:datas.isAtasan,
//             isActive:datas.isActive
//         },{
//             withCredentials: true, // Now this is was the missing piece in the client side 
//         });

//         return response.data;
//     } catch (error : any) {
//         if(error.response){
//             const message = error.response;
//             return thunkAPI.rejectWithValue(message);
//         }
//     }
// });

// export const UpdateStatusUser  : any = createAsyncThunk("users/UpdateStatusUser", async(datas : any, thunkAPI) => {
//     try {
//         const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/users/${datas.id}`, {
//             statusId:datas.statusId,
//             isActive:datas.isActive
//         },{
//             withCredentials: true, // Now this is was the missing piece in the client side 
//         });
//         return response.data;
//     } catch (error : any) {
//         if(error.response){
//             const message = error.response.data;
//             return thunkAPI.rejectWithValue(message);
//         }
//     }
// });

export const getUserById : any = createAsyncThunk("users/getUserById", async(datas : varPassword, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+'/user/data/'+datas.id,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        return response.data;
    } catch (error : any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers:{
        resetUsers: (state) => initialState
    },
    extraReducers:(builder) => {

        //change password
        builder.addCase(changePassword.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(changePassword.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(changePassword.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        //get count users
        builder.addCase(getCountUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getCountUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getCountUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        // //get users
        // builder.addCase(getUsers.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(getUsers.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.data = action.payload;
        // });
        // builder.addCase(getUsers.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // });

        //get users
        builder.addCase(getUserById.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getUserById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getUserById.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        // //download user
        // builder.addCase(downloadUsers.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(downloadUsers.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.message = action.payload;
        // });
        // builder.addCase(downloadUsers.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // });

        // //importUsers
        // builder.addCase(importUsers.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(importUsers.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.message = action.payload;
        // });
        // builder.addCase(importUsers.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // });

        // //Update Status User
        // builder.addCase(UpdateStatusUser.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(UpdateStatusUser.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.message = action.payload;
        // });
        // builder.addCase(UpdateStatusUser.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // });

        // //Update Status User
        // builder.addCase(UpdateUser.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(UpdateUser.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.message = action.payload;
        // });
        // builder.addCase(UpdateUser.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // });

        // //Update Status User
        // builder.addCase(CreateUser.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(CreateUser.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.message = action.payload;
        // });
        // builder.addCase(CreateUser.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // });
    }
})

export const {resetUsers} = usersSlice.actions;
export default usersSlice.reducer;