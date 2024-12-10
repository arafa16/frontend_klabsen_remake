import React from 'react'
import { deleteDataSliderById, getDataSliderById } from '../../features/slider/slider'
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../base-components/Button';

const viewSliderPage = () => {
    const {uuid} = useParams();

    const navigate = useNavigate();

    const {dataResult} = getDataSliderById({uuid});
    const {message, deleteSlider} = deleteDataSliderById()

    return (
        <div className='pt-4'>
            <div className='w-full flex justify-end gap-x-2'>
                <Button
                    variant="secondary" 
                    className="w-24"
                    size='sm'
                    type='button'
                    onClick={()=>navigate(-1)}
                    >
                    Cancel
                </Button>
                <Button
                    variant="danger" 
                    className="w-24"
                    size='sm'
                    type='button'
                    onClick={()=>deleteSlider(uuid)}
                    >
                    Delete
                </Button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-10 box mt-4 p-8 text-xs'>
                <div>
                    <div className="font-medium whitespace-nowrap">
                        Name
                    </div>
                    <div className="mt-1 text-xs text-slate-500">
                        {dataResult && dataResult.name}
                    </div>
                </div>
                <div>
                    <div className="font-medium whitespace-nowrap">
                        File Name
                    </div>
                    <div className="mt-1  text-slate-500">
                        {dataResult && dataResult.file_name}
                    </div>
                </div>
                <div>
                    <div className="font-medium whitespace-nowrap">
                        Sequence
                    </div>
                    <div className="mt-1  text-slate-500">
                        {dataResult && dataResult.sequence}
                    </div>
                </div>
                <div>
                    <div className="font-medium whitespace-nowrap">
                        Status
                    </div>
                    <div className="mt-1  text-slate-500">
                        {dataResult && dataResult.is_active ? 'active' : 'non active'}
                    </div>
                </div>
            </div>
            <div className='mt-4 w-full mr-0'>
                <img 
                    className='w-2/3'
                    src={dataResult && import.meta.env.VITE_REACT_APP_API_URL+dataResult.file_link}
                />
            </div>
        </div>
    )
}

export default viewSliderPage