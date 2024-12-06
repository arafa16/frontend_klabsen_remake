import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FormLabel, FormSelect, FormInput } from '../../base-components/Form';
import Button from '../../base-components/Button';
import { useNavigate } from 'react-router-dom';
import LoadingIcon from '../../base-components/LoadingIcon';

const formTemplate7 = (props : any) => {
    const {
        changeFile,
        name, setName, 
        sequence, setSequence, 
        isActive, setIsActive, 
        linkBack,
        submitAction,
        loadingSubmit,
        deleteAction,
        isDeleteActive,
        loadingDelete
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
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="input-wizard-1">File</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="name"
                            type="file"
                            name='file'
                            onChange={changeFile}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="input-wizard-1">Sequence</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="code"
                            type="text"
                            name='sequence'
                            value={sequence}
                            onChange={(e)=>setSequence(e.target.value)}
                        />
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

export default formTemplate7