import React from 'react'
import { FormInput, FormLabel, FormSelect } from "../../../base-components/Form";
import Litepicker from '../../../base-components/Litepicker';
import dayjs from 'dayjs';

const FormDataDiriUpdate = (props : any) => {
    const {
        statusNumber, 
        absenId, setAbsenId, 
        nik, setNik,
        name, setName,
        email, setEmail,
        ganderId, setGanderId,
        tempatLahir, setTempatLahir,
        tanggalLahir, setTanggalLahir,
        statusPerkawinanId, setStatusPerkawinanId,
        jumlahAnak, setJumlahAnak,
        namaIbu, setNamaIbu,
        ganders,
        statusPerkawinans
    } = props;
    return (
        <div className={`text-xs grid grid-cols-12 gap-4 mt-5 gap-y-5 ${statusNumber !== 1 ? 'hidden' : ''}`}>
            <div className="col-span-12 intro-y sm:col-span-3">
                <FormLabel className='' htmlFor="input-wizard-1">Absen Id *</FormLabel>
                <FormInput
                    formInputSize="sm"
                    id="absenId"
                    type="text"
                    placeholder="Dari hcm"
                    name='absenId'
                    value={absenId}
                    onChange={(e)=>setAbsenId(e.target.value)}
                />
            </div>
            <div className="col-span-12 intro-y sm:col-span-3">
                <FormLabel htmlFor="input-wizard-2">NIK *</FormLabel>
                <FormInput
                    formInputSize="sm"
                    id="nik"
                    type="text"
                    placeholder=""
                    name='nik'
                    value={nik}
                    onChange={(e)=>setNik(e.target.value)}
                />
            </div>
            <div className="col-span-12 intro-y sm:col-span-3">
                <FormLabel htmlFor="input-wizard-3">Nama *</FormLabel>
                <FormInput
                    formInputSize="sm"
                    id="nama"
                    type="text"
                    placeholder=""
                    name='name'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div className="col-span-12 intro-y sm:col-span-3">
                <FormLabel htmlFor="input-wizard-3">Email *</FormLabel>
                <FormInput
                    formInputSize="sm"
                    id="email"
                    type="email"
                    placeholder=""
                    name='email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div className="col-span-12 intro-y sm:col-span-3">
                <FormLabel htmlFor="input-wizard-3">Jenis Kelamin *{ganderId}</FormLabel>
                <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name='ganderId'
                    value={ganderId}
                    onChange={(e)=>setGanderId(e.target.value)}
                    >
                    <option></option>
                    {ganders && ganders.map((data :any, index :any)=>(
                        <option key={index} value={data.id}>{data.name}</option>
                    ))}
                </FormSelect>
            </div>
            <div className="col-span-12 intro-y sm:col-span-3">
                <FormLabel htmlFor="input-wizard-3">Tempat Lahir *</FormLabel>
                <FormInput
                    formInputSize="sm"
                    id="tempatLahir"
                    type="text"
                    placeholder=""
                    name='tempatLahir'
                    value={tempatLahir}
                    onChange={(e)=>setTempatLahir(e.target.value)}
                />
            </div>
            <div className="col-span-12 intro-y sm:col-span-3">
                <FormLabel htmlFor="input-wizard-3">Tanggal Lahir *</FormLabel>
                <Litepicker
                    name='tanggalLahir'
                    value={dayjs(tanggalLahir === '' ? undefined : tanggalLahir).format('YYYY-MM-DD')}
                    onChange={setTanggalLahir}
                    options={{
                    autoApply: false,
                    showWeekNumbers: true,
                    format: 'YYYY-MM-DD',
                    dropdowns: {
                        minYear: 1980,
                        maxYear: null,
                        months: true,
                        years: true,
                    },
                    }}
                    className="block mx-auto"
                    formInputSize='sm'
                />
            </div>
            <div className="col-span-12 intro-y sm:col-span-3">
                <FormLabel htmlFor="input-wizard-3">Status Perkawinan *</FormLabel>
                <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name='statusPerkawinanId'
                    value={statusPerkawinanId}
                    onChange={(e)=>setStatusPerkawinanId(e.target.value)}
                    >
                    <option></option>
                    {statusPerkawinans && statusPerkawinans.map((data : any, index :any)=>(
                        <option key={index} value={data.id}>{data.name}</option>
                    ))}
                </FormSelect>
            </div>
            <div className="col-span-12 intro-y sm:col-span-3">
                <FormLabel htmlFor="input-wizard-3">Jumlah Anak *</FormLabel>
                <FormInput
                    formInputSize="sm"
                    id="jumlahAnak"
                    type="number"
                    placeholder=""
                    name='jumlahAnak'
                    value={jumlahAnak}
                    onChange={(e)=>setJumlahAnak(e.target.value)}
                />
            </div>
            <div className="col-span-12 intro-y sm:col-span-3">
                <FormLabel htmlFor="input-wizard-3">Nama Ibu *</FormLabel>
                <FormInput
                    formInputSize="sm"
                    id="samaIbu"
                    type="text"
                    placeholder=""
                    name='namaIbu'
                    value={namaIbu}
                    onChange={(e)=>setNamaIbu(e.target.value)}
                />
            </div>
        </div>
    )
}

export default FormDataDiriUpdate