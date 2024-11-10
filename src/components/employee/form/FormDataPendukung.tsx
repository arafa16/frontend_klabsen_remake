import React from 'react'
import { FormInput, FormLabel, FormSelect } from "../../../base-components/Form";

const FormDataPendukung = (props : any) => {
    const {
        statusNumber,
        nomorHp, setNomorHp,
        nomorKtp, setNomorKtp,
        alamatKtp, setAlamatKtp,
        alamatDomisili, setAlamatDomisili,
        bankId, setBankId,
        nomorRekening, setNomorRekening,
        nomorNpwp, setNomorNpwp,
        banks
    } = props;
    return (
        <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5 text-xs ${statusNumber !== 3 ? 'hidden' : ''}`}>
            <div className="col-span-12 intro-y sm:col-span-4">
                <FormLabel htmlFor="input-wizard-1">Nomor HP</FormLabel>
                <FormInput
                    formInputSize="sm"
                    id="nomorHp"
                    type="text"
                    placeholder=""
                    name='nomorHp'
                    value={nomorHp}
                    onChange={(e)=>setNomorHp(e.target.value)}
                />
            </div>
            <div className="col-span-12 intro-y sm:col-span-4">
                <FormLabel htmlFor="input-wizard-1">Nomor KTP</FormLabel>
                <FormInput
                    formInputSize="sm"
                    id="nomorKtp"
                    type="text"
                    placeholder=""
                    name='nomorKtp'
                    value={nomorKtp}
                    onChange={(e)=>setNomorKtp(e.target.value)}
                />
            </div>
            <div className="col-span-12 intro-y sm:col-span-4">
                <FormLabel htmlFor="input-wizard-1">Alamat KTP</FormLabel>
                <FormInput
                    formInputSize="sm"
                    id="alamatKtp"
                    type="text"
                    placeholder=""
                    name='alamatKtp'
                    value={alamatKtp}
                    onChange={(e)=>setAlamatKtp(e.target.value)}
                />
            </div>
            <div className="col-span-12 intro-y sm:col-span-4">
                <FormLabel htmlFor="input-wizard-1">Alamat Domisili</FormLabel>
                <FormInput
                    formInputSize="sm"
                    id="alamatDomisili"
                    type="text"
                    placeholder=""
                    name='alamatDomisili'
                    value={alamatDomisili}
                    onChange={(e)=>setAlamatDomisili(e.target.value)}
                />
            </div>
            <div className="col-span-12 intro-y sm:col-span-4">
                <FormLabel htmlFor="input-wizard-1">Bank</FormLabel>
                <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name='bankId'
                    value={bankId}
                    onChange={(e)=>setBankId(e.target.value)}
                    >
                    <option></option>
                    {banks && banks.map((data :any, index :any)=>(
                        <option key={index} value={data.id}>{data.name}</option>
                    ))}
                </FormSelect>
            </div>
            <div className="col-span-12 intro-y sm:col-span-4">
                <FormLabel htmlFor="input-wizard-1">Nomor Rekening</FormLabel>
                <FormInput
                    formInputSize="sm"
                    id="nomorRekening"
                    type="text"
                    placeholder=""
                    name='nomorRekening'
                    value={nomorRekening}
                    onChange={(e)=>setNomorRekening(e.target.value)}
                />
            </div>
            <div className="col-span-12 intro-y sm:col-span-4">
                <FormLabel htmlFor="input-wizard-1">Nomor Npwp</FormLabel>
                <FormInput
                    formInputSize="sm"
                    id="nomorNpwp"
                    type="text"
                    placeholder=""
                    value={nomorNpwp}
                    onChange={(e)=>setNomorNpwp(e.target.value)}
                />
            </div>
        </div>
    )
}

export default FormDataPendukung