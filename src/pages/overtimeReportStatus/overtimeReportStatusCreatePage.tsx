import React from 'react'
import { 
  createData as createDataStatus
} from '../../features/overtimeReportStatus/overtimeReportStatus';
import FormTemplate1 from '../../components/formTemplate/formTemplate1';

const overtimeReportStatusCreatePage = () => {

  const {createDataSetting, name, setName, code, setCode, is_active, setIsActive, isLoading} = createDataStatus()
  
  return (
    <div>
      <FormTemplate1
          name={name}
          setName={setName}
          code={code}
          setCode={setCode}
          isActive={is_active}
          setIsActive={setIsActive}
          linkBack={'/statusInOut'}
          submitAction={createDataSetting}
          loading={isLoading}
      />
    </div>
  )
}

export default overtimeReportStatusCreatePage