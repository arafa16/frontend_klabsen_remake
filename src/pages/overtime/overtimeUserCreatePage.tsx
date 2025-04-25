import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom';
import FormOvertime from '../../components/overtime/formOvertime'
import { getMeAuth } from '../../features/auth/meAuth';
import dayjs from 'dayjs';
import { getDatas } from '../../features/overtimeTaskStatus/overtimeTaskstatus';
import StageOvertime from '../../components/overtime/stageOvertime';
import Button from '../../base-components/Button';
import { getDataAtasanSelect } from '../../features/user/atasan';
import { createDataOvertimeTask } from '../../features/overtime/overtimeTask';
import FormSearchInOut from '../../components/overtime/formSearchInOut';
import { getDataPeriodeKerjaActiveSelect, getDataPeriodeKerjaByIdForInout } from '../../features/periodeKerja/periodeKerja';
const overtimeUserCreatePage = () => {
    const [periodeSelect, setPeriodeSelect] = useState<any>("");

    const {
        submitData,
        userId, setUserId,
        timeStartTask, setTimeStartTask,
        timeFinisedTask, setTimeFinisedTask,
        durasiTask, setDurasiTask,
        noteTask, setNoteTask,
        timeStartReport, setTimeStartReport,
        timeFinisedReport, setTimeFinisedReport,
        durasiReport, setDurasiReport,
        noteReport, setNoteReport,
        assignorId, setAssignorId,
        superiorId, setSuperiorId,
        isLoading
    } = createDataOvertimeTask()

    const navigate = useNavigate();

    const {data:dataUser, loading, message} = getMeAuth();

    const {dataResult:dataTaskStatus} = getDatas();

    const {dataResult:dataAtasan} = getDataAtasanSelect();

    const {dataResult:dataPeriodeKerja} = getDataPeriodeKerjaActiveSelect();

    useEffect(()=>{
        if(timeFinisedTask !== '' && timeStartTask !== ''){
            let durasi = dayjs(timeFinisedTask).diff(dayjs(timeStartTask), 'h', true).toFixed(2);
            setDurasiTask(durasi)
        }
    },[timeStartTask, timeFinisedTask]);

    useEffect(()=>{
        if(timeFinisedReport !== '' && timeStartReport !== ''){
            let durasi = dayjs(timeFinisedReport).diff(dayjs(timeStartReport), 'h', true).toFixed(2);
            setDurasiReport(durasi)
        }
    },[timeStartReport, timeFinisedReport])

    const clickBack = () => {
        navigate(-1);
    }

    const {dataResult:dataInout, uuid, setUuid, setUserUuid} = getDataPeriodeKerjaByIdForInout();

    useEffect(()=>{
        setUuid(periodeSelect);
        setUserUuid(dataUser.uuid);
        if(periodeSelect === "" || periodeSelect === null){
            setTimeStartReport("")
            setTimeFinisedReport("")
            setDurasiReport("")
        }
    },[periodeSelect, dataUser]);

    useEffect(()=>{
        if(dataUser.uuid !== undefined){
            setUserId(dataUser.uuid);
        }
    },[dataUser])

    return (
        <div>
            <div className='flex justify-end gap-4 mt-8'>
                <Button
                    size='sm'
                    variant="primary"
                    onClick={()=>clickBack()}
                    >
                    Cancel
                </Button>
                <Button
                    size='sm'
                    variant="primary"
                    type='submit'
                    form='form-lembur'
                    >
                    Save
                </Button>
                {/* <div className={`${datas && datas.status_koreksi && datas.status_koreksi.code !== 2 ? '' : 'hidden' }`}>
                    <Button
                        size='sm'
                        variant="primary"
                        className={`${isOpen ? '' : 'hidden'}`}
                        onClick={()=>clickAction(2)}
                        >
                        Approve
                    </Button>
                </div>
                <div className={`${datas && datas.status_koreksi && datas.status_koreksi.code !== 3 ? '' : 'hidden' }`}>
                    <Button
                        size='sm'
                        variant="danger"
                        className={`${isOpen ? '' : 'hidden'}`}
                        onClick={()=>clickAction(3)}
                        >
                        Not Approve
                    </Button>
                </div> */}
            </div>
            <div className='mt-4'>
                <StageOvertime 
                    datas={dataTaskStatus}
                    status={null}
                />
            </div>
            <div className='mt-4'>
                <FormSearchInOut 
                    dataPeriodeKerja={dataPeriodeKerja}
                    periodeSelect={periodeSelect} 
                    setPeriodeSelect={setPeriodeSelect}
                    dataInout={dataInout}
                    timeStartTask={timeStartTask} 
                    setTimeStartTask={setTimeStartTask}
                    timeFinisedTask={timeFinisedTask} 
                    setTimeFinisedTask={setTimeFinisedTask}
                    timeStartReport={timeStartReport} 
                    setTimeStartReport={setTimeStartReport}
                    timeFinisedReport={timeFinisedReport} 
                    setTimeFinisedReport={setTimeFinisedReport}
                />
            </div>
            <div className='mt-4'>
                <FormOvertime 
                    submitData={submitData}
                    user={dataUser}
                    atasan={dataAtasan}
                    timeStartTask={timeStartTask} 
                    setTimeStartTask={setTimeStartTask}
                    timeFinisedTask={timeFinisedTask} 
                    setTimeFinisedTask={setTimeFinisedTask}
                    durasiTask={durasiTask}
                    noteTask={noteTask} 
                    setNoteTask={setNoteTask}
                    timeStartReport={timeStartReport} 
                    setTimeStartReport={setTimeStartReport}
                    timeFinisedReport={timeFinisedReport} 
                    setTimeFinisedReport={setTimeFinisedReport}
                    durasiReport={durasiReport}
                    noteReport={noteReport} 
                    setNoteReport={setNoteReport}
                    superiorId={superiorId} 
                    setSuperiorId={setSuperiorId}
                    assignorId={assignorId} 
                    setAssignorId={setAssignorId}
                />
            </div>
            
        </div>
    )
}

export default overtimeUserCreatePage