import React from 'react'
import { FormInput, FormLabel, FormSelect } from "../../../base-components/Form";

const FormKelengkapanData = (props : any) => {
    const {
        status,
        statusNumber,
        statusId, setStatusId,
        isActive, setIsActive
    } = props;

    return (
        <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5 text-xs ${statusNumber !== 6 ? 'hidden' : ''}`}>
            <div className="col-span-12 intro-y sm:col-span-6">
                <FormLabel htmlFor="input-wizard-1">Status *</FormLabel>
                <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name='pendidikanId'
                    value={statusId}
                    onChange={(e)=>setStatusId(e.target.value)}
                    >
                    <option></option>
                    {status && status.map((data : any, index : any)=>(
                        <option key={index} value={data.id}>{data.name}</option>
                    ))}
                </FormSelect>
            </div>
            <div className="col-span-12 intro-y sm:col-span-6">
                <FormLabel htmlFor="input-wizard-1">Is Active ? *</FormLabel>
                <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name='pendidikanId'
                    value={isActive}
                    onChange={(e)=>setIsActive(e.target.value)}
                    >
                    <option></option>
                    <option value='0'>non active</option>
                    <option value='1'>active</option>
                </FormSelect>
            </div>
        </div>
    )
}

export default FormKelengkapanData