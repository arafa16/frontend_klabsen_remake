import FormTemplate4 from '../../components/formTemplate/formTemplate4';
import { useParams} from 'react-router-dom';
import { deleteDataJamOperasionalGroup, updateDataJamOperasionalGroup } from '../../features/jamOperasionalGroup/jamOperasionalGroup';

const editJamOperasionalGroupPage = () => {
    const {uuid} = useParams();
    
    const {changeDataSetting, name, setName, keterangan, setKeterangan, code, setCode, is_active, setIsActive, isLoading} = updateDataJamOperasionalGroup({uuid})

    const {deleteData, isLoading:isLoadingDelete} = deleteDataJamOperasionalGroup({uuid})

  return (
    <div>
        <FormTemplate4
            name={name}
            setName={setName}
            keterangan={keterangan}
            setKeterangan={setKeterangan}
            code={code}
            setCode={setCode}
            isActive={is_active}
            setIsActive={setIsActive}
            linkBack={'/jamOperasionalGroup'}
            submitAction={changeDataSetting}
            loadingSubmit={isLoading}
            deleteAction={deleteData}
            isDeleteActive={true}
            loadingDelete={isLoadingDelete}
        />
    </div>
  )
}

export default editJamOperasionalGroupPage