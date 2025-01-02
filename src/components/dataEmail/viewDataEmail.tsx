import { FormLabel, FormSelect, FormInput } from '../../base-components/Form';
import Button from '../../base-components/Button';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

const ViewDataEmail = (props : any) => {
    const {datas, linkBack} = props;

    const navigate = useNavigate();

    return (
        <div className="p-5 box intro-y">
            <div className='grid grid-cols-3 md:grid-cols-3 gap-y-10 text-xs'>
                <div>
                    <div className=" whitespace-nowrap">
                        uuid
                    </div>
                    <div className="mt-1  text-slate-500">
                        {datas && datas.uuid}
                    </div>
                </div>
                <div>
                    <div className=" whitespace-nowrap">
                        name
                    </div>
                    <div className="mt-1  text-slate-500">
                        {datas && datas.name}
                    </div>
                </div>
                <div>
                    <div className=" whitespace-nowrap">
                        from
                    </div>
                    <div className="mt-1  text-slate-500">
                        {datas && datas.from}
                    </div>
                </div>
                <div>
                    <div className=" whitespace-nowrap">
                        to
                    </div>
                    <div className="mt-1  text-slate-500">
                        {datas && datas.to}
                    </div>
                </div>
                <div>
                    <div className=" whitespace-nowrap">
                        subject
                    </div>
                    <div className="mt-1  text-slate-500">
                        {datas && datas.subject}
                    </div>
                </div>
                <div>
                    <div className=" whitespace-nowrap">
                        text email
                    </div>
                    <div className="mt-1  text-slate-500">
                        {datas && datas.text_email}
                    </div>
                </div>
                <div>
                    <div className=" whitespace-nowrap">
                        status email
                    </div>
                    <div className="mt-1  text-slate-500">
                        {datas && datas.status_email && datas.status_email.name}
                    </div>
                </div>
                <div>
                    <div className=" whitespace-nowrap">
                        code
                    </div>
                    <div className="mt-1  text-slate-500">
                        {datas && datas.code}
                    </div>
                </div>
                <div>
                    <div className=" whitespace-nowrap">
                        is active ?
                    </div>
                    <div className="mt-1  text-slate-500">
                        {datas && datas.is_active ? 'yes' : 'no'}
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ViewDataEmail