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

export const getUsers: any = createAsyncThunk("users/getUsers", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/users`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        
        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const downloadUsers : any = createAsyncThunk("downloadUsers", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/user/export?${datas.searchParams}`,{
            responseType: 'blob',
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        console.log(datas.searchParams.toString(), response)

        return fileDownload(response.data, datas.name);
    } catch (error : any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
})

export const importUsers: any = createAsyncThunk("users/importUsers", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/user/import`, datas.formData,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        return response.data;
    } catch (error: any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const UpdateUser  : any = createAsyncThunk("users/UpdateUser", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/user/data/${datas.id}`, {
            nik:datas.nik,
            absen_id:datas.absen_id,
            name:datas.name,
            gander_id:datas.gander_id, 
            email:datas.email,
            // password:datas.password,
            extention:datas.extention,
            nomor_hp:datas.nomor_hp,
            penempatan_id:datas.penempatan_id,
            jabatan_id:datas.jabatan_id,
            atasan_id:datas.atasan_id,
            nomor_ktp:datas.nomor_ktp,
            alamat_ktp:datas.alamat_ktp,
            alamat_domisili:datas.alamat_domisili,
            tempat_lahir:datas.tempat_lahir,
            tanggal_lahir:datas.tanggal_lahir,
            nomor_npwp:datas.nomor_npwp,
            status_perkawinan_id:datas.status_perkawinan_id,
            jumlah_anak:datas.jumlah_anak,
            nama_ibu:datas.nama_ibu,
            pendidikan_id:datas.pendidikan_id,
            nama_sekolah:datas.nama_sekolah,
            jurusan_sekolah:datas.jurusan_sekolah,
            tahun_lulus:datas.tahun_lulus,
            ipk:datas.ipk,
            nomor_bpjs_kesehatan:datas.nomor_bpjs_kesehatan,
            nomor_bpjs_ketenagakerjaan:datas.nomor_bpjs_ketenagakerjaan,
            contact_emergency_id:datas.contact_emergency_id,
            emergency_number:datas.emergency_number,
            emergency_address:datas.emergency_address,
            nomor_sim:datas.nomor_sim,
            golongan_darah_id:datas.golongan_darah_id,
            bank_id:datas.bank_id,
            nomor_rekening:datas.nomor_rekening,
            jam_operasional_group_id:datas.jam_operasional_group_id,
            group_id:datas.group_id,
            quote:datas.quote,
            status_id:datas.status_id,
            is_atasan:datas.is_atasan,
            is_active:datas.is_active
        },{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const CreateUser  : any = createAsyncThunk("users/CreateUser", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/user/data`, {
            nik:datas.nik,
            absen_id:datas.absen_id,
            name:datas.name,
            gander_id:datas.gander_id, 
            email:datas.email,
            password:datas.password,
            extention:datas.extention,
            nomor_hp:datas.nomor_hp,
            penempatan_id:datas.penempatan_id,
            jabatan_id:datas.jabatan_id,
            atasan_id:datas.atasan_id,
            nomor_ktp:datas.nomor_ktp,
            alamat_ktp:datas.alamat_ktp,
            alamat_domisili:datas.alamat_domisili,
            tempat_lahir:datas.tempat_lahir,
            tanggal_lahir:datas.tanggal_lahir,
            nomor_npwp:datas.nomor_npwp,
            status_perkawinan_id:datas.status_perkawinan_id,
            jumlah_anak:datas.jumlah_anak,
            nama_ibu:datas.nama_ibu,
            pendidikan_id:datas.pendidikan_id,
            nama_sekolah:datas.nama_sekolah,
            jurusan_sekolah:datas.jurusan_sekolah,
            tahun_lulus:datas.tahun_lulus,
            ipk:datas.ipk,
            nomor_bpjs_kesehatan:datas.nomor_bpjs_kesehatan,
            nomor_bpjs_ketenagakerjaan:datas.nomor_bpjs_ketenagakerjaan,
            contact_emergency_id:datas.contact_emergency_id,
            emergency_number:datas.emergency_number,
            emergency_address:datas.emergency_address,
            nomor_sim:datas.nomor_sim,
            golongan_darah_id:datas.golongan_darah_id,
            bank_id:datas.bank_id,
            nomor_rekening:datas.nomor_rekening,
            jam_operasional_group_id:datas.jam_operasional_group_id,
            group_id:datas.group_id,
            quote:datas.quote,
            status_id:datas.status_id,
            is_atasan:datas.is_atasan,
            is_active:datas.is_active
        },{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const UpdateStatusUser  : any = createAsyncThunk("users/UpdateStatusUser", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/users/${datas.id}`, {
            statusId:datas.statusId,
            isActive:datas.isActive
        },{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

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

        //download user
        builder.addCase(downloadUsers.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(downloadUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(downloadUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        //importUsers
        builder.addCase(importUsers.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(importUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(importUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

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

        //Update Status User
        builder.addCase(UpdateUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(UpdateUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(UpdateUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        //Update Status User
        builder.addCase(CreateUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(CreateUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(CreateUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
})

export const {resetUsers} = usersSlice.actions;
export default usersSlice.reducer;