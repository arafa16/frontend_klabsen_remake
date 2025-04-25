import React from 'react'

const stageOvertime = (props:any) => {
    const {datas, status, clickStatus} = props;

    return (
        <div className="md:flex md:justify-end text-xs box z-20">
            {datas && datas.map((data :any, index:any)=>(
                <div 
                    key={index} 
                    className={`${status && status.uuid === data.uuid  ? 'bg-slate-0 text-slate-600' : 'bg-slate-100 text-slate-300'} capitalize px-4 py-1 intro-x dark:bg-darkmode-600 hover:cursor-pointer`}
                    onClick={()=>clickStatus(data.uuid)}
                    >
                    {data.name}
                </div>
            ))}
        </div>
    )
}

export default stageOvertime