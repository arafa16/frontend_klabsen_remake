import FormTemplate1 from '../../components/formTemplate/formTemplate1';
import { useParams} from 'react-router-dom';
import { deleteDataStatus, updateDataStatus } from '../../features/status/status';

const editStatusPage = () => {
    const {uuid} = useParams();
    
    const {changeDataSetting, name, setName, code, setCode, is_active, setIsActive, isLoading} = updateDataStatus({uuid})

    const {deleteData, isLoading:isLoadingDelete} = deleteDataStatus({uuid})

  return (
    <div>
        <FormTemplate1
            name={name}
            setName={setName}
            code={code}
            setCode={setCode}
            isActive={is_active}
            setIsActive={setIsActive}
            linkBack={'/status'}
            submitAction={changeDataSetting}
            loadingSubmit={isLoading}
            deleteAction={deleteData}
            isDeleteActive={true}
            loadingDelete={isLoadingDelete}
        />
    </div>
  )
}

export default editStatusPage