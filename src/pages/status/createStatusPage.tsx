import { useParams } from 'react-router-dom';
import FormTemplate1 from '../../components/formTemplate/formTemplate1';
import { createDataStatus } from '../../features/status/status';

const createStatusPage = () => {
    
    const {createDataSetting, name, setName, code, setCode, is_active, setIsActive, isLoading} = createDataStatus()

    return (
        <div>
            <FormTemplate1
                name={name}
                setName={setName}
                code={code}
                setCode={setCode}
                isActive={is_active}
                setIsActive={setIsActive}
                linkBack={'/status'}
                submitAction={createDataSetting}
                loading={isLoading}
            />
        </div>
    )
}

export default createStatusPage