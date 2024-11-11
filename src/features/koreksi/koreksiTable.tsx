import { useState } from 'react'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'

//digunakan pada koreksi absen by calendar
export const viewKoreksiByDate = () => {
    const navigate = useNavigate();
    const [datas, setDatas] = useState([]);

    const showData = (
        <div className="grid grid-cols-12 mt-5 box">
            {/* BEGIN: Inbox Content */}
            <div className="col-span-12 xl:col-span-12 2xl:col-span-12">
                <div className="overflow-x-auto sm:overflow-x-visible">
                    {datas && datas.map((data : any, index : any) => (
                    <div 
                        key={index} 
                        className="intro-y"
                        onClick={()=>navigate(`/koreksi/user/${data.uuid}/0`)}
                        >
                        <div
                            className={clsx([
                                "transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400",
                                "hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded",
                            ])}
                        >
                        <div className="flex px-5 py-3">
                            <div className="flex items-center flex-none mr-5">
                                <div className='lg:w-auto hidden lg:flex'>
                                    {index+1}
                                </div>
                                <div
                                    className={clsx([
                                    "ml-3 truncate"
                                    ])}
                                >
                                    {data.keterangan}
                                </div>
                            </div>
                            <div
                                className={clsx([
                                    "pl-10 ml-auto whitespace-nowrap hidden lg:flex"
                                ])}
                            >
                            {data.status_koreksi.name}
                            </div>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            {/* END: Inbox Content */}
        </div>
    )

    return {showData, setDatas}
}



