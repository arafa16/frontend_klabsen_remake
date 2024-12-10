import FormTemplate1 from '../../components/formTemplate/formTemplate1';
import { useParams} from 'react-router-dom';
import { deleteDataTipeNotification, updateDataTipeNotification } from '../../features/tipeNotification/tipeNotification';

const editTipeNotificationPage = () => {
    const {uuid} = useParams();
    
    const {changeDataSetting, name, setName, code, setCode, is_active, setIsActive, isLoading} = updateDataTipeNotification({uuid})

    const {deleteData, isLoading:isLoadingDelete} = deleteDataTipeNotification({uuid})

  return (
    <div>
        <FormTemplate1
            name={name}
            setName={setName}
            code={code}
            setCode={setCode}
            isActive={is_active}
            setIsActive={setIsActive}
            linkBack={'/tipeNotification'}
            submitAction={changeDataSetting}
            loadingSubmit={isLoading}
            deleteAction={deleteData}
            isDeleteActive={true}
            loadingDelete={isLoadingDelete}
        />
    </div>
  )
}

export default editTipeNotificationPage