import FormTemplate1 from '../../components/formTemplate/formTemplate1';
import { createDataStatusEmail } from '../../features/statusEmail/statusEmail';

const createStatusEmailPage = () => {

    const {createDataSetting, name, setName, code, setCode, is_active, setIsActive, isLoading} = createDataStatusEmail()

    return (
        <div>
            <FormTemplate1
                name={name}
                setName={setName}
                code={code}
                setCode={setCode}
                isActive={is_active}
                setIsActive={setIsActive}
                linkBack={'/statusEmail'}
                submitAction={createDataSetting}
                loading={isLoading}
            />
        </div>
    )
}

export default createStatusEmailPage