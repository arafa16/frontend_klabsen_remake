import { useParams } from 'react-router-dom';
import FormTemplate1 from '../../components/formTemplate/formTemplate1';
import { createDataStatusKoreksi } from '../../features/statusKoreksi/statusKoreksi';

const createStatusKoreksiPage = () => {

    const {createDataSetting, name, setName, code, setCode, is_active, setIsActive, isLoading} = createDataStatusKoreksi()

    return (
        <div>
            <FormTemplate1
                name={name}
                setName={setName}
                code={code}
                setCode={setCode}
                isActive={is_active}
                setIsActive={setIsActive}
                linkBack={'/group'}
                submitAction={createDataSetting}
                loading={isLoading}
            />
        </div>
    )
}

export default createStatusKoreksiPage