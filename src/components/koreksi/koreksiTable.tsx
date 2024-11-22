import React from 'react'
import Lucide from '../../base-components/Lucide'
import Button from '../../base-components/Button'
import { Menu } from '../../base-components/Headless'
import clsx from 'clsx'
import { FormCheck, FormInput } from '../../base-components/Form'
import { useNavigate } from 'react-router-dom'


const koreksiTableUser = (props : any) => {
    const {
        datas, 
        linkView, 
        linkCreate,
        page,
        limit,
        allPage,
        nextPage,
        prevPage,
        status_code
    } = props;
    const navigate = useNavigate();



    return (
        <>
        <div className="grid grid-cols-12 mt-5 box">
            {/* BEGIN: Koreksi Table */}
            <div className="col-span-12 xl:col-span-12 2xl:col-span-12">
            <div className="flex flex-col-reverse px-5 py-4 border-b sm:flex-row text-slate-500 border-slate-200/60">
                    <div className="flex items-center justify-end sm:ml-auto">
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
                        onClick={()=>navigate(linkView+`?${new URLSearchParams({uuid:data.uuid, code:status_code})}`)}
                        >
                        <div
                            className={clsx([
                                "transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400",
                                "hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded",
                            ])}
                        >
                        <div className="flex px-5 py-3">
                            <div className="flex items-center flex-none mr-5 w-72">
                                <div className='w-10'>
                                    {index+1+((page-1)*limit)}
                                </div>
                                <div
                                    className={clsx([
                                    "ml-3 truncate w-24"
                                    ])}
                                >
                                    {data && data.user && data.user.name}
                                </div>
                                <div
                                    className={clsx([
                                    "ml-3 truncate w-fit"
                                    ])}
                                >
                                    {data && data.keterangan}
                                </div>
                            </div>
                            <div
                                className={clsx([
                                    "pl-10 ml-auto whitespace-nowrap "
                                ])}
                            >
                            {data.status_koreksi && data.status_koreksi.name}
                            </div>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                <div className='p-4 flex justify-end text-xs'>{limit > datas && datas.count ? limit : datas && datas.count} of {datas && datas.count} data</div>
            </div>
            {/* END: Koreksi Table Content */}
        </div>
        </>
    )
}

export default koreksiTableUser