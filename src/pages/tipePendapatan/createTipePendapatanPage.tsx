import { useParams } from 'react-router-dom';
import FormTemplate1 from '../../components/formTemplate/formTemplate1';
import { createDataTipePendapatan } from '../../features/tipePendapatan/tipePendapatan';

const createTipePendapatanPage = () => {
    const {uuid} = useParams();

    const {createDataSetting, name, setName, code, setCode, is_active, setIsActive, isLoading} = createDataTipePendapatan()

    return (
        <div>
            <FormTemplate1
                name={name}
                setName={setName}
                code={code}
                setCode={setCode}
                isActive={is_active}
                setIsActive={setIsActive}
                linkBack={'/tipePendapatan'}
                submitAction={createDataSetting}
                loading={isLoading}
            />
        </div>
    )
}

export default createTipePendapatanPage