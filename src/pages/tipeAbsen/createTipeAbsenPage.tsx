import FormTemplate6 from '../../components/formTemplate/formTemplate6';
import { createDataTipeAbsen } from '../../features/tipeAbsen/tipeAbsen';

const createTipeAbsenPage = () => {

    const {createDataSetting, name, setName, is_select, set_is_select, code, setCode, is_active, set_is_active, isLoading} = createDataTipeAbsen()

    return (
        <div>
            <FormTemplate6
                name={name}
                setName={setName}
                code={code}
                setCode={setCode}
                isSelect={is_select}
                setIsSelect={set_is_select}
                isActive={is_active}
                setIsActive={set_is_active}
                linkBack={'/tipeAbsen'}
                submitAction={createDataSetting}
                loading={isLoading}
            />
        </div>
    )
}

export default createTipeAbsenPage