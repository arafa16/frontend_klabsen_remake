import React from 'react'
import { FormInput, FormLabel, FormSelect } from "../../../base-components/Form";

const FormPendidikan = (props : any) => {
    const {
        statusNumber, 
        pendidikanId, setPendidikanId,
        namaSekolah, setNamaSekolah,
        jurusanSekolah, setJurusanSekolah,
        tahunLulus, setTahunLulus,
        ipk, setIpk,
        pendidikans
    } = props;
    return (
        <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5 text-xs ${statusNumber !== 2 ? 'hidden' : ''}`}>
            <div className="col-span-12 intro-y sm:col-span-6">
                <FormLabel htmlFor="input-wizard-1">Pendidikan *</FormLabel>
                <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name='pendidikanId'
                    value={pendidikanId}
                    onChange={(e)=>setPendidikanId(e.target.value)}
                    >
                    <option></option>
                    {pendidikans && pendidikans.map((data : any, index : any)=>(
                        <option key={index} value={data.id}>{data.name}</option>
                    ))}
                </FormSelect>
            </div>
            <div className="col-span-12 intro-y sm:col-span-6">
                <FormLabel htmlFor="input-wizard-1">Nama Sekolah *</FormLabel>
                <FormInput
                formInputSize="sm"
                id="namaSekolah"
                type="text"
                placeholder=""
                name='namaSekolah'
                value={namaSekolah}
                onChange={(e)=>setNamaSekolah(e.target.value)}
                />
            </div>
            <div className="col-span-12 intro-y sm:col-span-6">
                <FormLabel htmlFor="input-wizard-1">Jurusan/Prodi *</FormLabel>
                <FormInput
                formInputSize="sm"
                id="jurusanSekolah"
                type="text"
                placeholder=""
                name='jurusanSekolah'
                value={jurusanSekolah}
                onChange={(e)=>setJurusanSekolah(e.target.value)}
                />
            </div>
            <div className="col-span-12 intro-y sm:col-span-6">
                <FormLabel htmlFor="input-wizard-1">Tahun Lulus *</FormLabel>
                <FormInput
                formInputSize="sm"
                id="tahunLulus"
                type="number"
                placeholder=""
                name='tahunLulus'
                value={tahunLulus}
                onChange={(e)=>setTahunLulus(e.target.value)}
                />
            </div>
            <div className="col-span-12 intro-y sm:col-span-6">
                <FormLabel htmlFor="input-wizard-1">IPK *</FormLabel>
                <FormInput
                formInputSize="sm"
                id="ipk"
                type="text"
                placeholder=""
                name='ipk'
                value={ipk}
                onChange={(e)=>setIpk(e.target.value)}
                />
            </div>
        </div>
    )
}

export default FormPendidikan