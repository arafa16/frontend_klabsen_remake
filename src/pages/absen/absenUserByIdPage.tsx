import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { getAbsenById } from "../../features/absen/absenByUser";
import { getMessageShow } from "../../features/messageShow";
import { eventDataDate } from "../../features/event/event";
import { useParams, useNavigate } from "react-router-dom";

import { SlideOverEditDate } from "../../features/absen/SlideOverEditDate";
import { SlideOverEditEvent } from "../../features/absen/SlideOverEditEvent";
import CalendarAdmin from "../../components/calendar/calendarAdmin";
import { getDataUserById } from "../../features/user/user";
import { FormSelect } from "../../base-components/Form";
import Button from "../../base-components/Button";

const AbsenUserByIdPage = () => {
  const { uuid } = useParams();
  const [selectedYear, setSelectedYear] = useState("");

  const [message, setMessage] = useState<any>(null);
  const [dateSetting, setDateSetting] = useState(
    dayjs(Date.now()).format("YYYY-MM-DD")
  );

  const navigate = useNavigate();

  //get data event
  const { datas: dataEventInternal } = eventDataDate();

  const {
    dataResult: dataAbsen,
    dataUser,
    isLoading: isLoadingAbsen,
  } = getAbsenById(uuid, selectedYear);

  const { dataResult, reload } = getDataUserById({ id: uuid });

  const {
    message: messageCreate,
    form: formDate,
    setOpen,
    setDataInfo,
    setDataUser,
  } = SlideOverEditDate({ uuid });

  const {
    message: messageUpdate,
    form: formUpdate,
    setOpen: setOpenUpdate,
    setDataInfo: setDataInfoUpdate,
    getDataEvent,
  } = SlideOverEditEvent({ uuid });

  useEffect(() => {
    setMessage(messageCreate);
  }, [messageCreate]);

  useEffect(() => {
    setMessage(messageUpdate);
  }, [messageUpdate]);

  //message
  const messageShow = getMessageShow(message);

  const clickEvent = async (info: any) => {
    if (info.groupId !== "event") {
      getDataEvent(info.publicId);
      setOpenUpdate(true);
    }
  };

  //click date
  const clickDate = (info: any) => {
    setOpen(true);
    setDataInfo(info);
    setDataUser(dataResult);
  };

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
      {formDate}
      {formUpdate}
      <div className="grid grid-cols-12 gap-5 mt-5 text-xs">
        <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
          <div className="p-5 box">
            <CalendarAdmin
              dataAbsen={dataAbsen}
              dataEventInternal={dataEventInternal}
              clickEvent={clickEvent}
              clickDate={clickDate}
              dateSetting={dateSetting}
            />
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

export default AbsenUserByIdPage;
