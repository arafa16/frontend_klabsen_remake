import { useEffect, useState } from "react";
// import CalendarUser from "../../components/calendar/calendarUser";
import dayjs from "dayjs";
import Lucide from "../../base-components/Lucide";
// import { SlideOverDateKoreksiUser } from '../../features/absen/SlideOverDateKoreksiUser';
// import { SlideOverDate } from '../../features/absen/SlideOverDate';
// import { getMeAuth } from "../../features/auth/meAuth";
import { getAbsenById } from "../../features/absen/absenByUser";
import { getMessageShow } from "../../features/messageShow";
import { eventDataDate } from "../../features/event/event";
import { useNavigate, useParams } from "react-router-dom";
import {
  resetPrivileges,
  updatePrivileges,
} from "../../stores/features/privilegeSlice";

import CalendarAdmin from "../../components/calendar/calendarAdmin";
import Button from "../../base-components/Button";
import { FormSelect } from "../../base-components/Form";

import { useSelector, useDispatch } from "react-redux";

const viewAbsenByAtasan = () => {
  const { uuid } = useParams();
  const [selectedYear, setSelectedYear] = useState("");
  const [formIsActive, setFormIsActive] = useState(false);

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

  const [message, setMessage] = useState<any>(null);
  const [dateSetting, setDateSetting] = useState(
    dayjs(Date.now()).format("YYYY-MM-DD"),
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //get data event
  const { datas: dataEventInternal } = eventDataDate();

  const {
    dataResult: dataAbsen,
    dataUser,
    isLoading: isLoadingAbsen,
    reload: reloadAbsen,
  } = getAbsenById(uuid, selectedYear);

  //message
  const messageShow = getMessageShow(message);

  // Mendapatkan tahun saat ini
  const currentYear = new Date().getFullYear();

  // Membuat array tahun dari 2 tahun lalu hingga sekarang
  const years = [];
  for (let i = 0; i <= 1; i++) {
    years.push(currentYear - i);
  }

  // Handler saat nilai select berubah
  const handleYearChange = (event: any) => {
    setSelectedYear(event.target.value);
  };

  useEffect(() => {
    if (dataUser) {
      setPrivilege({
        on_site_modal: dataUser?.privilege?.on_site_modal ? 1 : 0,
        ...privilege,
      });
    }
  }, [dataUser]);

  //privilege
  const {
    data,
    isError,
    isSuccess,
    isLoading,
    message: messagePrivilege,
  } = useSelector((state: any) => state.privilege);

  useEffect(() => {
    console.log("data user", dataUser);
    if (dataUser && dataUser.privilege_id !== null) {
      setPrivilege({
        uuid: dataUser?.privilege?.uuid,
        dashboard: dataUser?.privilege?.dashboard ? 1 : 0,
        edit_user_sub: dataUser?.privilege?.edit_user_sub ? 1 : 0,
        absen: dataUser?.privilege?.absen ? 1 : 0,
        kalendar_sub: dataUser?.privilege?.kalendar_sub ? 1 : 0,
        absen_modal: dataUser?.privilege?.absen_modal ? 1 : 0,
        wfh_modal: dataUser?.privilege?.wfh_modal ? 1 : 0,
        shift_modal: dataUser?.privilege?.shift_modal ? 1 : 0,
        on_site_modal: dataUser?.privilege?.on_site_modal ? 1 : 0,
        absen_check: dataUser?.privilege?.absen_check ? 1 : 0,
        admin_event: dataUser?.privilege?.admin_event ? 1 : 0,
        perhitungan_absen: dataUser?.privilege?.perhitungan_absen ? 1 : 0,
        pengajuan_koreksi_sub: dataUser?.privilege?.pengajuan_koreksi_sub
          ? 1
          : 0,
        approval_koreksi_sub: dataUser?.privilege?.approval_koreksi_sub ? 1 : 0,
        approval_all_koreksi_sub: dataUser?.privilege?.approval_all_koreksi_sub
          ? 1
          : 0,
        employees: dataUser?.privilege?.employees ? 1 : 0,
        data_employee: dataUser?.privilege?.data_employee ? 1 : 0,
        slip_gaji: dataUser?.privilege?.slip_gaji ? 1 : 0,
        pendapatan_sub: dataUser?.privilege?.pendapatan_sub ? 1 : 0,
        pendapatan_lain_sub: dataUser?.privilege?.pendapatan_lain_sub ? 1 : 0,
        pendapatan_admin_sub: dataUser?.privilege?.pendapatan_admin_sub ? 1 : 0,
        attribute: dataUser?.privilege?.attribute ? 1 : 0,
        setting: dataUser?.privilege?.setting ? 1 : 0,
        overtime: dataUser?.privilege?.overtime ? 1 : 0,
        overtime_user: dataUser?.privilege?.overtime_user ? 1 : 0,
        overtime_superior: dataUser?.privilege?.overtime_superior ? 1 : 0,
        overtime_assignor: dataUser?.privilege?.overtime_assignor ? 1 : 0,
        overtime_admin: dataUser?.privilege?.overtime_admin ? 1 : 0,
        id_privilege: dataUser?.privilege?.id,
      });
    }
  }, [dataUser]);

  useEffect(() => {
    if (isSuccess && messagePrivilege) {
      if (!isLoading) {
        dispatch(resetPrivileges());
        reloadAbsen();
        setFormIsActive(false);
      }
    }
    if (isError && messagePrivilege) {
      if (!isLoading) {
        dispatch(resetPrivileges());
        setMessage(messagePrivilege);
      }
    }
  }, [isSuccess, messagePrivilege, isLoading]);

  const sumbitPrivilege = (e: any) => {
    e.preventDefault();
    dispatch(updatePrivileges(privilege));
  };

  return (
    <>
      {messageShow}
      <div className="grid grid-cols-12 gap-5 mt-5 text-xs mb-20">
        <div className="col-span-12 grid justify-end">
          <div className="block md:hidden">
            <Button variant="primary" size="sm" onClick={() => navigate(-1)}>
              Back
            </Button>
          </div>
        </div>
        <div className="col-span-12 xl:col-span-8">
          <div className="p-5 box">
            <CalendarAdmin
              dataAbsen={dataAbsen}
              dataEventInternal={dataEventInternal}
              clickEvent=""
              clickDate=""
              dateSetting={dateSetting}
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6">
              <Button variant="secondary" size="sm" className="w-full mb-2">
                {dataUser && dataUser.name}
              </Button>
            </div>
            <div className="col-span-6 grid justify-end">
              <div className="hidden md:block">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => navigate(-1)}
                >
                  Back
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 mb-4">
            <div className="col-span-12 md:col-span-6">
              <div className="">
                <FormSelect
                  formSelectSize="sm"
                  aria-label=".form-select-sm example"
                  name="selectedYear"
                  value={selectedYear}
                  onChange={handleYearChange}
                >
                  <option value="">-- Pilih Tahun --</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option> // Memetakan array tahun ke option
                  ))}
                </FormSelect>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 box px-2 py-2">
              <div className="col-span-12 flex justify-end">
                <Lucide
                  icon="Edit"
                  className={`${!formIsActive ? "block" : "hidden"} w-4 h-4 ml-auto z-30 text-blue-500 cursor-pointer hover:text-yellow-500`}
                  onClick={() => setFormIsActive(!formIsActive)}
                />
                <Lucide
                  icon="X"
                  className={`${formIsActive ? "block" : "hidden"} w-4 h-4 ml-auto z-30 text-blue-500 cursor-pointer hover:text-yellow-500`}
                  onClick={() => setFormIsActive(!formIsActive)}
                />
              </div>
              <div
                className={`col-span-12 ${!formIsActive ? "block" : "hidden"}`}
              >
                <div className="font-medium whitespace-nowrap mb-2">
                  Absen On Site{" "}
                </div>
                <div className="mt-1 text-slate-500">
                  {dataUser?.privilege?.on_site_modal ? "active" : "non active"}
                </div>
              </div>
              <div
                className={`col-span-12 ${formIsActive ? "block" : "hidden"}`}
              >
                <div className="font-medium whitespace-nowrap mb-2">
                  Absen On Site{" "}
                </div>
                <div className="mt-1 text-slate-500 mb-2">
                  <form id="form_privilege" onSubmit={sumbitPrivilege}>
                    <FormSelect
                      formSelectSize="sm"
                      aria-label=".form-select-sm example"
                      name="attribute"
                      value={privilege.on_site_modal}
                      onChange={(e: any) =>
                        setPrivilege({
                          ...privilege,
                          on_site_modal: Number(e.target.value),
                        })
                      }
                    >
                      <option value={0}>non active</option>
                      <option value={1}>active</option>
                    </FormSelect>
                  </form>
                </div>
                <div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="sm"
                    className="w-full"
                    form="form_privilege"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default viewAbsenByAtasan;
