import { FormLabel, FormSelect, FormInput, FormTextarea } from '../../base-components/Form';
import dayjs from 'dayjs';

const formSearchInOut = (props:any) => {
    const {
        dataPeriodeKerja, periodeSelect, 
        setPeriodeSelect, dataInout,
        timeStartReport, setTimeStartReport,
        timeFinisedReport, setTimeFinisedReport,
        timeStartTask, setTimeStartTask,
        timeFinisedTask, setTimeFinisedTask
    } = props;

    return (
        <div className="p-5 box intro-y text-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 pb-5">
                <div className="font-medium truncate">
                    <p className='underline'>Data Absen Masuk & Pulang</p>
                </div>
            </div>
            <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5`}>
                <div className="col-span-12 intro-y sm:col-span-3">
                    <FormLabel htmlFor="time_start">Periode Kerja</FormLabel>
                    <FormSelect
                        formSelectSize="sm"
                        className=""
                        name='superiorId'
                        required
                        value={periodeSelect}
                        onChange={(e)=>setPeriodeSelect(e.target.value)}
                        >
                        <option value={''}></option>
                        {dataPeriodeKerja && dataPeriodeKerja.map((data : any, index :any)=>(
                            <option key={index} value={data.uuid} >{data.name}</option>
                        ))}
                    </FormSelect>
                </div>
            </div>
            <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5`}>
                <div className="col-span-12 intro-y sm:col-span-3">
                    <FormLabel htmlFor="time_start">Absen Masuk</FormLabel>
                    <FormSelect
                        formSelectSize="sm"
                        className=""
                        name='superiorId'
                        required
                        value={timeStartReport}
                        onChange={(e)=>{
                            setTimeStartReport(e.target.value)
                            setTimeStartTask(e.target.value)
                        }}
                        >
                        <option value={''}></option>
                        {dataInout && dataInout.data_in && dataInout.data_in.map((data : any, index :any)=>(
                            <option 
                                key={index} 
                                value={dayjs(data.time_start).format("YYYY-MM-DD HH:mm")}
                                className={`${data.time_start !== null ? '' : 'bg-red-500'} `}
                            >{dayjs(data.tanggal_mulai).format("YYYY-MM-DD HH:mm")} {`${data.time_start !== null ? '' : ' ( jam operasional not set )'} `}</option>
                        ))}
                    </FormSelect>
                </div>
                <div className="col-span-12 intro-y sm:col-span-3">
                    <FormLabel htmlFor="time_finised">Absen Pulang</FormLabel>
                    <FormSelect
                        formSelectSize="sm"
                        className=""
                        name='superiorId'
                        required
                        value={timeFinisedReport}
                        onChange={(e)=>{
                            setTimeFinisedReport(e.target.value)
                            setTimeFinisedTask(e.target.value)
                        }}
                        >
                        <option value={''}></option>
                        {dataInout && dataInout.data_out && dataInout.data_out.map((data : any, index :any)=>(
                            <option key={index} value={dayjs(data.tanggal_mulai).format("YYYY-MM-DD HH:mm")}>{dayjs(data.tanggal_mulai).format("YYYY-MM-DD HH:mm")}</option>
                        ))}
                    </FormSelect>
                </div>
            </div>
        </div>
    )
}

export default formSearchInOut