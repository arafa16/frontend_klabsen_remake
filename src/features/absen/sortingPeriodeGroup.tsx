import {useEffect, useState} from 'react'
import { FormLabel, FormSelect } from '../../base-components/Form'
import Button from '../../base-components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getPeriodeKerjas, resetPeriodeKerja } from '../../stores/features/periodeKerjaSlice'
import { getGroups, resetGroup } from '../../stores/features/groupSlice'
import LoadingIcon from '../../base-components/LoadingIcon'
import { getPerhitunganByGroupPeriode, downloadPerhitunganByGroupPeriode, resetPerhitungan } from '../../stores/features/perhitunganSlice';

export const SortingPeriodeGroup = () => {

    const [isView, setIsView] = useState(true);
    const [idGroup, setIdGroup] = useState('');
    const [idPeriode, setIdPeriode] = useState('');

    const [dataPeriode, setDataPeriode] = useState([]);
    const [dataGroup, setDataGroup] = useState([]);
    const [dataCalculation, setDataCalculation] = useState([]);
    const [message, setMessage] = useState<any>(null);

    const dispatch = useDispatch();

    //get periode select
    const {data:periodeKerja, isSuccess:isPeriodeKerjaSuccess, isError:isPeriodeKerjaError, isLoading:isPeriodeKerjaLoading} = useSelector(
        (state : any) => state.periodeKerja
    )

    useEffect(()=>{
        dispatch(getPeriodeKerjas())
    },[])

    useEffect(()=>{
        if(periodeKerja && isPeriodeKerjaSuccess){
            if(!isPeriodeKerjaLoading){
                setDataPeriode(periodeKerja);
                dispatch(resetPeriodeKerja());
            }
        }
    },[periodeKerja, isPeriodeKerjaSuccess, isPeriodeKerjaLoading])

    //get group select
    const {data:group, isSuccess:isGroupSuccess, isLoading:isGroupLoading} = useSelector(
        (state : any) => state.group
    )

    useEffect(()=>{
        dispatch(getGroups())
    },[]);

    useEffect(()=>{
        if(isGroupSuccess && group){
            if(!isGroupLoading){
                setDataGroup(group);
                dispatch(resetGroup());
            }
        }
    },[group, isGroupSuccess, isGroupLoading])

    //get data perhitungan

    const {data:dataPerhitungan, isSuccess:isPerhitunganSuccess, isError:isPerhitunganError, message:messagePerhitungan, isLoading1:isPerhitunganLoading, isLoading2:isExportLoading} = useSelector(
        (state : any) => state.perhitungan
    )

    useEffect(()=>{
        if(dataPerhitungan && isPerhitunganSuccess){
            if(!isPerhitunganLoading){
                setDataCalculation(dataPerhitungan);
                dispatch(resetPerhitungan());
            }
        }
    },[dataPerhitungan, isPerhitunganSuccess])

    const submitGroupPeriode = (e:any)=>{
        e.preventDefault();
        dispatch(getPerhitunganByGroupPeriode({idGroup, idPeriode}))
    }

    const clickClose = () => {
        setIsView(false);
        setDataCalculation([]);
        setIdGroup('');
        setIdPeriode('');
        // setSelectForm('');
    }

    const downloadFile = async() => {
        if(idGroup !== '' && idPeriode !== ''){
            dispatch(downloadPerhitunganByGroupPeriode({
                idGroup:idGroup,
                idPeriode:idPeriode,
                name:'data perhitungan.xlsx'
            }))
        }
        else{
            setMessage('group and periode cannot be null')
        }
    }

    const form = (
        <div className={`box w-full p-4 ${isView ? '' : 'hidden'}`}>
            <form onSubmit={submitGroupPeriode}>
                <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5`}>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="name">Periode</FormLabel>
                        <FormSelect
                            formSelectSize="sm"
                            aria-label=".form-select-sm example"
                            name='isSelect'
                            value={idPeriode}
                            onChange={(e)=>setIdPeriode(e.target.value)}
                            required
                            >
                            <option value=''></option>
                            {dataPeriode.map((data :any, index:any)=>(
                                <option key={index} value={data.uuid}>{data.name}</option>
                            ))}
                        </FormSelect>
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="name">Group</FormLabel>
                        <FormSelect
                            formSelectSize="sm"
                            aria-label=".form-select-sm example"
                            name='isSelect'
                            value={idGroup}
                            onChange={(e)=>setIdGroup(e.target.value)}
                            required
                            >
                            <option value=''></option>
                            {dataGroup.map((data :any, index:any)=>(
                                <option key={index} value={data.uuid}>{data.name}</option>
                            ))}
                        </FormSelect>
                    </div>
                    <div className={`flex items-center justify-center col-span-12 mt-5 intro-y sm:justify-end`}>
                            <Button
                                variant="secondary" 
                                className="w-24"
                                size='sm'
                                type='button'
                                onClick={()=>clickClose()}
                                >
                                Close
                            </Button>
                            <Button
                                variant="primary" 
                                className={`w-36 ml-2`}
                                size='sm'
                                type='submit'
                                >
                                {isPerhitunganLoading ?   
                                    <LoadingIcon icon="tail-spin" color='white' className="w-4 h-4" /> 
                                    : 
                                'View Calculate'
                                }
                            </Button>
                            <Button
                                variant="primary" 
                                className={`w-36 ml-2`}
                                size='sm'
                                type='button'
                                onClick={()=>downloadFile()}
                                >
                                {isExportLoading ?   
                                    <LoadingIcon icon="tail-spin" color='white' className="w-4 h-4" /> 
                                    :
                                    'Download Perhitungan'
                                    }
                            </Button>
                            
                    </div>
                </div>
            </form>
        </div>
    )

    return {form, setIsView, isView, dataCalculation, message, setMessage}
}