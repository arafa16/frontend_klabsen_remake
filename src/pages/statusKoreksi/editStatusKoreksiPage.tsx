import FormTemplate1 from '../../components/formTemplate/formTemplate1';
import { useParams} from 'react-router-dom';
import { deleteDataStatusKoreksi, updateDataStatusKoreksi } from '../../features/statusKoreksi/statusKoreksi';

const editStatusKoreksiPage = () => {
    const {uuid} = useParams();
    
    const {changeDataSetting, name, setName, code, setCode, is_active, setIsActive, isLoading} = updateDataStatusKoreksi({uuid})

    const {deleteData, isLoading:isLoadingDelete} = deleteDataStatusKoreksi({uuid})

  return (
    <div>
        <FormTemplate1
            name={name}
            setName={setName}
            code={code}
            setCode={setCode}
            isActive={is_active}
            setIsActive={setIsActive}
            linkBack={'/statusKoreksi'}
            submitAction={changeDataSetting}
            loadingSubmit={isLoading}
            deleteAction={deleteData}
            isDeleteActive={true}
            loadingDelete={isLoadingDelete}
        />
    </div>
  )
}

export default editStatusKoreksiPage