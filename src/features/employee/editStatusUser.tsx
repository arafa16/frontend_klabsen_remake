import React, { useState, useEffect } from 'react'
import Lucide from '../../base-components/Lucide';
import { FormSelect } from '../../base-components/Form';
import Button from '../../base-components/Button';
import LoadingIcon from '../../base-components/LoadingIcon';
import { useDispatch, useSelector } from 'react-redux';
import { resetUsers, UpdateStatusUser } from '../../stores/features/userSlice';
import { getStatus, resetStatus } from '../../stores/features/statusSlice';

export const editStatusUser = (props : any) => {
    const {
        title,
        id,
        user,
        setIsViewStatusUser
    } = props;

    const dispatch = useDispatch();
    
    const [isView, setIsView] = useState(false);
    const [isActive, setIsActive] = useState<any>('');
    const [statusId, setStatusId] = useState<any>('');

    useEffect(()=>{
        setIsActive(user && user.isActive === true ? '1' : '0');
        setStatusId(user && user.statusId);
    },[user]);

    //data select
    const [dataStatus, setDataStatus] = useState([]);

    const {data:dataStatusResult, message:messageStatus, isLoading:isLoadingStatus, isSuccess:isSuccessStatus} = useSelector(
        (state : any) => state.status
    )

    useEffect(()=>{
        dispatch(getStatus());
    },[])

    useEffect(()=>{
        if(dataStatusResult && isSuccessStatus){
            if(!isLoadingStatus){
                setDataStatus(dataStatusResult);
                dispatch(resetStatus());
            }
        }
    },[dataStatusResult, isSuccessStatus, isLoadingStatus])

    const {isError:isUserError, isSuccess:isUserSuccess, isLoading:isUserLoading, message:userMessage} = useSelector(
        (state : any) => state.user
    )

    useEffect(()=>{
        if(isUserSuccess && userMessage){
            if(!isUserLoading){
                cancelForm();
                dispatch(resetUsers());
            }
        }
    },[isUserSuccess, isUserLoading, userMessage])

    const updateStatus = (e:any) => {
        e.preventDefault();
        dispatch(UpdateStatusUser({
            id, statusId, isActive
        }));
    }

    const cancelForm = () => {
        setIsViewStatusUser(true);
        setIsView(false);
        setIsActive(user && user.isActive === true ? '1' : '0');
        setStatusId(user && user.statusId);
    }

    const form = (
        <div className={`p-5 box intro-y ${!isView ? 'hidden' : ''}`}>
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
                <div className="text-base font-medium truncate">{title}</div>
                <Lucide 
                    icon="Edit" 
                    className={`w-4 h-4 ml-auto text-blue-500 cursor-pointer hover:text-yellow-500 ${isView ? 'hidden' : ''}`} 
                    onClick={()=>cancelForm()}
                    />
            </div>
            <form onSubmit={updateStatus}>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 gap-x-4'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Status
                        </div>
                        <div className="mt-1  text-slate-500">
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='statusPerkawinanId'
                                value={statusId}
                                onChange={(e)=>setStatusId(e.target.value)}
                                >
                                <option></option>
                                {dataStatus.map((data :any, index : any)=>(
                                    <option key={index} value={data.id}>{data.name}</option>
                                ))}
                            </FormSelect>
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Is Active 
                        </div>
                        <div className="mt-1  text-slate-500">
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='statusPerkawinanId'
                                value={isActive}
                                onChange={(e)=>setIsActive(e.target.value)}
                                >
                                <option></option>
                                <option value={0}>no</option>
                                <option value={1}>yes</option>
                            </FormSelect>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`flex items-center justify-center col-span-12 mt-10 mx-10 intro-y sm:justify-end`}>
                        <Button
                            variant="secondary" 
                            className="w-24"
                            size='sm'
                            type='button'
                            onClick={()=>cancelForm()}
                            >
                            Cancel
                        </Button>
                        <Button
                            variant="primary" 
                            className={`w-36 ml-2`}
                            size='sm'
                            type='submit'
                            >
                                {isUserLoading ? 
                                <LoadingIcon icon="tail-spin" color='blue' className="w-4 h-4" /> 
                                :
                                    "Save"
                                }
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )

    return {
        form,
        isUserLoading, isUserSuccess, userMessage,
        isView, setIsView
    }
}