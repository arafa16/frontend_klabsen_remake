
import dayjs from 'dayjs';
import { FormLabel, FormSelect, FormInput, FormTextarea } from '../../base-components/Form';

const formOvertime = (props : any) => {
    const {
        user,
        submitData,
        atasan,
        timeStartTask, setTimeStartTask,
        timeFinisedTask, setTimeFinisedTask,
        durasiTask,
        noteTask, setNoteTask,
        timeStartReport, setTimeStartReport,
        timeFinisedReport, setTimeFinisedReport,
        durasiReport,
        noteReport, setNoteReport,
        superiorId, setSuperiorId,
        assignorId, setAssignorId
    } = props;
    
    return (
        <div>
            <form id='form-lembur' onSubmit={submitData}>
                <div className="p-5 box intro-y text-xs">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 pb-5">
                        <div className="font-medium truncate">
                            <p className='underline'>SURAT TUGAS LEMBUR</p>
                        </div>
                    </div>
                    <div className='border-b border-slate-200/60 dark:border-darkmode-400 pb-1 my-4'>
                        <div className="font-medium whitespace-nowrap">
                            <p>Diinstruksikan kepada :</p>
                        </div>
                    </div>
                    <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5`}>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="name">Nama</FormLabel>
                            <p>{user.name}</p>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="nik">NIK</FormLabel>
                            <p>{user.nik}</p>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="group">Group/Devisi</FormLabel>
                            <p>{user.group && user.group.name}</p>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="penempatan">Lokasi Kerja/Penempatan</FormLabel>
                            <p>{user.penempatan && user.penempatan.name}</p>
                        </div>
                    </div>
                    <div className='border-b border-slate-200/60 dark:border-darkmode-400 pb-1 my-4'>
                        <div className="font-medium whitespace-nowrap">
                            <p>Untuk melaksanakan lembur pada :</p>
                        </div>
                    </div>
                    <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5`}>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="time_start">Tanggal dan Jam Mulai</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="time_start"
                                type="datetime-local"
                                required
                                name='time_start'
                                value={timeStartTask}
                                onChange={(e)=>setTimeStartTask(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="time_finised">Tanggal dan Jam Selesai</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="time_finised"
                                type="datetime-local"
                                required
                                name='time_finised'
                                value={timeFinisedTask}
                                onChange={(e)=>setTimeFinisedTask(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Durasi (Jam)</FormLabel>
                            <p>{durasiTask}</p>
                        </div>
                    </div>
                    <div className='border-b border-slate-200/60 dark:border-darkmode-400 pb-1 mt-4'>
                        <div className="font-medium ">
                            <p>Pelaksanaan lembur tersebut diperlukan untuk menyelesaikan tugas sebagai berikut :</p>
                        </div>
                    </div>
                    <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5`}>
                        <div className="col-span-12 intro-y sm:col-span-12">
                            <FormTextarea
                                id="note"
                                name='note'
                                formTextareaSize="sm"
                                required
                                value={noteTask}
                                onChange={(e)=>setNoteTask(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="p-5 box intro-y mt-5 text-xs mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 pb-5">
                        <div className="font-medium truncate">
                            <p className='underline'>LAPORAN PELAKSANAAN LEMBUR</p>
                        </div>
                    </div>
                    <div className='border-b border-slate-200/60 dark:border-darkmode-400 pb-1 mb-4'>
                        <div className="font-medium">
                            <p>Berdasarkan Surat Tugas Lembur No. ...... yang bertanda tangan dibawah ini :</p>
                        </div>
                    </div>
                    <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5`}>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="name">Nama</FormLabel>
                            <p>{user.name}</p>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="nik">NIK</FormLabel>
                            <p>{user.nik}</p>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="group">Group/Devisi</FormLabel>
                            <p>{user.group && user.group.name}</p>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="penempatan">Lokasi Kerja/Penempatan</FormLabel>
                            <p>{user.penempatan && user.penempatan.name}</p>
                        </div>
                    </div>
                    <div className='border-b border-slate-200/60 dark:border-darkmode-400 pb-1 my-4'>
                        <div className="font-medium whitespace-nowrap">
                            <p>Untuk melaksanakan lembur pada :</p>
                        </div>
                    </div>
                    <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5`}>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="timeStartReport">Tanggal dan Jam Mulai</FormLabel>
                            <p>{timeStartReport === "" ? "-" : timeStartReport}</p>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="timeFinisedReport">Tanggal dan Jam Selesai</FormLabel>
                            <p>{timeFinisedReport === "" ? "-" : timeFinisedReport}</p>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Durasi (Jam)</FormLabel>
                            <p>{durasiReport === "" ? "-" : durasiReport}</p>
                        </div>
                    </div>
                    <div className='border-b border-slate-200/60 dark:border-darkmode-400 pb-1 my-4'>
                        <div className="font-medium ">
                            <p>Pelaksanaan lembur tersebut diperlukan untuk menyelesaikan tugas sebagai berikut :</p>
                        </div>
                    </div>
                    <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5`}>
                        <div className="col-span-12 intro-y sm:col-span-12">
                            <FormTextarea
                                id="noteReport"
                                name='noteReport'
                                required
                                formTextareaSize="sm"
                                value={noteReport}
                                onChange={(e)=>setNoteReport(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="p-5 box intro-y mt-5 text-xs mb-12">
                    <div className='border-b border-slate-200/60 dark:border-darkmode-400 pb-1 my-4'>
                        <div className="font-medium whitespace-nowrap">
                            <p>Approver :</p>
                        </div>
                    </div>
                    <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5`}>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Yang Diberi Tugas</FormLabel>
                            <p>{user.name}</p>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="superiorId">Yang Memberi Tugas</FormLabel>
                            <FormSelect
                                formSelectSize="sm"
                                className=""
                                name='superiorId'
                                required
                                value={assignorId}
                                onChange={(e)=>setAssignorId(e.target.value)}
                                >
                                <option value={''}></option>
                                {atasan && atasan.map((data : any, index :any)=>(
                                    <option key={index} value={data.uuid}>{data.name}</option>
                                ))}
                            </FormSelect>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Mengetahui Atasan Langsung</FormLabel>
                            <FormSelect
                                formSelectSize="sm"
                                className=""
                                name='superiorId'
                                required
                                value={superiorId}
                                onChange={(e)=>setSuperiorId(e.target.value)}
                                >
                                <option value={''}></option>
                                {atasan && atasan.map((data : any, index :any)=>(
                                    <option key={index} value={data.uuid}>{data.name}</option>
                                ))}
                            </FormSelect>
                        </div>
                    </div>
                </div>
            </form>
            
        </div>
    )
}

export default formOvertime