import FormTemplate1 from '../../components/formTemplate/formTemplate1';
import { useParams} from 'react-router-dom';
import { 
  deleteDataStatusPerkawinan, 
  updateDataStatusPerkawinan 
} from '../../features/statusPerkawinan/statusPerkawinan';

const editStatusPerkawinanPage = () => {
    const {uuid} = useParams();
    
    const {changeDataSetting, name, setName, code, setCode, is_active, setIsActive, isLoading} = updateDataStatusPerkawinan({uuid})

    const {deleteData, isLoading:isLoadingDelete} = deleteDataStatusPerkawinan({uuid})

  return (
    <div>
        <FormTemplate1
            name={name}
            setName={setName}
            code={code}
            setCode={setCode}
            isActive={is_active}
            setIsActive={setIsActive}
            linkBack={'/statusPerkawinan'}
            submitAction={changeDataSetting}
            loadingSubmit={isLoading}
            deleteAction={deleteData}
            isDeleteActive={true}
            loadingDelete={isLoadingDelete}
        />
    </div>
  )
}

export default editStatusPerkawinanPage