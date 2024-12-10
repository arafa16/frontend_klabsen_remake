import { useParams } from 'react-router-dom';
import FormTemplate1 from '../../components/formTemplate/formTemplate1';
import { createDataPenempatan } from '../../features/penempatan/penempatan';

const createPenempatanPage = () => {
    const {uuid} = useParams();

    const {createDataSetting, name, setName, code, setCode, is_active, setIsActive, isLoading} = createDataPenempatan({uuid})

    return (
        <div>
            <FormTemplate1
                name={name}
                setName={setName}
                code={code}
                setCode={setCode}
                isActive={is_active}
                setIsActive={setIsActive}
                linkBack={'/penempatan'}
                submitAction={createDataSetting}
                loading={isLoading}
            />
        </div>
    )
}

export default createPenempatanPage