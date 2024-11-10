import React from 'react'
import { FormInput, FormLabel, FormSelect } from "../../../base-components/Form";

const FormPassword = (props : any) => {
    const {
        statusNumber,
        password, setPassword,
    } = props;

    return (
        <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5 text-xs ${statusNumber !== 7 ? 'hidden' : ''}`}>
            <div className="col-span-12 intro-y sm:col-span-6">
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput
                    formInputSize="sm"
                    id="password"
                    type="text"
                    placeholder=""
                    name='password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
            </div>
        </div>
    )
}

export default FormPassword