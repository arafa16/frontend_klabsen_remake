import React from 'react'
import Lucide from '../../base-components/Lucide'
import Button from '../../base-components/Button'
import { Menu } from '../../base-components/Headless'
import clsx from 'clsx'
import { FormCheck, FormInput } from '../../base-components/Form'
import { useNavigate } from 'react-router-dom'


const KoreksiPopUp = (props : any) => {
    const {datas, linkView, linkCreate} = props;
    const navigate = useNavigate();

    return (
        <>
        <div className="grid grid-cols-12 mt-5 box">
            {/* BEGIN: Inbox Content */}
            <div className="col-span-12 xl:col-span-12 2xl:col-span-12">
                <div className="overflow-x-auto sm:overflow-x-visible">
                    {datas && datas.map((data : any, index : any) => (
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
                            <div className="flex items-center flex-none mr-5 w-auto">
                                <div className='w-auto'>
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
                                    "pl-10 ml-auto whitespace-nowrap"
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
        </>
    )
}

export default KoreksiPopUp