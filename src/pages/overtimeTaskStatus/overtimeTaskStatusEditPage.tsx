import React from 'react'
import { useParams } from 'react-router-dom';
import { 
    deleteData as deleteDataStatus,
    updateData as updateDataStatus
} from '../../features/overtimeTaskStatus/overtimeTaskstatus';
import FormTemplate1 from '../../components/formTemplate/formTemplate1';

const overtimeTaskStatusEditPage = () => {
    const {uuid} = useParams();
        
    const {changeDataSetting, name, setName, code, setCode, is_active, setIsActive, isLoading} = updateDataStatus({uuid})
    
    const {deleteData, isLoading:isLoadingDelete} = deleteDataStatus({uuid})
    

    return (
        <div>
            <FormTemplate1
                name={name}
                setName={setName}
                code={code}
                setCode={setCode}
                isActive={is_active}
                setIsActive={setIsActive}
                linkBack={'/overtimeTaskStatus'}
                submitAction={changeDataSetting}
                loadingSubmit={isLoading}
                deleteAction={deleteData}
                isDeleteActive={true}
                loadingDelete={isLoadingDelete}
            />
        </div>
    )
}

export default overtimeTaskStatusEditPage