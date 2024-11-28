import {useEffect, useState, useRef} from 'react'
import { FormInput} from '../../base-components/Form'
import Button from '../../base-components/Button'
import { importUsers, getUsers, resetUsers } from '../../stores/features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import LoadingIcon from '../../base-components/LoadingIcon'

export const FormImportUser = (datas:any) => {
    // const {showForm, setShowForm, reloadData} = props;
    const [data, setData] = useState<any>([]);
    const [isView, setIsView] = useState(false);
    const [message, setMessage] = useState<any>(null)

    const dispatch = useDispatch();

    const {message:messageUser, isLoading, isSuccess} = useSelector(
        (state : any) => state.user
    )

    useEffect(()=>{
        if(isSuccess && messageUser){
            if(!isLoading){
                setMessage(messageUser);
                datas.reloadDataUserTable();
                datas.reloadDataUser();
                dispatch(getUsers());
                setIsView(false);
                handleReset();
                setData([]);
            }
        }
    },[messageUser, isSuccess, isLoading])

    // Ref object to reference the input element
    const inputFile = useRef<any>(null);
 
    // Function to reset the input element
    const handleReset = () => {
        if (inputFile.current) {
            inputFile.current.value = "";
            inputFile.current.type = "text";
            inputFile.current.type = "file";
        }
    };

    const submitUser = async(e : any) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', data);
        dispatch(importUsers({formData}))
        
    }

    const form = (
        <div className={`box ${!isView ? 'hidden' : ''}`}>
            <form onSubmit={submitUser}>
                <div className="flex w-full gap-4 justify-center p-4">
                    <div className="w-3/4">
                        <FormInput
                            formInputSize="sm"
                            id="file"
                            type="file"
                            name='file'
                            className='w-full'
                            value={data && data[0]}
                            ref={inputFile}
                            onChange={(e : any)=>setData(e.target.files[0])}
                        />
                    </div>
                    <div className="w-1/4">
                        <Button 
                            variant="primary" 
                            className="w-full"
                            >
                                {isLoading ?   
                                    <LoadingIcon icon="tail-spin" color='white' className="w-4 h-4" /> 
                                    : 
                                'Upload'
                                }
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )

    return {form, isView, setIsView, message}
}