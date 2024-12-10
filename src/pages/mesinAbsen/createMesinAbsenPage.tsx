import FormTemplate5 from '../../components/formTemplate/formTemplate5';
import { createDataMesinAbsen } from '../../features/mesinAbsen/mesinAbsen';

const createMesinAbsenPage = () => {

    const {createDataSetting, name, setName, ip_mesin, set_ip_mesin, code, setCode, day, setDay, is_active, setIsActive, isLoading} = createDataMesinAbsen()

    return (
        <div>
            <FormTemplate5
                name={name}
                setName={setName}
                ipMesin={ip_mesin}
                setIpMesin={set_ip_mesin}
                code={code}
                setCode={setCode}
                day={day}
                setDay={setDay}
                isActive={is_active}
                setIsActive={setIsActive}
                linkBack={'/mesinAbsen'}
                submitAction={createDataSetting}
                loading={isLoading}
            />
        </div>
    )
}

export default createMesinAbsenPage