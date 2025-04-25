import React, { useEffect, useState } from 'react'
import Lucide from '../../base-components/Lucide'
import { FormSelect } from '../../base-components/Form';

export const viewPrivilege = (props : any) => {
    const {title, datas} = props;
    const [dataPrivilege, setDataPrivilege] = useState([]);
    const [isView, setIsView] = useState(false);

    useEffect(()=>{
        if(datas.privilegeId !== 0){
            setDataPrivilege(datas && datas.privilege);
        }
    },[datas])

    const view = (
        <div className={`p-5 box intro-y ${!isView ? '' : 'hidden'}`}>
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
                <div className="text-base font-medium truncate">{title}</div>
                <Lucide 
                    icon="Edit" 
                    className="w-4 h-4 ml-auto z-30 text-blue-500 cursor-pointer hover:text-yellow-500" 
                    onClick={()=>setIsView(true)}
                    />
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-1 gap-y-10 ${dataPrivilege ? 'hidden' : ''}`}>
                <div>
                    <div className="font-medium whitespace-nowrap flex justify-center">
                        privilege belum di setting
                    </div>
                </div>
            </div>
            <div className={` ${!dataPrivilege ? 'hidden' : ''}`}>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Dashboard
                        </div>
                        <div className="mt-1  text-slate-500">
                            {datas.privilege && datas.privilege.dashboard ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Edit User Sub
                        </div>
                        <div className="mt-1  text-slate-500">
                            {datas.privilege && datas.privilege.edit_user_sub ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Absen
                        </div>
                        <div className="mt-1  text-slate-500">
                            {datas.privilege && datas.privilege.absen ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Kalendar Sub
                        </div>
                        <div className="mt-1  text-slate-500">
                            {datas.privilege && datas.privilege.kalendar_sub ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Absen Modal
                        </div>
                        <div className="mt-1  text-slate-500">
                            {datas.privilege && datas.privilege.absen_modal ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Wfa Modal
                        </div>
                        <div className="mt-1  text-slate-500">
                            {datas.privilege && datas.privilege.wfh_modal ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Shift Modal
                        </div>
                        <div className="mt-1  text-slate-500">
                            {datas.privilege && datas.privilege.shift_modal ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Absen Check
                        </div>
                        <div className="mt-1  text-slate-500">
                            {datas.privilege && datas.privilege.absen_check ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Admin Event
                        </div>
                        <div className="mt-1  text-slate-500">
                            {datas.privilege && datas.privilege.admin_event ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Perhitungan Absen
                        </div>
                        <div className="mt-1  text-slate-500">
                            {datas.privilege && datas.privilege.perhitungan_absen ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Pengajuan Koreksi Sub
                        </div>
                        <div className="mt-1  text-slate-500">
                            {datas.privilege && datas.privilege.pengajuan_koreksi_sub ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Approval Koreksi Sub
                        </div>
                        <div className="mt-1  text-slate-500">
                            {datas.privilege && datas.privilege.approval_koreksi_sub ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Approval All Koreksi Sub
                        </div>
                        <div className="mt-1  text-slate-500">
                            {datas.privilege && datas.privilege.approval_all_koreksi_sub ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Employees
                        </div>
                        <div className="mt-1  text-slate-500">
                            {datas.privilege && datas.privilege.employees ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Data Employee
                        </div>
                        <div className="mt-1  text-slate-500">
                            {datas.privilege && datas.privilege.data_employee ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Slip Gaji
                        </div>
                        <div className="mt-1  text-slate-500">
                            {datas.privilege && datas.privilege.slip_gaji ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Pendapatan Sub
                        </div>
                        <div className="mt-1  text-slate-500">
                            {datas.privilege && datas.privilege.pendapatan_sub ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Pendapatan Lain Sub
                        </div>
                        <div className="mt-1  text-slate-500">
                            {datas.privilege && datas.privilege.pendapatan_lain_sub ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Pendapatan Admin Sub
                        </div>
                        <div className="mt-1  text-slate-500">
                            {datas.privilege && datas.privilege.pendapatan_admin_sub ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Overtime
                        </div>
                        <div className="mt-1  text-slate-500">
                            {datas.privilege && datas.privilege.overtime ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Overtime User
                        </div>
                        <div className="mt-1  text-slate-500">
                            {datas.privilege && datas.privilege.overtime_user ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Overtime Superior
                        </div>
                        <div className="mt-1  text-slate-500">
                            {datas.privilege && datas.privilege.overtime_superior ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Overtime Assignor
                        </div>
                        <div className="mt-1  text-slate-500">
                            {datas.privilege && datas.privilege.overtime_assignor ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Overtime Admin
                        </div>
                        <div className="mt-1  text-slate-500">
                            {datas.privilege && datas.privilege.overtime_admin ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Attribute	
                        </div>
                        <div className="mt-1  text-slate-500">
                            {datas.privilege && datas.privilege.attribute ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            setting	
                        </div>
                        <div className="mt-1  text-slate-500">
                            {datas.privilege && datas.privilege.setting ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div>
                {/* <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            isActive	
                        </div>
                        <div className="mt-1  text-slate-500">
                            {datas && datas.isActive ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
    return {view, isView, setIsView}
}