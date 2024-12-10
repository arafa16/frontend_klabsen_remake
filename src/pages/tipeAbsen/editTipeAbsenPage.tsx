import FormTemplate6 from '../../components/formTemplate/formTemplate6';
import { useParams} from 'react-router-dom';
import { deleteDataTipeAbsen, updateDataTipeAbsen } from '../../features/tipeAbsen/tipeAbsen';

const editTipeAbsenPage = () => {
    const {uuid} = useParams();
    
    const {changeDataSetting, name, setName, is_select, set_is_select, code, setCode, is_active, set_is_active, isLoading} = updateDataTipeAbsen({uuid})

    const {deleteData, isLoading:isLoadingDelete} = deleteDataTipeAbsen({uuid})

  return (
    <div>
        <FormTemplate6
            name={name}
            setName={setName}
            code={code}
            setCode={setCode}
            isSelect={is_select}
            setIsSelect={set_is_select}
            isActive={is_active}
            setIsActive={set_is_active}
            linkBack={'/tipeAbsen'}
            submitAction={changeDataSetting}
            loadingSubmit={isLoading}
            deleteAction={deleteData}
            isDeleteActive={true}
            loadingDelete={isLoadingDelete}
        />
    </div>
  )
}

export default editTipeAbsenPage