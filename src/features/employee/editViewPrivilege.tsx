import { useEffect, useState } from 'react'
import {FormSelect } from "../../base-components/Form";
import Button from '../../base-components/Button';

import { resetPrivileges, updatePrivileges } from '../../stores/features/privilegeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getUserById } from '../../stores/features/userSlice';
import LoadingIcon from "../../base-components/LoadingIcon";

const editViewPrivilege = (props : any) => {
    const {title, changeEditPrivilege, datas, viewEditPriviege} = props;

    const [userId, setUserId] = useState(0);
    const [dashboard, setDashboard] = useState(0);
    const [edit_user_sub, set_edit_user_sub] = useState(0);
    const [absen, setAbsen] = useState(0);
    const [kalendar_sub, setKalendarSub] = useState(0);
    const [absen_modal, setAbsenModal] = useState(0);
    const [wfh_modal, setWfhModal] = useState(0);
    const [shift_modal, setShiftModal] = useState(0);
    const [absen_check, setAbsenCheck] = useState(0);
    const [admin_event, setAdminEvent] = useState(0);
    const [perhitungan_absen, setPerhitunganAbsen] = useState(0);
    const [pengajuan_koreksi_sub, setPengajuanKoreksiSub] = useState(0);
    const [approval_koreksi_sub, setApprovalKoreksiSub] = useState(0);
    const [approval_all_koreksi_sub, setApprovalAllKoreksiSub] = useState(0);
    const [employees, setEmployees] = useState(0);
    const [data_employee, setDataEmployee] = useState(0);
    const [slip_gaji, setSlipGaji] = useState(0);
    const [pendapatan_sub, setPendapatanSub] = useState(0);
    const [pendapatan_lain_sub, setPendapatanLainSub] = useState(0);
    const [pendapatan_admin_sub, setPendapatanAdminSub] = useState(0);
    const [attribute, setAttribute] = useState(0);
    const [setting, setSetting] = useState(0);
    const [id_privilege, setIdPrivilege] = useState(null);

    const dispatch = useDispatch();

    const {data, isError, isSuccess, isLoading, message} = useSelector(
        (state : any) => state.privilege
    )

    useEffect(()=>{
        if(datas.privilegeId !== 0){
            setDashboard(datas.privilege && datas.privilege.dashboard ? 1 : 0);
            set_edit_user_sub(datas.privilege && datas.privilege.edit_user_sub ? 1 : 0);
            setAbsen(datas.privilege && datas.privilege.absen ? 1 : 0);
            setKalendarSub(datas.privilege && datas.privilege.kalendar_sub ? 1 : 0);
            setAbsenModal(datas.privilege && datas.privilege.absen_modal ? 1 : 0);
            setWfhModal(datas.privilege && datas.privilege.wfh_modal ? 1 : 0);
            setShiftModal(datas.privilege && datas.privilege.shift_modal ? 1 : 0);
            setAbsenCheck(datas.privilege && datas.privilege.absen_check ? 1 : 0);
            setAdminEvent(datas.privilege && datas.privilege.admin_event ? 1 : 0);
            setPerhitunganAbsen(datas.privilege && datas.privilege.perhitungan_absen ? 1 : 0);
            setPengajuanKoreksiSub(datas.privilege && datas.privilege.pengajuan_koreksi_sub ? 1 : 0);
            setApprovalKoreksiSub(datas.privilege && datas.privilege.approval_koreksi_sub ? 1 : 0);
            setApprovalAllKoreksiSub(datas.privilege && datas.privilege.approval_all_koreksi_sub ? 1 : 0);
            setEmployees(datas.privilege && datas.privilege.employees ? 1 : 0);
            setDataEmployee(datas.privilege && datas.privilege.data_employee ? 1 : 0);
            setSlipGaji(datas.privilege && datas.privilege.slip_gaji ? 1 : 0);
            setPendapatanSub(datas.privilege && datas.privilege.pendapatan_sub ? 1 : 0);
            setPendapatanLainSub(datas.privilege && datas.privilege.pendapatan_lain_sub ? 1 : 0);
            setPendapatanAdminSub(datas.privilege && datas.privilege.pendapatan_admin_sub ? 1 : 0);
            setAttribute(datas.privilege && datas.privilege.attribute ? 1 : 0);
            setSetting(datas.privilege && datas.privilege.setting ? 1 : 0);
            setIdPrivilege(datas.privilege && datas.privilege.uuid);
        }
    },[datas]);

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                dispatch(resetPrivileges());
                dispatch(getUserById({id:datas.uuid}));
                changeEditPrivilege(false);
            }
        }
    },[isSuccess, message, isLoading])

    const sumbitPrivilege = (e : any) => {
        e.preventDefault();
        dispatch(updatePrivileges({
            uuid:id_privilege,
            userId, 
            dashboard, 
            edit_user_sub, 
            absen, 
            kalendar_sub,
            absen_modal,
            wfh_modal,
            shift_modal,
            absen_check,
            admin_event,
            perhitungan_absen,
            pengajuan_koreksi_sub, 
            approval_koreksi_sub,
            approval_all_koreksi_sub,
            employees,
            data_employee,
            slip_gaji,
            pendapatan_sub,
            pendapatan_lain_sub,
            pendapatan_admin_sub,
            attribute,
            setting
        }));
    }

    return (
        <div className={`${datas && datas.privilegeId === null ? 'hidden' : ''}`}>
            <div className={`p-5 box intro-y ${!viewEditPriviege ? 'hidden' : ''}`}>
            <form onSubmit={sumbitPrivilege}>
                <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
                    <div className="text-base font-medium truncate">{title}</div>
                    <div className='flex gap-2 justify-end w-full'>
                        <Button 
                            type='button'
                            size='sm'
                            variant='secondary'
                            onClick={()=>changeEditPrivilege(false)}
                            >
                            Cancel
                        </Button>
                        <Button 
                            type='submit'
                            size='sm'
                            variant='primary'
                            >
                            {isLoading ? <LoadingIcon icon="rings" className="w-8 h-4" color="white"  /> : 'Submit'}
                        </Button>
                    </div>
                </div>
                <div>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 border-b border-slate-200/60'>
                        <div>
                            <div className="font-medium whitespace-nowrap">
                                dashboard
                            </div>
                            <div className="mt-1  text-slate-500 pr-6">
                                <FormSelect
                                    formSelectSize="sm"
                                    aria-label=".form-select-sm example"
                                    name='dashboard'
                                    value={dashboard}
                                    onChange={(e : any)=>setDashboard(e.target.value)}
                                    >
                                    <option value={0}>non active</option>
                                    <option value={1}>active</option>
                                </FormSelect>
                            </div>
                        </div>
                        <div>
                            <div className="font-medium whitespace-nowrap">
                                Edit User Sub 
                            </div>
                            <div className="mt-1  text-slate-500 pr-6">
                                <FormSelect
                                    formSelectSize="sm"
                                    aria-label=".form-select-sm example"
                                    name='edit_user_sub'
                                    value={edit_user_sub}
                                    onChange={(e : any)=>set_edit_user_sub(e.target.value)}
                                    >
                                    <option value={0}>non active</option>
                                    <option value={1}>active</option>
                                </FormSelect>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                        <div>
                            <div className="font-medium whitespace-nowrap">
                                Absen
                            </div>
                            <div className="mt-1  text-slate-500 pr-6">
                                <FormSelect
                                    formSelectSize="sm"
                                    aria-label=".form-select-sm example"
                                    name='absen'
                                    value={absen}
                                    onChange={(e : any)=>setAbsen(e.target.value)}
                                    >
                                    <option value={0}>non active</option>
                                    <option value={1}>active</option>
                                </FormSelect>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                        <div>
                            <div className="font-medium whitespace-nowrap">
                                Kalendar Sub
                            </div>
                            <div className="mt-1  text-slate-500 pr-6">
                                <FormSelect
                                    formSelectSize="sm"
                                    aria-label=".form-select-sm example"
                                    name='kalendar_sub'
                                    value={kalendar_sub}
                                    onChange={(e : any)=>setKalendarSub(e.target.value)}
                                    >
                                    <option value={0}>non active</option>
                                    <option value={1}>active</option>
                                </FormSelect>
                            </div>
                        </div>
                        <div>
                            <div className="font-medium whitespace-nowrap">
                                Absen Modal
                            </div>
                            <div className="mt-1  text-slate-500 pr-6">
                                <FormSelect
                                    formSelectSize="sm"
                                    aria-label=".form-select-sm example"
                                    name='absen_modal'
                                    value={absen_modal}
                                    onChange={(e : any)=>setAbsenModal(e.target.value)}
                                    >
                                    <option value={0}>non active</option>
                                    <option value={1}>active</option>
                                </FormSelect>
                            </div>
                        </div>
                        <div>
                            <div className="font-medium whitespace-nowrap">
                                Wfa Modal
                            </div>
                            <div className="mt-1  text-slate-500 pr-6">
                                <FormSelect
                                    formSelectSize="sm"
                                    aria-label=".form-select-sm example"
                                    name='wfh_modal'
                                    value={wfh_modal}
                                    onChange={(e : any)=>setWfhModal(e.target.value)}
                                    >
                                    <option value={0}>non active</option>
                                    <option value={1}>active</option>
                                </FormSelect>
                            </div>
                        </div>
                        <div>
                            <div className="font-medium whitespace-nowrap">
                                Shift Modal
                            </div>
                            <div className="mt-1  text-slate-500 pr-6">
                                <FormSelect
                                    formSelectSize="sm"
                                    aria-label=".form-select-sm example"
                                    name='shift_modal'
                                    value={shift_modal}
                                    onChange={(e : any)=>setShiftModal(e.target.value)}
                                    >
                                    <option value={0}>non active</option>
                                    <option value={1}>active</option>
                                </FormSelect>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                        <div>
                            <div className="font-medium whitespace-nowrap">
                                Absen Check
                            </div>
                            <div className="mt-1  text-slate-500 pr-6">
                                <FormSelect
                                    formSelectSize="sm"
                                    aria-label=".form-select-sm example"
                                    name='absen_check'
                                    value={absen_check}
                                    onChange={(e : any)=>setAbsenCheck(e.target.value)}
                                    >
                                    <option value={0}>non active</option>
                                    <option value={1}>active</option>
                                </FormSelect>
                            </div>
                        </div>
                        <div>
                            <div className="font-medium whitespace-nowrap">
                                Admin Event
                            </div>
                            <div className="mt-1  text-slate-500 pr-6">
                                <FormSelect
                                    formSelectSize="sm"
                                    aria-label=".form-select-sm example"
                                    name='admin_event'
                                    value={admin_event}
                                    onChange={(e : any)=>setAdminEvent(e.target.value)}
                                    >
                                    <option value={0}>non active</option>
                                    <option value={1}>active</option>
                                </FormSelect>
                            </div>
                        </div>
                        <div>
                            <div className="font-medium whitespace-nowrap">
                                Perhitungan Absen
                            </div>
                            <div className="mt-1  text-slate-500 pr-6">
                                <FormSelect
                                    formSelectSize="sm"
                                    aria-label=".form-select-sm example"
                                    name='perhitungan_absen'
                                    value={perhitungan_absen}
                                    onChange={(e : any)=>setPerhitunganAbsen(e.target.value)}
                                    >
                                    <option value={0}>non active</option>
                                    <option value={1}>active</option>
                                </FormSelect>
                            </div>
                        </div>
                        <div>
                            <div className="font-medium whitespace-nowrap">
                                Pengajuan Koreksi Sub
                            </div>
                            <div className="mt-1  text-slate-500 pr-6">
                                <FormSelect
                                    formSelectSize="sm"
                                    aria-label=".form-select-sm example"
                                    name='pengajuan_koreksi_sub'
                                    value={pengajuan_koreksi_sub}
                                    onChange={(e : any)=>setPengajuanKoreksiSub(e.target.value)}
                                    >
                                    <option value={0}>non active</option>
                                    <option value={1}>active</option>
                                </FormSelect>
                            </div>
                        </div>
                        <div>
                            <div className="font-medium whitespace-nowrap">
                                Approval Koreksi Sub
                            </div>
                            <div className="mt-1  text-slate-500 pr-6">
                                <FormSelect
                                    formSelectSize="sm"
                                    aria-label=".form-select-sm example"
                                    name='approval_koreksi_sub'
                                    value={approval_koreksi_sub}
                                    onChange={(e : any)=>setApprovalKoreksiSub(e.target.value)}
                                    >
                                    <option value={0}>non active</option>
                                    <option value={1}>active</option>
                                </FormSelect>
                            </div>
                        </div>
                        <div>
                            <div className="font-medium whitespace-nowrap">
                                Approval All Koreksi Sub
                            </div>
                            <div className="mt-1  text-slate-500 pr-6">
                                <FormSelect
                                    formSelectSize="sm"
                                    aria-label=".form-select-sm example"
                                    name='approval_all_koreksi_sub'
                                    value={approval_all_koreksi_sub}
                                    onChange={(e : any)=>setApprovalAllKoreksiSub(e.target.value)}
                                    >
                                    <option value={0}>non active</option>
                                    <option value={1}>active</option>
                                </FormSelect>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                        <div>
                            <div className="font-medium whitespace-nowrap">
                                Employees
                            </div>
                            <div className="mt-1  text-slate-500 pr-6">
                                <FormSelect
                                    formSelectSize="sm"
                                    aria-label=".form-select-sm example"
                                    name='employees'
                                    value={employees}
                                    onChange={(e : any)=>setEmployees(e.target.value)}
                                    >
                                    <option value={0}>non active</option>
                                    <option value={1}>active</option>
                                </FormSelect>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                        <div>
                            <div className="font-medium whitespace-nowrap">
                                Data Employee
                            </div>
                            <div className="mt-1  text-slate-500 pr-6">
                                <FormSelect
                                    formSelectSize="sm"
                                    aria-label=".form-select-sm example"
                                    name='data_employee'
                                    value={data_employee}
                                    onChange={(e : any)=>setDataEmployee(e.target.value)}
                                    >
                                    <option value={0}>non active</option>
                                    <option value={1}>active</option>
                                </FormSelect>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                        <div>
                            <div className="font-medium whitespace-nowrap">
                                Slip Gaji
                            </div>
                            <div className="mt-1  text-slate-500 pr-6">
                                <FormSelect
                                    formSelectSize="sm"
                                    aria-label=".form-select-sm example"
                                    name='slip_gaji'
                                    value={slip_gaji}
                                    onChange={(e : any)=>setSlipGaji(e.target.value)}
                                    >
                                    <option value={0}>non active</option>
                                    <option value={1}>active</option>
                                </FormSelect>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10'>
                        <div>
                            <div className="font-medium whitespace-nowrap">
                                Pendapatan Sub
                            </div>
                            <div className="mt-1  text-slate-500 pr-6">
                                <FormSelect
                                    formSelectSize="sm"
                                    aria-label=".form-select-sm example"
                                    name='pendapatan_sub'
                                    value={pendapatan_sub}
                                    onChange={(e : any)=>setPendapatanSub(e.target.value)}
                                    >
                                    <option value={0}>non active</option>
                                    <option value={1}>active</option>
                                </FormSelect>
                            </div>
                        </div>
                        <div>
                            <div className="font-medium whitespace-nowrap">
                                Pendapatan Lain Sub
                            </div>
                            <div className="mt-1  text-slate-500 pr-6">
                                <FormSelect
                                    formSelectSize="sm"
                                    aria-label=".form-select-sm example"
                                    name='pendapatan_lain_sub'
                                    value={pendapatan_lain_sub}
                                    onChange={(e : any)=>setPendapatanLainSub(e.target.value)}
                                    >
                                    <option value={0}>non active</option>
                                    <option value={1}>active</option>
                                </FormSelect>
                            </div>
                        </div>
                        <div>
                            <div className="font-medium whitespace-nowrap">
                                Pendapatan Admin Sub
                            </div>
                            <div className="mt-1  text-slate-500 pr-6">
                                <FormSelect
                                    formSelectSize="sm"
                                    aria-label=".form-select-sm example"
                                    name='pendapatan_admin_sub'
                                    value={pendapatan_admin_sub}
                                    onChange={(e : any)=>setPendapatanAdminSub(e.target.value)}
                                    >
                                    <option value={0}>non active</option>
                                    <option value={1}>active</option>
                                </FormSelect>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                        <div>
                            <div className="font-medium whitespace-nowrap">
                                Attribute	
                            </div>
                            <div className="mt-1  text-slate-500 pr-6">
                                <FormSelect
                                    formSelectSize="sm"
                                    aria-label=".form-select-sm example"
                                    name='attribute'
                                    value={attribute}
                                    onChange={(e : any)=>setAttribute(e.target.value)}
                                    >
                                    <option value={0}>non active</option>
                                    <option value={1}>active</option>
                                </FormSelect>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                        <div>
                            <div className="font-medium whitespace-nowrap">
                                Setting	
                            </div>
                            <div className="mt-1  text-slate-500 pr-6">
                                <FormSelect
                                    formSelectSize="sm"
                                    aria-label=".form-select-sm example"
                                    name='setting'
                                    value={setting}
                                    onChange={(e : any)=>setSetting(e.target.value)}
                                    >
                                    <option value={0}>non active</option>
                                    <option value={1}>active</option>
                                </FormSelect>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            </div>
        </div>
        
    )
}

export default editViewPrivilege