import React from 'react'
import { FormInput, FormLabel, FormSelect } from "../../../base-components/Form";

const FormDataOperasionalKantor = (props : any) => {
    const {
        statusNumber,
        penempatanId, setPenempatanId,
        jabatanId, setJabatanId,
        atasanId, setAtasanId,
        isAtasan, setIsAtasan,
        jamOperasionalGroupId, setJamOperasionalGroupId,
        groupId, setGroupId,
        extention, setExtention,
        quote, setQuote,
        penempatans,
        jabatans,
        jamOperasionalGroups,
        groups,
        atasans
    } = props;
    return (
        <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5 text-xs ${statusNumber !== 5 ? 'hidden' : ''}`}>
            <div className="col-span-12 intro-y sm:col-span-4">
                <FormLabel htmlFor="input-wizard-1">Penempatan *</FormLabel>
                <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name='penempatanId'
                    value={penempatanId}
                    onChange={(e)=>setPenempatanId(e.target.value)}
                    >
                        <option></option>
                        {penempatans && penempatans.map((data : any, index : any)=>(
                            <option key={index} value={data.id}>{data.name}</option>
                        ))}
                </FormSelect>
            </div>
            <div className="col-span-12 intro-y sm:col-span-4">
                <FormLabel htmlFor="input-wizard-1">Jabatan *</FormLabel>
                <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name='jabatanId'
                    value={jabatanId}
                    onChange={(e)=>setJabatanId(e.target.value)}
                    >
                        <option></option>
                        {jabatans && jabatans.map((data : any, index : any)=>(
                            <option key={index} value={data.id}>{data.name}</option>
                        ))}
                </FormSelect>
            </div>
            <div className="col-span-12 intro-y sm:col-span-4">
                <FormLabel htmlFor="input-wizard-1">Atasan</FormLabel>
                <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name='atasanId'
                    required
                    value={atasanId}
                    onChange={(e)=>setAtasanId(e.target.value)}
                    >
                        <option></option>
                        {atasans && atasans.map((data : any, index : any)=>(
                            <option key={index} value={data.id}>{data.name}</option>
                        ))}
                </FormSelect>
            </div>
            <div className="col-span-12 intro-y sm:col-span-4">
                <FormLabel htmlFor="input-wizard-1">is Atasan ?</FormLabel>
                <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name='isAtasan'
                    value={isAtasan}
                    onChange={(e)=>setIsAtasan(e.target.value)}
                    >
                    <option></option>
                    <option value='0'>No</option>
                    <option value='1'>Yes</option>
                </FormSelect>
            </div>
            <div className="col-span-12 intro-y sm:col-span-4">
                <FormLabel htmlFor="input-wizard-1">Jam Operasional Group *</FormLabel>
                <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name='jamOperasionalId'
                    value={jamOperasionalGroupId}
                    onChange={(e)=>setJamOperasionalGroupId(e.target.value)}
                    >
                        <option></option>
                        {jamOperasionalGroups && jamOperasionalGroups.map((data : any, index : any)=>(
                            <option key={index} value={data.id}>{data.name}</option>
                        ))}
                </FormSelect>
            </div>
            <div className="col-span-12 intro-y sm:col-span-4">
                <FormLabel htmlFor="input-wizard-1">Group *</FormLabel>
                <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name='groupsId'
                    value={groupId}
                    onChange={(e)=>setGroupId(e.target.value)}
                    >
                        <option></option>
                        {groups && groups.map((data : any, index : any)=>(
                            <option key={index} value={data.id}>{data.name}</option>
                        ))}
                </FormSelect>
            </div>
            <div className="col-span-12 intro-y sm:col-span-4">
                <FormLabel htmlFor="input-wizard-1">Extention *</FormLabel>
                <FormInput
                    formInputSize="sm"
                    id="extention"
                    type="text"
                    placeholder=""
                    name='extention'
                    value={extention}
                    onChange={(e)=>setExtention(e.target.value)}
                />
            </div>
            <div className="col-span-12 intro-y sm:col-span-4">
                <FormLabel htmlFor="input-wizard-1">Quote *</FormLabel>
                <FormInput
                    formInputSize="sm"
                    id="quote"
                    type="text"
                    placeholder=""
                    name='quote'
                    value={quote}
                    onChange={(e)=>setQuote(e.target.value)}
                />
            </div>
        </div>
    )
}

export default FormDataOperasionalKantor