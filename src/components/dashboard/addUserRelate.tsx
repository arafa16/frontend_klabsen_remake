import React from 'react'
import { FormInput } from '../../base-components/Form'
import Lucide from '../../base-components/Lucide'
import userNotFound from "../../assets/images/user/userNotFound.jpg";

const addUserRelate = (props:any) => {
    const {datas, addSubmit, search, setSearch} = props;

    return (
        <div className='box px-4 py-2'>
            <div className='flex justify-between gap-4 w-full'>
                <div className="w-[100%] flex align-center">
                    <FormInput
                        formInputSize="sm"
                        id="name"
                        type="text"
                        name='name'
                        placeholder='search by name or email to add'
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                    />
                </div>
            </div>
            <div>
                {datas && datas.map((data:any, index:any) => (
                    <div key={index} className="flex items-center mt-5">
                        <img
                            className="w-7 h-7"
                            alt="Rocketman Tailwind HTML Admin Template"
                            src={userNotFound}
                        />
                        <div className="ml-4">{data.name}</div>
                        <div className="ml-auto">
                            <Lucide 
                                icon="PlusSquare" 
                                className="w-5 h-5 hover:cursor-pointer hover:text-warning"
                                    onClick={()=>addSubmit({
                                        user_relate_uuid:data.uuid,
                                        is_active:1
                                    })}
                                />
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default addUserRelate