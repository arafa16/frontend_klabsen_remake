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

import CalendarAdmin from "../../components/calendar/calendarAdmin";
import Button from "../../base-components/Button";
import { FormSelect } from "../../base-components/Form";

const viewAbsenByAtasan = () => {
  const { uuid } = useParams();
  const [selectedYear, setSelectedYear] = useState("");

  const [message, setMessage] = useState<any>(null);
  const [dateSetting, setDateSetting] = useState(
    dayjs(Date.now()).format("YYYY-MM-DD"),
  );

  const navigate = useNavigate();

  //get data event
  const { datas: dataEventInternal } = eventDataDate();

  const {
    dataResult: dataAbsen,
    dataUser,
    isLoading: isLoadingAbsen,
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

  return (
    <>
      {messageShow}
      <div className="grid grid-cols-12 gap-5 mt-5 text-xs">
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
        <div className="col-span-4">
          <div className=" grid grid-cols-12">
            <div className="col-span-6">
              <Button variant="secondary" size="sm" className="w-full mb-2">
                {dataUser && dataUser.name}
              </Button>
            </div>
            <div className="col-span-6 grid justify-end">
              <div>
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
            <div className="col-span-6">
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
            <div className="col-span-12 box px-2 py-2">
              <div className="col-span-12 flex justify-end">
                <Lucide
                  icon="Edit"
                  className="w-4 h-4 ml-auto z-30 text-blue-500 cursor-pointer hover:text-yellow-500"
                />
              </div>
              <div className="col-span-12">
                <div className="font-medium whitespace-nowrap">Absen On </div>
                <div className="mt-1 text-slate-500">
                  {true ? "active" : "non active"}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 xl:col-span-2 2xl:col-span-2 flex flex-col gap-2">
          <Button variant="secondary" size="sm">
            {dataUser && dataUser.name}
          </Button>
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
        <div className="col-span-12 xl:col-span-2">
          <div className="flex justify-end">
            <Button variant="primary" size="sm" onClick={() => navigate(-1)}>
              Back
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default viewAbsenByAtasan;
