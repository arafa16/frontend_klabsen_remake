import React, { useEffect, useState } from 'react'
import { FormInput} from '../../base-components/Form'
import Button from '../../base-components/Button'
import { importPendapatans } from '../../stores/features/pendapatanSlice';
import { useDispatch, useSelector } from 'react-redux';
import LoadingIcon from '../../base-components/LoadingIcon';

export const formUploadPendapatan = (props : any) => {
    const {reload} = props;
    const [data, setData] = useState<any>([]);
    const [isView, setIsView] = useState(false);
    const [message, setMessage] = useState<any>(null)

    const dispatch = useDispatch();

    const {message:messagePendapatan, isSuccess, isLoading} = useSelector(
        (state : any) => state.pendapatan
    );

    useEffect(()=>{
        if(messagePendapatan && isSuccess){
            if(!isLoading){
                setData([]);
                setIsView(false);
                // reload();
                setMessage(messagePendapatan);
            }
        }
    },[messagePendapatan, isSuccess, isLoading])

    const submitPendapatan = async(e : any) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', data);
        dispatch(importPendapatans({formData}));
    }

    const from = (
        <div className={`box ${isView ? '' : 'hidden'}`}>
            <form onSubmit={submitPendapatan}>
                <div className="flex w-full gap-4 justify-center p-4">
                    <div className="w-3/4">
                        <FormInput
                            formInputSize="sm"
                            id="file"
                            type="file"
                            name='file'
                            className='w-full'
                            value={data ? data[0] : ''}
                            onChange={(e : any)=>setData(e.target.files[0])}
                        />
                    </div>
                    <div className="w-1/4">
                        <Button 
                            variant="primary" 
                            className="w-full"
                            >
                            {isLoading ? <LoadingIcon icon="circles" className="w-4 h4" color="white"  /> : 'Upload'}
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )

    return {from, isView, setIsView, message}
}