import { useParams } from 'react-router-dom';
import FormTemplate1 from '../../components/formTemplate/formTemplate1';
import { createDataContact } from '../../features/contact/contact';

const createContactEmergancyPage = () => {
    const {uuid} = useParams();

    const {createDataSetting, name, setName, code, setCode, is_active, setIsActive, isLoading} = createDataContact({uuid})

    return (
        <div>
            <FormTemplate1
                name={name}
                setName={setName}
                code={code}
                setCode={setCode}
                isActive={is_active}
                setIsActive={setIsActive}
                linkBack={'/contact'}
                submitAction={createDataSetting}
                loading={isLoading}
            />
        </div>
    )
}

export default createContactEmergancyPage