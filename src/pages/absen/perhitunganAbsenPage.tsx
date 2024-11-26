import { useEffect, useState } from 'react'
import { FormSelect } from '../../base-components/Form'
import { SortingPeriodeGroup } from '../../features/absen/sortingPeriodeGroup';
import { calculationAbsenTable } from '../../features/absen/calculationAbsenTable';
import { getMessageShow } from "../../features/messageShow";

const perhitunganAbsenPage = () => {
    const [message, setMessage] = useState<any>(null)

    const {
        form: formsortingPeriodeGroup, 
        setIsView:viewPeriodeGroup, 
        isView,
        dataCalculation,
        message:messageSorting,
        setMessage:setMessageSorting
    } = SortingPeriodeGroup()

    useEffect(()=>{
        if(messageSorting!==null){
            setMessage({msg:messageSorting})
            setMessageSorting(null)
        }
    },[messageSorting])

    const [selectForm, setSelectForm] = useState('');

    const messageShow = getMessageShow(message);

    const clickPeriodeGroup = () => {
        if(selectForm === 'periode&group'){
            viewPeriodeGroup(true);
        }
        if(selectForm === ''){
            viewPeriodeGroup(false);
        }
    }

    useEffect(()=>{
        clickPeriodeGroup()
    },[selectForm])

    const {table:tableCalculation} = calculationAbsenTable({datas:dataCalculation});

    return (
        <div>
            {messageShow}
            <div className='w-full grid grid-cols-1 md:grid-cols-2 mt-6'>
                <div className='flex justify-start'>
                    <div>
                        <FormSelect
                            className="w-40 mt-3 md:ml-auto md:mt-0 dark:bg-darkmode-600 dark:border-darkmode-400 text-xs"
                            aria-label="General report filter"
                            value={selectForm}
                            onChange={(e:any)=>setSelectForm(e.target.value)}
                            >
                            <option></option>
                            <option value={'periode&group'}>Periode & Group</option>
                        </FormSelect>
                    </div>
                </div>
                {formsortingPeriodeGroup}
            </div>
            <div className={`${dataCalculation.length === 0 ? 'hidden' : ''}`}>
                {tableCalculation}
            </div>
        </div>
    )
}

export default perhitunganAbsenPage