import FormTemplate1 from '../../components/formTemplate/formTemplate1';
import { useParams} from 'react-router-dom';
import { deleteDataStatusEmail, updateDataStatusEmail } from '../../features/statusEmail/statusEmail';

const editStatusEmailPage = () => {
    const {uuid} = useParams();
    
    const {changeDataSetting, name, setName, code, setCode, is_active, setIsActive, isLoading} = updateDataStatusEmail({uuid})

    const {deleteData, isLoading:isLoadingDelete} = deleteDataStatusEmail({uuid})

  return (
    <div>
        <FormTemplate1
            name={name}
            setName={setName}
            code={code}
            setCode={setCode}
            isActive={is_active}
            setIsActive={setIsActive}
            linkBack={'/statusEmail'}
            submitAction={changeDataSetting}
            loadingSubmit={isLoading}
            deleteAction={deleteData}
            isDeleteActive={true}
            loadingDelete={isLoadingDelete}
        />
    </div>
  )
}

export default editStatusEmailPage