import FormTemplate8 from '../../components/formTemplate/formTemplate8';
import { useParams} from 'react-router-dom';
import { deleteDataTipeEvent, updateDataTipeEvent } from '../../features/tipeEvent/tipeEvent';

const editTipeEventPage = () => {
    const {uuid} = useParams();
    
    const {changeDataSetting, name, setName, code, setCode, color, setColor, is_active, setIsActive, isLoading} = updateDataTipeEvent({uuid})

    const {deleteData, isLoading:isLoadingDelete} = deleteDataTipeEvent({uuid})

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
            submitAction={changeDataSetting}
            loadingSubmit={isLoading}
            deleteAction={deleteData}
            isDeleteActive={true}
            loadingDelete={isLoadingDelete}
        />
    </div>
  )
}

export default editTipeEventPage