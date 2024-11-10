import React from 'react'
import { FormInput, FormLabel, FormSelect } from "../../../base-components/Form";

const FormDataKesehatan = (props : any) => {
    const {
        statusNumber,
        nomorBpjsKesehatan, setNomorBpjsKesehatan,
        nomorBpjsKetenagakerjaan, setNomorBpjsKetenagakerjaan,
        contactEmergencyId, setContactEmergencyId,
        emergencyNumber, setEmergencyNumber,
        emergencyAddress, setEmergencyAddress,
        nomorSim, setNomorSim,
        golonganDarahId, setGolonganDarahId,
        contacts,
        golonganDarahs
    } = props;
    return (
        <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5 text-xs ${statusNumber !== 4 ? 'hidden' : ''}`}>
            <div className="col-span-12 intro-y sm:col-span-4">
                <FormLabel htmlFor="input-wizard-1">Nomor Bpjs Kesehatan</FormLabel>
                <FormInput
                    formInputSize="sm"
                    id="nomorBpjsKesehatan"
                    type="text"
                    placeholder=""
                    name='nomorBpjsKesehatan'
                    value={nomorBpjsKesehatan}
                    onChange={(e)=>setNomorBpjsKesehatan(e.target.value)}
                />
            </div>
            <div className="col-span-12 intro-y sm:col-span-4">
                <FormLabel htmlFor="input-wizard-1">Nomor Bpjs Ketenagakerjaan</FormLabel>
                <FormInput
                    formInputSize="sm"
                    id="nomorBpjsKetenagakerjaan"
                    type="text"
                    placeholder=""
                    name='nomorBpjsKetenagakerjaan'
                    value={nomorBpjsKetenagakerjaan}
                    onChange={(e)=>setNomorBpjsKetenagakerjaan(e.target.value)}
                />
            </div>
            <div className="col-span-12 intro-y sm:col-span-4">
                <FormLabel htmlFor="input-wizard-1">Contact Emergency</FormLabel>
                <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name='contactEmergancyId'
                    value={contactEmergencyId}
                    onChange={(e)=>setContactEmergencyId(e.target.value)}
                    >
                        <option></option>
                        {contacts && contacts.map((data :any, index : any)=>(
                            <option key={index} value={data.id}>{data.name}</option>
                        ))}
                </FormSelect>
            </div>
            <div className="col-span-12 intro-y sm:col-span-4">
                <FormLabel htmlFor="input-wizard-1">Nomor Emergency</FormLabel>
                <FormInput
                    formInputSize="sm"
                    id="emergencyNumber"
                    type="text"
                    placeholder=""
                    name='emergancyNumber'
                    value={emergencyNumber}
                    onChange={(e)=>setEmergencyNumber(e.target.value)}
                />
            </div>
            <div className="col-span-12 intro-y sm:col-span-4">
                <FormLabel htmlFor="input-wizard-1">Alamat Emergancy</FormLabel>
                <FormInput
                    formInputSize="sm"
                    id="emergancyAddress"
                    type="text"
                    placeholder=""
                    name='emergancyAddress'
                    value={emergencyAddress}
                    onChange={(e)=>setEmergencyAddress(e.target.value)}
                />
            </div>
            <div className="col-span-12 intro-y sm:col-span-4">
                <FormLabel htmlFor="input-wizard-1">Nomor Sim</FormLabel>
                <FormInput
                    formInputSize="sm"
                    id="nomorSim"
                    type="text"
                    placeholder=""
                    name='nomorSim'
                    value={nomorSim}
                    onChange={(e)=>setNomorSim(e.target.value)}
                />
            </div>
            <div className="col-span-12 intro-y sm:col-span-4">
                <FormLabel htmlFor="input-wizard-1">Golongan Darah</FormLabel>
                <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name='golonganDarahId'
                    value={golonganDarahId}
                    onChange={(e)=>setGolonganDarahId(e.target.value)}
                    >
                        <option></option>
                        {golonganDarahs && golonganDarahs.map((data :any, index : any)=>(
                            <option key={index} value={data.id}>{data.name}</option>
                        ))}
                </FormSelect>
            </div>
        </div>
    )
}

export default FormDataKesehatan