import { useParams } from 'react-router-dom';
import FormTemplate1 from '../../components/formTemplate/formTemplate1';
import { createDataGolonganDarah } from '../../features/golonganDarah/golonganDarah';

const createGolonganDarahPage = () => {
    const {uuid} = useParams();

    const {createDataSetting, name, setName, code, setCode, is_active, setIsActive, isLoading} = createDataGolonganDarah({uuid})

    return (
        <div>
            <FormTemplate1
                name={name}
                setName={setName}
                code={code}
                setCode={setCode}
                isActive={is_active}
                setIsActive={setIsActive}
                linkBack={'/golonganDarah'}
                submitAction={createDataSetting}
                loading={isLoading}
            />
        </div>
    )
}

export default createGolonganDarahPage