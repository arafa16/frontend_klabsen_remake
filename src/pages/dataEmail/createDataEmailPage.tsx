import React from 'react'
import { createDataEmails } from '../../features/email/dataEmail'
import { getDataStatusEmail } from '../../features/statusEmail/statusEmail';
import FormTemplateDataEmail from '../../components/formTemplate/formTemplateDataEmail';

const createDataEmailPage = () => {

    const {
        createData, 
        name, set_name, 
        from, set_from,
        to, set_to,
        subject, set_subject,
        text_email, set_text_email,
        status_email_id, set_status_email_id,
        code, set_code, 
        is_active, setIsActive, 
        isLoading
    } = createDataEmails();

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
          submitAction={createData}
          loadingSubmit={isLoading}
        />
    </div>
  )
}

export default createDataEmailPage