import { useEffect, useState } from 'react';
import { FormLabel, FormSelect, FormInput } from '../../base-components/Form';
import Button from '../../base-components/Button';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import LoadingIcon from '../../base-components/LoadingIcon';

const formTemplate3 = (props : any) => {

    const {
        name, setName,
        bulan, setBulan,
        tahun, setTahun,
        tanggalMulai, setTanggalMulai,
        tanggalSelesai, setTanggalSelesai,
        jumlahHari, setJumlahHari,
        code, setCode,
        isActive, setIsActive,
        linkBack,
        submitAction,
        loadingSubmit,
        deleteAction,
        isDeleteActive,
        loadingDelete
    } = props;
    
    const navigate = useNavigate();

    useEffect(()=>{
        setBulan(dayjs(name).format('M'));
        setTahun(dayjs(name).format('YYYY'));
    },[name]);

    return (
        <div className="p-5 mt-5 box intro-y">
            <form onSubmit={submitAction}>
                <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5`}>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="name"
                            type="month"
                            name='name'
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="tanggalMulai">Tanggal Mulai</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="tanggalMulai"
                            type="datetime-local"
                            step='1'
                            name='tanggalMulai'
                            value={dayjs(tanggalMulai).format('YYYY-MM-DD HH:mm:ss')}
                            onChange={(e)=>setTanggalMulai(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="tanggalSelesai">Tanggal Selesai</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="tanggalSelesai"
                            type="datetime-local"
                            step='1'
                            name='tanggalSelesai'
                            value={dayjs(tanggalSelesai).format('YYYY-MM-DD HH:mm:ss')}
                            onChange={(e)=>setTanggalSelesai(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="jumlahHari">Jumlah Hari</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="jumlahHari"
                            type="number"
                            name='jumlahHari'
                            value={jumlahHari}
                            onChange={(e)=>setJumlahHari(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="code">Code</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="code"
                            type="text"
                            name='code'
                            value={code}
                            onChange={(e)=>setCode(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="isActive">Is Active ?</FormLabel>
                        <FormSelect
                            formSelectSize="sm"
                            aria-label=".form-select-sm example"
                            name='isActive'
                            value={isActive}
                            onChange={(e)=>setIsActive(e.target.value)}
                            >
                            <option></option>
                            <option value={`0`}>Non Active</option>
                            <option value={`1`}>Active</option>
                        </FormSelect>
                    </div>
                </div>
                <div className={`flex items-center justify-center col-span-12 mt-10 mx-10 intro-y sm:justify-end`}>
                    <Button
                        variant="secondary" 
                        className="w-24"
                        size='sm'
                        type='button'
                        onClick={()=>navigate(linkBack)}
                        >
                        Cancel
                    </Button>
                    <Button
                        variant="danger"
                        className={`w-24 ml-2 ${isDeleteActive ? '' : 'hidden'}`}
                        size='sm'
                        type='button'
                        onClick={()=>deleteAction()}
                        >
                        {loadingDelete ?   
                        <LoadingIcon icon="tail-spin" color='white' className="w-4 h-4" /> 
                        : 
                        'Delete'
                        }
                    </Button>
                    <Button
                        variant="primary" 
                        className={`w-36 ml-2`}
                        size='sm'
                        type='submit'
                        >
                        {loadingSubmit ?   
                        <LoadingIcon icon="tail-spin" color='white' className="w-4 h-4" /> 
                        : 
                        'Save'
                        }
                    </Button>
                </div>
            </form>
        </div>
        
    )
}

export default formTemplate3