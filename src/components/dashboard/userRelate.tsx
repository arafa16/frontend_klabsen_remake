import React from 'react'
import fakerData from "../../utils/faker";
import Button from "../../base-components/Button";
import clsx from "clsx";
import _ from "lodash";
import dayjs from 'dayjs';
import Lucide from '../../base-components/Lucide'
import userNotFound from "../../assets/images/user/userNotFound.jpg";
import { FormInput } from '../../base-components/Form';
import { useNavigate } from 'react-router-dom';

const UserRelate = (props:any) => {
    const {datas, link, viewTrash, deleteAction, page, search, setSearch, allPage, prevPage, nextPage,} = props;
    
    const navigate = useNavigate();
    
    return (
        <div>
            <div className="flex items-center justify-between h-12 intro-x px-2">
                <a href="" className=" truncate text-slate-500">
                    View User Calendar
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
            <div className="mt-4 mb-7">
                <div className="p-5 intro-x box">
                    <div className="flex items-center gap-x-6">
                        <FormInput
                            formInputSize="sm"
                            id="name"
                            type="text"
                            name='name'
                            placeholder='search by name'
                            value={search}
                            onChange={(e)=>setSearch(e.target.value)}
                        />
                    </div>
                    {datas.map((data:any, index:any) => (
                        <div key={index} className="flex items-center mt-5">
                            <img
                                className="w-7 h-7"
                                alt="user"
                                src={data && data.user_relates && data.user_relates.url_image ? `${import.meta.env.VITE_REACT_APP_API_URL+data.user_relates.url_image}` : userNotFound}
                            />
                            <div className="ml-4">{data.user_relates && data.user_relates.name}</div>
                            <div className="ml-auto flex gap-4">
                                <div >
                                    <Lucide 
                                        icon="Calendar" 
                                        className="w-5 h-5 hover:cursor-pointer hover:text-warning"
                                        onClick={()=>navigate(link !== undefined ? link+data.user_relates.uuid : alert('link not set'))}
                                        />
                                </div>
                                <div className="ml-auto">
                                    <Lucide 
                                        icon="Trash2" 
                                        className={`${viewTrash ? '' : 'hidden'} w-5 h-5 hover:cursor-pointer hover:text-danger`}
                                        onClick={()=>deleteAction(data.uuid)}
                                        />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UserRelate