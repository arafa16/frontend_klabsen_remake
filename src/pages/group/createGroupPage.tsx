import FormTemplate1 from '../../components/formTemplate/formTemplate1';
import { createDataGroup } from '../../features/group/group';

const createGroupPage = () => {

    const {createDataSetting, name, setName, code, setCode, is_active, setIsActive, isLoading} = createDataGroup()

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

export default createGroupPage