import dayjs from "dayjs"

const historyView = (props:any) => {
    const {datas} = props;

    return (
        <div className="text-xs">
            {datas && datas.overtime_histories && datas.overtime_histories.map((data:any, index:any)=>(
                <div key={index} className='mb-4 box px-4 py-2 '>
                    <div className='flex gap-x-4 '>
                    <p className='Capitalize text-green-500'>Action by {data.user && data.user.name}</p>
                    -
                    <p>{dayjs(data.created_at).format('YYYY-MM-DD HH:mm:ss')}</p>
                    </div>
                    <p className='mt-2 capitalize'>{data.description}</p>
                </div>
            ))}
        </div>
    )
}

export default historyView