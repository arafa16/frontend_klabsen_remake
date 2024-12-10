import { useParams } from 'react-router-dom';
import FormTemplate1 from '../../components/formTemplate/formTemplate1';
import { createDataGroup } from '../../features/group/group';
import { createDataPelanggaran } from '../../features/pelanggaran/pelanggaran';

const createPelanggaranPage = () => {

    const {createDataSetting, name, setName, code, setCode, is_active, setIsActive, isLoading} = createDataPelanggaran()

    return (
        <div>
            <FormTemplate1
                name={name}
                setName={setName}
                code={code}
                setCode={setCode}
                isActive={is_active}
                setIsActive={setIsActive}
                linkBack={'/pelanggaran'}
                submitAction={createDataSetting}
                loading={isLoading}
            />
        </div>
    )
}

export default createPelanggaranPage