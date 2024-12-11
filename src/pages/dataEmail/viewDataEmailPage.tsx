import React from 'react'
import { deleteDataEmails, getDataEmailsById } from '../../features/email/dataEmail';
import { useNavigate, useParams } from 'react-router-dom';
import ViewDataEmail from '../../components/dataEmail/viewDataEmail';
import Button from '../../base-components/Button';

const viewDataEmailPage = () => {
  const {uuid} = useParams();
  const navigate = useNavigate();

  const {dataResult} = getDataEmailsById({uuid});

  const {deleteData, isLoading} = deleteDataEmails({uuid});

  return (
    <div>
      <div className='mt-6 flex justify-end'>
        <Button
            className=''
            variant={`primary`}
            size='sm'
            onClick={()=>navigate('/dataEmail')}
            >
            back
        </Button>
        <Button
            className='ml-4'
            variant={`danger`}
            size='sm'
            onClick={()=>deleteData()}
            >
            delete
        </Button>
        <Button
            className='ml-4'
            variant={`primary`}
            size='sm'
            onClick={()=>navigate(`/dataEmail/edit/${uuid}`)}
            >
            edit
        </Button>
      </div>
      <div className='mt-2'>
        <ViewDataEmail 
          datas={dataResult}
          linkBack={'/dataEmail'}
        />
      </div>
    </div>
  )
}

export default viewDataEmailPage