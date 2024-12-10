import { useParams } from 'react-router-dom';
import FormTemplate2 from '../../components/formTemplate/formTemplate2';
import { createDataJamOperasional } from '../../features/jamOperasional/jamOperasional';

const createJamOperasionalPage = () => {
    const {uuid} = useParams();

    const {
        createDataSetting, 
        name, setName,
        jam_masuk, set_jam_masuk, 
        jam_pulang, set_jam_pulang, 
        keterangan, set_keterangan, 
        jam_operasional_group_id, set_jam_operasional_group_id,
        jam_operasional_group_select, set_jam_operasional_group_select,
        code, set_code, 
        is_active, set_is_active, 
        isLoading
    } = createDataJamOperasional()

    return (
        <div>
            <FormTemplate2
                name={name}
                setName={setName}
                jamMasuk={jam_masuk}
                setJamMasuk={set_jam_masuk}
                jamPulang={jam_pulang}
                setJamPulang={set_jam_pulang}
                keterangan={keterangan}
                setKeterangan={set_keterangan}
                jamOperasionalGroupId={jam_operasional_group_id}
                setJamOperasionalGroupId={set_jam_operasional_group_id}
                jamOperasionalGroupSelect={jam_operasional_group_select}
                code={code}
                setCode={set_code}
                isActive={is_active}
                setIsActive={set_is_active}
                linkBack={'/jamOperasional'}
                submitAction={createDataSetting}
                loading={isLoading}
            />
        </div>
    )
}

export default createJamOperasionalPage