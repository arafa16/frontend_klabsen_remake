import React from 'react'
import fakerData from "../../utils/faker";
import Button from "../../base-components/Button";
import clsx from "clsx";
import _ from "lodash";
import dayjs from 'dayjs';
import Lucide from '../../base-components/Lucide'

const EventShow = (props:any) => {
    const {dataEvents, page, allPage, prevPage, nextPage,} = props;

    return (
        <div>
            <div className="flex items-center justify-between h-12 intro-x">
                <a href="" className=" truncate text-slate-500">
                    Event
                </a>
                <div className="flex flex-col-reverse py-0 border-b sm:flex-row text-slate-500 border-slate-200/60">
                    <div className="flex items-center justify-end gap-4 sm:ml-auto">
                        <div className="text-xs">
                            {page <= allPage ? page : allPage} of {allPage} slide 
                        </div>
                        <div className='flex gap-4'>
                            <div
                                className="flex items-center justify-center w-5 h-5"
                                >
                                < Lucide 
                                    icon="ChevronLeft" 
                                    className="w-4 h-4 hover:cursor-pointer" 
                                    onClick={()=>prevPage()}
                                    />
                            </div>
                            <div
                                className="flex items-center justify-center w-5 h-5"
                                >
                                <Lucide 
                                    icon="ChevronRight" 
                                    className="w-4 h-4 hover:cursor-pointer"
                                    onClick={()=>nextPage()}
                                    />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="mt-4">
                {dataEvents.map((data:any, index:any) => (
                <div key={index} className="intro-x">
                    <div className="flex items-center px-5 py-3 mb-3 box zoom-in">
                    <div className="mr-auto">
                        <div className="font-medium">{data.name}</div>
                        <div className="mt-1 text-xs text-slate-500">
                            {dayjs(data.tanggalMulai).format('YYYY-MM-DD') }
                        </div>
                    </div>
                    <div
                        className={`${'text-'+data.tipe_event.color+'-500'}`}
                        >
                        {data.tipe_event.name}
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default EventShow