import { useParams } from 'react-router-dom';
import FormTemplate8 from '../../components/formTemplate/formTemplate8';
import { createDataTipeEvent } from '../../features/tipeEvent/tipeEvent';

const createTipeEventPage = () => {
    const {uuid} = useParams();

    const {createDataSetting, name, setName, code, setCode, color, setColor, is_active, setIsActive, isLoading} = createDataTipeEvent()

    return (
        <div>
            <FormTemplate8
                name={name}
                setName={setName}
                code={code}
                setCode={setCode}
                color={color}
                setColor={setColor}
                isActive={is_active}
                setIsActive={setIsActive}
                linkBack={'/tipeEvent'}
                submitAction={createDataSetting}
                loading={isLoading}
            />
        </div>
    )
}

export default createTipeEventPage