import FormTemplate5 from '../../components/formTemplate/formTemplate5';
import { useParams} from 'react-router-dom';
import { deleteDataMesinAbsen, updateDataMesinAbsen } from '../../features/mesinAbsen/mesinAbsen';

const editMesinAbsenPage = () => {
    const {uuid} = useParams();
    
    const {changeDataSetting, name, setName, ip_mesin, set_ip_mesin, code, setCode, day, setDay, is_active, setIsActive, isLoading} = updateDataMesinAbsen({uuid})

    const {deleteData, isLoading:isLoadingDelete} = deleteDataMesinAbsen({uuid})

  return (
    <div>
        <FormTemplate5
            name={name}
            setName={setName}
            ipMesin={ip_mesin}
            setIpMesin={set_ip_mesin}
            code={code}
            setCode={setCode}
            day={day}
            setDay={setDay}
            isActive={is_active}
            setIsActive={setIsActive}
            linkBack={'/mesinAbsen'}
            submitAction={changeDataSetting}
            loadingSubmit={isLoading}
            deleteAction={deleteData}
            isDeleteActive={true}
            loadingDelete={isLoadingDelete}
        />
    </div>
  )
}

export default editMesinAbsenPage