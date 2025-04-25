import React from 'react'
import ViewOvertime from '../../components/overtime/viewOvertime'
import { getOvertimeTaskById, updateDataOvertimeTaskStatus } from '../../features/overtime/overtimeTask';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../base-components/Button';
import StageOvertime from '../../components/overtime/stageOvertime';
import { getDatas } from '../../features/overtimeTaskStatus/overtimeTaskstatus';
import { getMeAuth } from '../../features/auth/meAuth';
import HistoryView from '../../components/history/historyView';

const overtimeUserByIdPage = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const {dataResult:dataOvertime} = getOvertimeTaskById({id})
  
  const {dataResult:dataTaskStatus} = getDatas();

  const {data:user, loading, message} = getMeAuth();

  console.log(user.uuid, 'me')

  const clickBack = () => {
    navigate(-1);
  }

  const {changeDataStatus, isLoading} = updateDataOvertimeTaskStatus()

  const clickButton = (datas:any) => {
    changeDataStatus({uuid:datas.uuid, overtimeTaskStatusId:datas.overtimeTaskStatusId})
  }

  const linkQRCode  = `${import.meta.env.VITE_REACT_APP_API_URL}/overtime/data/${id}`

  return (
    <div>
      <div className='flex justify-between gap-4 mt-8 '>
        <div className='flex justify-start gap-4 mt-8 w-full'>
          <div>
            <Button
                size='sm'
                variant="primary"
                onClick={()=>clickBack()}
                >
                Back
            </Button>
          </div>
          <div className={`${dataOvertime && dataOvertime.overtime_task_status && dataOvertime.overtime_task_status.code !== '5' && dataOvertime.overtime_task_status.code !== '1' ? '' : 'hidden' }`}>
              <Button
                  size='sm'
                  variant="primary"
                  // className={`${isOpen ? '' : 'hidden'}`}
                  onClick={()=>changeDataStatus({uuid:id, overtimeTaskStatusCode:5})}
                  >
                  Cancel
              </Button>
          </div>
          <div className={`${dataOvertime && dataOvertime.overtime_task_status && dataOvertime.overtime_task_status.code !== '5' && dataOvertime.overtime_task_status.code === '1' ? '' : 'hidden' }`}>
              <Button
                  size='sm'
                  variant="primary"
                  // className={`${isOpen ? '' : 'hidden'}`}
                  onClick={()=>changeDataStatus({uuid:id, overtimeTaskStatusCode:2})}
                  >
                  Request Validation
              </Button>
          </div>
        </div>
        <div className='flex justify-end gap-4 mt-8 w-full'>
          <div className={`${dataOvertime && dataOvertime.overtime_task_status && dataOvertime.overtime_task_status.code === '5' ? '' : 'hidden' }`}>
              <Button
                  size='sm'
                  variant="primary"
                  // className={`${isOpen ? '' : 'hidden'}`}
                  onClick={()=>changeDataStatus({uuid:id, overtimeTaskStatusCode:1})}
                  >
                  set to draft
              </Button>
          </div>
          <div className={`
            flex justify-end gap-4 w-full 
            ${dataOvertime && dataOvertime.overtime_task_status 
            && dataOvertime.overtime_task_status.code !== '5' 
            && dataOvertime.overtime_task_status.code !== '1' 
            && dataOvertime.overtime_task_status.code === '2'
            ? '' : 'hidden' }`}>
              <Button
                  size='sm'
                  variant="primary"
                  // className={`${isOpen ? '' : 'hidden'}`}
                  onClick={()=>changeDataStatus({uuid:id, overtimeTaskStatusCode:3})}
                  >
                  Approve (Pemberi Tugas)
              </Button>
              <Button
                  size='sm'
                  variant="danger"
                  // className={`${isOpen ? '' : 'hidden'}`}
                  onClick={()=>changeDataStatus({uuid:id, overtimeTaskStatusCode:5})}
                  >
                  Not Approve (Pemberi Tugas)
              </Button>
          </div>
          <div className={`
            flex justify-end gap-4 w-full 
            ${dataOvertime && dataOvertime.overtime_task_status 
            && dataOvertime.overtime_task_status.code !== '5' 
            && dataOvertime.overtime_task_status.code !== '1' 
            && dataOvertime.overtime_task_status.code === '3'
            ? '' : 'hidden' }`}>
              <Button
                  size='sm'
                  variant="primary"
                  // className={`${isOpen ? '' : 'hidden'}`}
                  onClick={()=>changeDataStatus({uuid:id, overtimeTaskStatusCode:4})}
                  >
                  Approve (Atasan)
              </Button>
              <Button
                  size='sm'
                  variant="danger"
                  // className={`${isOpen ? '' : 'hidden'}`}
                  onClick={()=>changeDataStatus({uuid:id, overtimeTaskStatusCode:5})}
                  >
                  Not Approve (Atasan)
              </Button>
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <StageOvertime 
          datas={dataTaskStatus}
          status={dataOvertime.overtime_task_status}
          link={linkQRCode}
        />
      </div>
      <div className='mt-4'>
        <ViewOvertime 
          datas={dataOvertime}
          clickBack={clickBack}
          isOpen={false}
        />
      </div>
      <div className='mt-4'>
        <HistoryView 
          datas={dataOvertime}
        />
      </div>
    </div>
  )
}

export default overtimeUserByIdPage