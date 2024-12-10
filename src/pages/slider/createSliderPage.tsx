import React from 'react'
import FormTemplate7 from '../../components/formTemplate/formTemplate7'
import { createDataSlider } from '../../features/slider/slider';

const createSliderPage = () => {

    const {
        isLoading, 
        file, setFile, 
        urlFile, setUrlFile,
        name, setName, 
        sequence, setSequence, 
        changeFile, uploadFile } = createDataSlider();
    return (
        <div>
            <div>
                <FormTemplate7
                    name={name}
                    setName={setName}
                    sequence={sequence}
                    setSequence={setSequence}
                    changeFile={changeFile}
                    linkBack={'/slider'}
                    submitAction={uploadFile}
                    loading={isLoading}
                />
            </div>
            <div className='mt-4 w-full mr-0'>
                <img 
                    className='w-2/3'
                    src={urlFile}
                />
            </div>
        </div>
    )
}

export default createSliderPage