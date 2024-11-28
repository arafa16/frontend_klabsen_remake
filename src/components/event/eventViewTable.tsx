import Lucide from '../../base-components/Lucide'
import clsx from 'clsx'
import {FormInput } from '../../base-components/Form'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'

const eventViewTable = (props : any) => {
    const {datas, page, allPage, linkView, linkCreate, prevPage, nextPage, limit, setLimit} = props;
    const navigate = useNavigate();

    return (
        <>
            <div className="grid grid-cols-12 mt-5 box">
                {/* BEGIN: Inbox Content */}
                <div className="col-span-12 xl:col-span-12 2xl:col-span-12">
                    <div className="flex flex-col-reverse px-5 py-4 border-b sm:flex-row text-slate-500 border-slate-200/60">
                        <div className="flex items-center justify-end sm:ml-auto">
                            <div className='flex items-center mx-4'>
                                <FormInput
                                type="text"
                                className="block px-1 py-0 mt-0 w-10 mx-2 text-center text-xs"
                                placeholder="0"
                                name='limit'
                                value={datas.count === 0 ? 0 : (limit > datas.count ? datas.count : limit)}
                                onChange={(e)=>setLimit(e.target.value)}
                                /> 
                                <p className=' text-center text-xs'>/ {datas.count}</p>
                            </div>
                            <div className="text-xs">{page <= allPage ? page : allPage} of {allPage} page </div>
                            <div
                                className="flex items-center justify-center w-5 h-5 ml-5"
                                >
                                <Lucide 
                                    icon="ChevronLeft" 
                                    className="w-4 h-4 hover:cursor-pointer" 
                                    onClick={()=>prevPage()}/>
                            </div>
                            <div
                                className="flex items-center justify-center w-5 h-5 ml-5"
                                >
                                <Lucide 
                                    icon="ChevronRight" 
                                    className="w-4 h-4 hover:cursor-pointer"
                                    onClick={()=>nextPage()}
                                    />
                            </div>
                            <div
                                className="flex items-center justify-center w-5 h-5 ml-5 cursor-pointer hover:text-blue-500"
                                onClick={()=>navigate(linkCreate)}
                                >
                                <Lucide icon="FilePlus" className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                    <div className="overflow-x-auto sm:overflow-x-visible">
                        {datas.rows && datas.rows.map((data : any, index : any) => (
                        <div 
                            key={index} 
                            className="intro-y"
                            onClick={()=>navigate(linkView+`/${data.uuid}`)}
                            >
                            <div
                                className={clsx([
                                    "transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400",
                                    "hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded",
                                ])}
                            >
                            <div className="flex px-5 py-3">
                                <div className="flex items-center flex-none mr-5 w-52">
                                    <div className='w-16'>
                                        {index+1}
                                    </div>
                                    <div
                                        className={clsx([
                                        "ml-3 truncate"
                                        ])}
                                    >
                                        {data.name}
                                    </div>
                                </div>
                                <div className="w-64 truncate sm:w-64">
                                    <span
                                        className={clsx([
                                        "ml-3 truncate"
                                        ])}
                                    >
                                        {dayjs(data.tanggal_mulai).format('YYYY-MM-DD HH:mm:ss')}
                                    </span>
                                </div>
                                <div className="w-72 truncate sm:w-64">
                                    <span
                                        className={clsx([
                                        "ml-3 truncate"
                                        ])}
                                    >
                                        {dayjs(data.tanggal_selesai).format('YYYY-MM-DD HH:mm:ss') }
                                    </span>
                                </div>
                                <div className="w-48 truncate">
                                    <span
                                        className={clsx([
                                        "ml-3 truncate"
                                        ])}
                                    >
                                        {data.tipe_event && data.tipe_event.name}
                                    </span>
                                </div>
                                <div className="w-64 truncate sm:w-auto">
                                    <span
                                        className={clsx([
                                        "ml-3 truncate"
                                        ])}
                                    >
                                        {data.code}
                                    </span>
                                </div>
                                <div
                                className={clsx([
                                    "pl-10 ml-auto whitespace-nowrap"
                                ])}
                                >
                                {data.is_active ? 'active' : 'non active'}
                                </div>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                {/* END: Inbox Content */}
            </div>
        </>
    )
}

export default eventViewTable