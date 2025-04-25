
import dayjs from 'dayjs';
const viewOvertime = (props : any) => {
    const {datas, clickBack, isOpen, clickAction} = props;

    console.log(datas, 'overtime task')
    
    return (
        <div>
            <div className="p-5 box intro-y text-xs">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 pb-5">
                    <div className="font-medium truncate">
                        <p className='underline'>SURAT TUGAS LEMBUR</p>
                        <p>No. {datas && datas.number}</p>
                    </div>
                </div>
                <div className='border-b border-slate-200/60 dark:border-darkmode-400 pb-1 mb-4'>
                    <div className="font-medium whitespace-nowrap">
                        <p>Diinstruksikan kepada :</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-y-10 mb-10'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Nama
                        </div>
                        <div className="mt-1 text-slate-500">
                            {datas && datas.user && datas.user.name}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            NIK
                        </div>
                        <div className="mt-1 text-slate-500">
                        {datas && datas.user && datas.user.nik}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Group/Devisi
                        </div>
                        <div className="mt-1 text-slate-500">
                        {datas && datas.user && datas.user.group && datas.user.group.name}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Lokasi Kerja/Penempatan
                        </div>
                        <div className="mt-1 text-slate-500">
                        {datas && datas.user && datas.user.penempatan && datas.user.penempatan.name}
                        </div>
                    </div>
                </div>
                <div className='border-b border-slate-200/60 dark:border-darkmode-400 pb-1 mb-4'>
                    <div className="font-medium whitespace-nowrap">
                        <p>Untuk melaksanakan lembur pada :</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-y-10 mb-10'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Tanggal dan Jam Mulai 
                        </div>
                        <div className="mt-1 text-slate-500">
                            {datas && dayjs(datas.time_start).format("YYYY-MM-DD HH:mm:ss")}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Tanggal dan Jam Selesai
                        </div>
                        <div className="mt-1 text-slate-500">
                            {datas && dayjs(datas.time_finised).format("YYYY-MM-DD HH:mm:ss")}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Durasi (Jam)
                        </div>
                        <div className="mt-1 text-slate-500">
                            {datas && dayjs(datas.time_finised).diff(dayjs(datas.time_start), 'h', true).toFixed(2)}
                        </div>
                    </div>
                </div>
                <div className='border-b border-slate-200/60 dark:border-darkmode-400 pb-1 mb-4'>
                    <div className="font-medium ">
                        <p>Pelaksanaan lembur tersebut diperlukan untuk menyelesaikan tugas sebagai berikut :</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 mb-10'>
                    <div>
                        <div className="mt-1 text-slate-500">
                            : {datas && datas.note}
                        </div>
                    </div>
                </div>
                <div className='border-b border-slate-200/60 dark:border-darkmode-400 pb-1 mb-4'>
                    <div className="font-medium whitespace-nowrap">
                        <p>Approver :</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-y-10 mb-10'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Yang Diberi Tugas
                        </div>
                        <div className="mt-1 text-slate-500">
                            {datas && datas.user && datas.user.name}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Yang Memberi Tugas
                        </div>
                        <div className="mt-1 text-slate-500">
                            {datas && datas.assignor && datas.assignor.name}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Mengetahui Atasan Langsung
                        </div>
                        <div className="mt-1 text-slate-500">
                        {datas && datas.superior && datas.superior.name}
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5 box intro-y mt-5 text-xs">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 pb-5">
                    <div className="font-medium truncate">
                        <p className='underline'>LAPORAN PELAKSANAAN LEMBUR</p>
                    </div>
                </div>
                <div className='border-b border-slate-200/60 dark:border-darkmode-400 pb-1 mb-4'>
                    <div className="font-medium">
                        <p>Berdasarkan Surat Tugas Lembur No. : {datas && datas.number} yang bertanda tangan dibawah ini :</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-y-10 mb-10'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Nama
                        </div>
                        <div className="mt-1 text-slate-500">
                            {datas && datas.user && datas.user.name}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            NIK
                        </div>
                        <div className="mt-1 text-slate-500">
                        {datas && datas.user && datas.user.nik}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Group/Devisi
                        </div>
                        <div className="mt-1 text-slate-500">
                        {datas && datas.user && datas.user.group && datas.user.group.name}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Lokasi Kerja/Penempatan
                        </div>
                        <div className="mt-1 text-slate-500">
                        {datas && datas.user && datas.user.penempatan && datas.user.penempatan.name}
                        </div>
                    </div>
                </div>
                <div className='border-b border-slate-200/60 dark:border-darkmode-400 pb-1 mb-4'>
                    <div className="font-medium whitespace-nowrap">
                        <p>Untuk melaksanakan lembur pada :</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-y-10 mb-10'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Tanggal dan Jam Mulai 
                        </div>
                        <div className="mt-1 text-slate-500">
                            {datas && dayjs(datas.time_start).format("YYYY-MM-DD HH:mm:ss")}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Tanggal dan Jam Selesai
                        </div>
                        <div className="mt-1 text-slate-500">
                            {datas && dayjs(datas.time_finised).format("YYYY-MM-DD HH:mm:ss")}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Durasi (Jam)
                        </div>
                        <div className="mt-1 text-slate-500">
                            {datas && dayjs(datas.time_finised).diff(dayjs(datas.time_start), 'h', true).toFixed(2)}
                        </div>
                    </div>
                </div>
                <div className='border-b border-slate-200/60 dark:border-darkmode-400 pb-1 mb-4'>
                    <div className="font-medium ">
                        <p>Pelaksanaan lembur tersebut diperlukan untuk menyelesaikan tugas sebagai berikut :</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 mb-10'>
                    <div>
                        <div className="mt-1 text-slate-500">
                            : {datas && datas.note}
                        </div>
                    </div>
                </div>
                <div className='border-b border-slate-200/60 dark:border-darkmode-400 pb-1 mb-4'>
                    <div className="font-medium whitespace-nowrap">
                        <p>Approver :</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-y-10 mb-10'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Yang Diberi Tugas
                        </div>
                        <div className="mt-1 text-slate-500">
                            {datas && datas.user && datas.user.name}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Yang Memberi Tugas
                        </div>
                        <div className="mt-1 text-slate-500">
                            {datas && datas.assignor && datas.assignor.name}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Mengetahui Atasan Langsung
                        </div>
                        <div className="mt-1 text-slate-500">
                        {datas && datas.superior && datas.superior.name}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default viewOvertime