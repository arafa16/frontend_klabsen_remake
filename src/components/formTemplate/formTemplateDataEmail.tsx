import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FormLabel, FormSelect, FormInput } from '../../base-components/Form';
import Button from '../../base-components/Button';
import { useNavigate } from 'react-router-dom';
import LoadingIcon from '../../base-components/LoadingIcon';

const formTemplateDataEmail = (props : any) => {
    const {
        name, set_name, 
        from, set_from,
        to, set_to,
        subject, set_subject,
        text_email, set_text_email,
        status_email_id, set_status_email_id,
        code, set_code, 
        is_active, setIsActive, 
        statusEmailSelect,
        linkBack,
        submitAction,
        loadingSubmit,
    } = props;
    
    const navigate = useNavigate();
    
    return (
        <div className="p-5 mt-5 box intro-y">
            <form onSubmit={submitAction}>
                <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5`}>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="input-wizard-1">Name</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="name"
                            type="text"
                            name='name'
                            value={name}
                            onChange={(e)=>set_name(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="input-wizard-1">From</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="name"
                            type="text"
                            name='from'
                            value={from}
                            onChange={(e)=>set_from(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="input-wizard-1">To</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="name"
                            type="text"
                            name='to'
                            value={to}
                            onChange={(e)=>set_to(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="input-wizard-1">Subject</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="name"
                            type="text"
                            name='subject'
                            value={subject}
                            onChange={(e)=>set_subject(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="input-wizard-1">Text Email</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="name"
                            type="text"
                            name='text_email'
                            value={text_email}
                            onChange={(e)=>set_text_email(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="input-wizard-1">Status email</FormLabel>
                        <FormSelect
                            formSelectSize="sm"
                            aria-label=".form-select-sm example"
                            name='status_email_id'
                            value={status_email_id}
                            onChange={(e)=>set_status_email_id(e.target.value)}
                            >
                            <option></option>
                            {statusEmailSelect.map((data:any, index:any)=>(
                                <option key={index} value={data.id}>{data.name}</option>
                            ))}
                        </FormSelect>
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="input-wizard-1">Code</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="code"
                            type="text"
                            name='code'
                            value={code}
                            onChange={(e)=>set_code(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="input-wizard-1">Is Active ?</FormLabel>
                        <FormSelect
                            formSelectSize="sm"
                            aria-label=".form-select-sm example"
                            name='isActive'
                            value={is_active}
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

export default formTemplateDataEmail