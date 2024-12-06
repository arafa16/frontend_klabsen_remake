import Lucide from '../../base-components/Lucide'
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx'

const pendapatanTableAdmin = (props : any) => {
    const {datas, page, allPage, prevPage, nextPage, limit, link1, link2
    } = props;

    const navigate = useNavigate();

    const rupiah = (number : number)=>{
        return new Intl.NumberFormat("id-ID", {
          style: "decimal"
        }).format(number)+',00';
    }
    
    return (
        <div className="grid grid-cols-12 mt-5 box">
            {/* BEGIN: Inbox Content */}
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
                            onClick={()=>prevPage()}
                            />
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
                    </div>
                </div>
                <div className="overflow-x-auto sm:overflow-x-visible">
                    {datas.rows && datas.rows.map((data : any, index : any) => (
                    <div 
                        key={index} 
                        className="intro-y"
                        onClick={()=>navigate(data.tipe_pendapatan.code === '1' ? link1+data.uuid : link2+data.uuid)}
                        >
                        <div
                            className={clsx([
                                "transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400",
                                "hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded",
                            ])}
                        >
                        <div className="flex px-5 py-3">
                            <div className="flex items-center flex-none mr-5 w-2/6">
                                <div className='w-1/4'>
                                {index+1+((page-1)*limit)}
                                </div>
                                <div
                                className={clsx([
                                "ml-3 truncate w-3/4"
                                ])}
                                >
                                {data && data.pendapatan_atas}
                                </div>
                            </div>
                            <div className="w-32 truncate sm:w-2/6">
                                <span
                                className={clsx([
                                "ml-3 truncate"
                                ])}
                                >
                                {data.user && data.user.nik}
                                </span>
                            </div>
                            <div className="w-64 truncate sm:w-2/6">
                                <span
                                className={clsx([
                                "ml-3 truncate"
                                ])}
                                >
                                {data.user && data.user.name}
                                </span>
                            </div>
                            {/* <div className="w-64 truncate sm:w-1/6 text-right">
                                <span
                                className={clsx([
                                "ml-3 truncate"
                                ])}
                                >
                                {rupiah(data.total)}
                                </span>
                            </div> */}
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            {/* END: Inbox Content */}
        </div>
    )
}

export default pendapatanTableAdmin