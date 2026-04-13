import { useEffect, useState } from "react";
import { FormSelect } from "../../base-components/Form";
import Button from "../../base-components/Button";

import {
  resetPrivileges,
  createPrivileges,
} from "../../stores/features/privilegeSlice";
import { useDispatch, useSelector } from "react-redux";
import LoadingIcon from "../../base-components/LoadingIcon";

const CreatePrivilege = (props: any) => {
  const { title, changeEditPrivilege, datas, viewCreatePriviege } = props;

  const [privilege, setPrivilege] = useState<any>({
    user_uuid: null,
    dashboard: 0,
    edit_user_sub: 0,
    absen: 0,
    kalendar_sub: 0,
    absen_modal: 0,
    wfh_modal: 0,
    shift_modal: 0,
    on_site_modal: 0,
    absen_check: 0,
    admin_event: 0,
    perhitungan_absen: 0,
    pengajuan_koreksi_sub: 0,
    approval_koreksi_sub: 0,
    approval_all_koreksi_sub: 0,
    employees: 0,
    data_employee: 0,
    slip_gaji: 0,
    pendapatan_sub: 0,
    pendapatan_lain_sub: 0,
    pendapatan_admin_sub: 0,
    attribute: 0,
    setting: 0,
    overtime: 0,
    overtime_user: 0,
    overtime_superior: 0,
    overtime_assignor: 0,
    overtime_admin: 0,
    id_privilege: null,
  });

  const dispatch = useDispatch();

  const { data, isError, isSuccess, isLoading, message } = useSelector(
    (state: any) => state.privilege,
  );

  useEffect(() => {
    if (isSuccess && message) {
      if (!isLoading) {
        dispatch(resetPrivileges());
        changeEditPrivilege(false);
      }
    }
  }, [isSuccess, message]);

  const sumbitPrivilege = (e: any) => {
    e.preventDefault();
    try {
      dispatch(createPrivileges(privilege));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (datas && datas.uuid) {
      console.log(datas, "privilege create");
      setPrivilege({ ...privilege, user_uuid: datas.uuid });
    }
  }, [datas]);

  return (
    <div className={`${datas && datas.privilege_id !== null ? "hidden" : ""}`}>
      <div className={`p-5 box intro-y ${!viewCreatePriviege ? "hidden" : ""}`}>
        <form onSubmit={sumbitPrivilege}>
          <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
            <div className="text-base font-medium truncate">{title}</div>
            <div className="flex gap-2 justify-end w-full">
              <Button
                type="button"
                size="sm"
                variant="secondary"
                onClick={() => changeEditPrivilege(false)}
              >
                Cancel
              </Button>
              <Button type="submit" size="sm" variant="primary">
                {isLoading ? (
                  <LoadingIcon icon="rings" className="w-8 h-4" color="white" />
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-y-10 border-b border-slate-200/60">
              <div>
                <div className="font-medium whitespace-nowrap">dashboard</div>
                <div className="mt-1  text-slate-500 pr-6">
                  <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name="dashboard"
                    value={privilege.dashboard}
                    onChange={(e: any) =>
                      setPrivilege({ ...privilege, dashboard: e.target.value })
                    }
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
                    name="edit_user_sub"
                    value={privilege.edit_user_sub}
                    onChange={(e: any) =>
                      setPrivilege({
                        ...privilege,
                        edit_user_sub: e.target.value,
                      })
                    }
                  >
                    <option value={0}>non active</option>
                    <option value={1}>active</option>
                  </FormSelect>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60">
              <div>
                <div className="font-medium whitespace-nowrap">Absen</div>
                <div className="mt-1  text-slate-500 pr-6">
                  <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name="absen"
                    value={privilege.absen}
                    onChange={(e: any) =>
                      setPrivilege({ ...privilege, absen: e.target.value })
                    }
                  >
                    <option value={0}>non active</option>
                    <option value={1}>active</option>
                  </FormSelect>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60">
              <div>
                <div className="font-medium whitespace-nowrap">
                  Kalendar Sub
                </div>
                <div className="mt-1  text-slate-500 pr-6">
                  <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name="kalendar_sub"
                    value={privilege.kalendar_sub}
                    onChange={(e: any) =>
                      setPrivilege({
                        ...privilege,
                        kalendar_sub: e.target.value,
                      })
                    }
                  >
                    <option value={0}>non active</option>
                    <option value={1}>active</option>
                  </FormSelect>
                </div>
              </div>
              <div>
                <div className="font-medium whitespace-nowrap">Absen Modal</div>
                <div className="mt-1  text-slate-500 pr-6">
                  <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name="absen_modal"
                    value={privilege.absen_modal}
                    onChange={(e: any) =>
                      setPrivilege({
                        ...privilege,
                        absen_modal: e.target.value,
                      })
                    }
                  >
                    <option value={0}>non active</option>
                    <option value={1}>active</option>
                  </FormSelect>
                </div>
              </div>
              <div>
                <div className="font-medium whitespace-nowrap">Wfa Modal</div>
                <div className="mt-1  text-slate-500 pr-6">
                  <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name="wfh_modal"
                    value={privilege.wfh_modal}
                    onChange={(e: any) =>
                      setPrivilege({ ...privilege, wfh_modal: e.target.value })
                    }
                  >
                    <option value={0}>non active</option>
                    <option value={1}>active</option>
                  </FormSelect>
                </div>
              </div>
              <div>
                <div className="font-medium whitespace-nowrap">Shift Modal</div>
                <div className="mt-1  text-slate-500 pr-6">
                  <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name="shift_modal"
                    value={privilege.shift_modal}
                    onChange={(e: any) =>
                      setPrivilege({
                        ...privilege,
                        shift_modal: e.target.value,
                      })
                    }
                  >
                    <option value={0}>non active</option>
                    <option value={1}>active</option>
                  </FormSelect>
                </div>
              </div>
              <div>
                <div className="font-medium whitespace-nowrap">
                  On Site Modal
                </div>
                <div className="mt-1  text-slate-500 pr-6">
                  <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name="on_site_modal"
                    value={privilege.on_site_modal}
                    onChange={(e: any) =>
                      setPrivilege({
                        ...privilege,
                        on_site_modal: e.target.value,
                      })
                    }
                  >
                    <option value={0}>non active</option>
                    <option value={1}>active</option>
                  </FormSelect>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60">
              <div>
                <div className="font-medium whitespace-nowrap">Absen Check</div>
                <div className="mt-1  text-slate-500 pr-6">
                  <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name="absen_check"
                    value={privilege.absen_check}
                    onChange={(e: any) =>
                      setPrivilege({
                        ...privilege,
                        absen_check: e.target.value,
                      })
                    }
                  >
                    <option value={0}>non active</option>
                    <option value={1}>active</option>
                  </FormSelect>
                </div>
              </div>
              <div>
                <div className="font-medium whitespace-nowrap">Admin Event</div>
                <div className="mt-1  text-slate-500 pr-6">
                  <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name="admin_event"
                    value={privilege.admin_event}
                    onChange={(e: any) =>
                      setPrivilege({
                        ...privilege,
                        admin_event: e.target.value,
                      })
                    }
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
                    name="perhitungan_absen"
                    value={privilege.perhitungan_absen}
                    onChange={(e: any) =>
                      setPrivilege({
                        ...privilege,
                        perhitungan_absen: e.target.value,
                      })
                    }
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
                    name="pengajuan_koreksi_sub"
                    value={privilege.pengajuan_koreksi_sub}
                    onChange={(e: any) =>
                      setPrivilege({
                        ...privilege,
                        pengajuan_koreksi_sub: e.target.value,
                      })
                    }
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
                    name="approval_koreksi_sub"
                    value={privilege.approval_koreksi_sub}
                    onChange={(e: any) =>
                      setPrivilege({
                        ...privilege,
                        approval_koreksi_sub: e.target.value,
                      })
                    }
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
                    name="approval_all_koreksi_sub"
                    value={privilege.approval_all_koreksi_sub}
                    onChange={(e: any) =>
                      setPrivilege({
                        ...privilege,
                        approval_all_koreksi_sub: e.target.value,
                      })
                    }
                  >
                    <option value={0}>non active</option>
                    <option value={1}>active</option>
                  </FormSelect>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60">
              <div>
                <div className="font-medium whitespace-nowrap">Employees</div>
                <div className="mt-1  text-slate-500 pr-6">
                  <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name="employees"
                    value={privilege.employees}
                    onChange={(e: any) =>
                      setPrivilege({
                        ...privilege,
                        employees: e.target.value,
                      })
                    }
                  >
                    <option value={0}>non active</option>
                    <option value={1}>active</option>
                  </FormSelect>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60">
              <div>
                <div className="font-medium whitespace-nowrap">
                  Data Employee
                </div>
                <div className="mt-1  text-slate-500 pr-6">
                  <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name="data_employee"
                    value={privilege.data_employee}
                    onChange={(e: any) =>
                      setPrivilege({
                        ...privilege,
                        data_employee: e.target.value,
                      })
                    }
                  >
                    <option value={0}>non active</option>
                    <option value={1}>active</option>
                  </FormSelect>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60">
              <div>
                <div className="font-medium whitespace-nowrap">Slip Gaji</div>
                <div className="mt-1  text-slate-500 pr-6">
                  <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name="slip_gaji"
                    value={privilege.slip_gaji}
                    onChange={(e: any) =>
                      setPrivilege({
                        ...privilege,
                        slip_gaji: e.target.value,
                      })
                    }
                  >
                    <option value={0}>non active</option>
                    <option value={1}>active</option>
                  </FormSelect>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10">
              <div>
                <div className="font-medium whitespace-nowrap">
                  Pendapatan Sub
                </div>
                <div className="mt-1  text-slate-500 pr-6">
                  <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name="pendapatan_sub"
                    value={privilege.pendapatan_sub}
                    onChange={(e: any) =>
                      setPrivilege({
                        ...privilege,
                        pendapatan_sub: e.target.value,
                      })
                    }
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
                    name="pendapatan_lain_sub"
                    value={privilege.pendapatan_lain_sub}
                    onChange={(e: any) =>
                      setPrivilege({
                        ...privilege,
                        pendapatan_lain_sub: e.target.value,
                      })
                    }
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
                    name="pendapatan_admin_sub"
                    value={privilege.pendapatan_admin_sub}
                    onChange={(e: any) =>
                      setPrivilege({
                        ...privilege,
                        pendapatan_admin_sub: e.target.value,
                      })
                    }
                  >
                    <option value={0}>non active</option>
                    <option value={1}>active</option>
                  </FormSelect>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60">
              <div>
                <div className="font-medium whitespace-nowrap">Overtime</div>
                <div className="mt-1  text-slate-500 pr-6">
                  <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name="overtime"
                    value={privilege.overtime}
                    onChange={(e: any) =>
                      setPrivilege({
                        ...privilege,
                        overtime: e.target.value,
                      })
                    }
                  >
                    <option value={0}>non active</option>
                    <option value={1}>active</option>
                  </FormSelect>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10">
              <div>
                <div className="font-medium whitespace-nowrap">
                  Overtime User
                </div>
                <div className="mt-1  text-slate-500 pr-6">
                  <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name="pendapatan_sub"
                    value={privilege.overtime_user}
                    onChange={(e: any) =>
                      setPrivilege({
                        ...privilege,
                        overtime_user: e.target.value,
                      })
                    }
                  >
                    <option value={0}>non active</option>
                    <option value={1}>active</option>
                  </FormSelect>
                </div>
              </div>
              <div>
                <div className="font-medium whitespace-nowrap">
                  Overtime Superior
                </div>
                <div className="mt-1  text-slate-500 pr-6">
                  <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name="overtime_superior"
                    value={privilege.overtime_superior}
                    onChange={(e: any) =>
                      setPrivilege({
                        ...privilege,
                        overtime_superior: e.target.value,
                      })
                    }
                  >
                    <option value={0}>non active</option>
                    <option value={1}>active</option>
                  </FormSelect>
                </div>
              </div>
              <div>
                <div className="font-medium whitespace-nowrap">
                  Overtime Assignor
                </div>
                <div className="mt-1  text-slate-500 pr-6">
                  <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name="overtime_assignor"
                    value={privilege.overtime_assignor}
                    onChange={(e: any) =>
                      setPrivilege({
                        ...privilege,
                        overtime_assignor: e.target.value,
                      })
                    }
                  >
                    <option value={0}>non active</option>
                    <option value={1}>active</option>
                  </FormSelect>
                </div>
              </div>
              <div>
                <div className="font-medium whitespace-nowrap">
                  Overtime Admin
                </div>
                <div className="mt-1  text-slate-500 pr-6">
                  <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name="overtime_assignor"
                    value={privilege.overtime_admin}
                    onChange={(e: any) =>
                      setPrivilege({
                        ...privilege,
                        overtime_admin: e.target.value,
                      })
                    }
                  >
                    <option value={0}>non active</option>
                    <option value={1}>active</option>
                  </FormSelect>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60">
              <div>
                <div className="font-medium whitespace-nowrap">Attribute</div>
                <div className="mt-1  text-slate-500 pr-6">
                  <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name="attribute"
                    value={privilege.attribute}
                    onChange={(e: any) =>
                      setPrivilege({
                        ...privilege,
                        attribute: e.target.value,
                      })
                    }
                  >
                    <option value={0}>non active</option>
                    <option value={1}>active</option>
                  </FormSelect>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60">
              <div>
                <div className="font-medium whitespace-nowrap">Setting</div>
                <div className="mt-1  text-slate-500 pr-6">
                  <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name="setting"
                    value={privilege.setting}
                    onChange={(e: any) =>
                      setPrivilege({
                        ...privilege,
                        setting: e.target.value,
                      })
                    }
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
  );
};

export default CreatePrivilege;
