import Lucide from '../../base-components/Lucide'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'

const table4 = (props : any) => {
    const {datas, linkView, linkCreate, nextPage, prevPage, page, allPage} = props;
    const navigate = useNavigate();

    return (
        <>
        <div className="grid grid-cols-12 mt-5 box text-xs">
            {/* BEGIN: Inbox Content */}
            <div className="col-span-12 xl:col-span-12 2xl:col-span-12">
                <div className="flex flex-col-reverse px-5 py-4 border-b sm:flex-row text-slate-500 border-slate-200/60">
                    <div className="flex items-center justify-end sm:ml-auto">
                    <div className="text-xs">{page <= allPage ? page : allPage} of {allPage} page </div>
                        <div className="flex items-center justify-center w-5 h-5 ml-5" >
                            <Lucide 
                                icon="ChevronLeft" 
                                className="w-4 h-4 hover:cursor-pointer" 
                                onClick={()=>prevPage()}
                            />
                        </div>
                        <div className="flex items-center justify-center w-5 h-5 ml-5" >
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
                            <div className="flex items-center flex-none mr-5 w-72">
                                <div className='w-16'>
                                    {index+1}
                                </div>
                                <div
                                    className={clsx([
                                    "mr-3 truncate flex justify-start w-96"
                                    ])}
                                    >
                                    {data && data.name}
                                </div>
                            </div>
                            <div className="w-24 truncate sm:w-48">
                                <span
                                    className={clsx([
                                    "ml-3 truncate"
                                    ])}
                                    >
                                    {data && data.keterangan}
                                </span>
                            </div>
                            <div className="w-24 truncate sm:w-48">
                                <span
                                    className={clsx([
                                    "ml-3 truncate"
                                    ])}
                                    >
                                    {data && data.code}
                                </span>
                            </div>
                            <div
                                className={clsx([
                                "pl-10 ml-auto whitespace-nowrap"
                                ])}
                                >
                                {data.isActive ? 'active' : 'non active'}
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

export default table4