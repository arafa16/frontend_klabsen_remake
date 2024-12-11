import React from 'react'
import { 
  updateDataEmails,
  deleteDataEmails
} from '../../features/email/dataEmail';
import { useNavigate, useParams } from 'react-router-dom';
import FormTemplateDataEmail from '../../components/formTemplate/formTemplateDataEmail';
import { getDataStatusEmail } from '../../features/statusEmail/statusEmail';
const editDataEmailPage = () => {
  const {uuid} = useParams();
  const {
    changeDataSetting, 
        name, set_name, 
        from, set_from,
        to, set_to,
        subject, set_subject,
        text_email, set_text_email,
        status_email_id, set_status_email_id,
        code, set_code, 
        is_active, setIsActive, 
        isLoading
  } = updateDataEmails({uuid});

  const {dataResult:statusEmailSelect} = getDataStatusEmail();

  return (
    <div>
        <FormTemplateDataEmail 
          name={name}
          set_name={set_name}
          from={from}
          set_from={set_from}
          to={to}
          set_to={set_to}
          subject={subject}
          set_subject={set_subject}
          text_email={text_email}
          set_text_email={set_text_email}
          status_email_id={status_email_id}
          set_status_email_id={set_status_email_id}
          code={code}
          set_code={set_code}
          is_active={is_active}
          setIsActive={setIsActive}
          statusEmailSelect={statusEmailSelect}
          linkBack={'/dataEmail'}
          submitAction={changeDataSetting}
          loadingSubmit={isLoading}
        />
        
    </div>
  )
}

export default editDataEmailPage