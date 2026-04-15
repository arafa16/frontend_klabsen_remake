import { Slideover } from "../../base-components/Headless";
import { FormLabel, FormInput, FormSelect } from "../../base-components/Form";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import { useEffect, useState } from "react";
import {
  getPelanggarans,
  resetPelanggaran,
} from "../../stores/features/pelanggaranSlice";
import {
  getTipeAbsens,
  resetTipeAbsen,
} from "../../stores/features/tipeAbsenSlice";
import {
  getStatusInout,
  resetStatusInout,
} from "../../stores/features/statusInoutSlice";
import {
  getJamOperasionals,
  resetJamOperasional,
} from "../../stores/features/jamOperasionalSlice";
import { useDispatch, useSelector } from "react-redux";
import { getInOutsByUser, resetInOuts } from "../../stores/features/inOutSlice";
import dayjs from "dayjs";
import {
  updateInOuts,
  getInOutsById,
  deleteInOuts,
  resetInOut2,
} from "../../stores/features/inOut2Slice";

export const SlideOverEditEvent = (props: any) => {
  const { uuid, clickCloseSlide } = props;

  const [open, setOpen] = useState(false);
  const [dataInfo, setDataInfo] = useState<any>(null);
  const [message, setMessage] = useState<any>(null);

  const [attributes, set_attributes] = useState({
    data_pelanggaran: [],
    data_tipe_absen: [],
    data_status_inout: [],
    data_jam_operasional: [],
  });

  // const [dataPelanggaran, setDataPelanggaran] = useState([]);
  // const [dataTipeAbsen, setDataTipeAbsen] = useState([]);
  // const [dataStatusInOut, setDataStatusInOut] = useState([]);
  // const [dataJamOperasional, setDataJamOperasional] = useState([]);

  //data form
  const [value_form, set_value_form] = useState({
    uuid: "",
    user_uuid: "",
    time: "",
    tanggal_mulai: "",
    tanggal_selesai: "",
    pelanggaran_uuid: "",
    tipe_absen_uuid: "",
    status_inout_uuid: "",
    jam_operasional_uuid: "",
    latitude: "",
    longitude: "",
    is_absen_web: 0,
  });

  const dispatch = useDispatch();

  const {
    data: pelanggaran,
    isSuccess: isPelanggaranSuccess,
    isLoading: isPelanggaranLoading,
  } = useSelector((state: any) => state.pelanggaran);

  const {
    data: tipeAbsen,
    isSuccess: isTipeAbsenSuccess,
    isLoading: isTipeAbsenLoading,
  } = useSelector((state: any) => state.tipeAbsen);

  const {
    data: statusInout,
    isSuccess: isStatusInoutSuccess,
    isLoading: isStatusInoutLoading,
  } = useSelector((state: any) => state.statusInout);

  const {
    data: jamOperasional,
    isSuccess: isJamOperasionalSuccess,
    isLoading: isJamOperasionalLoading,
  } = useSelector((state: any) => state.jamOperasional);

  const {
    data: inOut2,
    message: messageInOut2,
    isSuccess: isInOutSuccess2,
    isLoading: isInOutLoading2,
  } = useSelector((state: any) => state.inOut2);

  useEffect(() => {
    if (pelanggaran && isPelanggaranSuccess) {
      if (!isPelanggaranLoading) {
        set_attributes((prevState) => ({
          ...prevState,
          data_pelanggaran: pelanggaran?.datas?.data,
        }));
        resetPelanggaran();
      }
    }
  }, [pelanggaran, isPelanggaranSuccess, isPelanggaranLoading]);

  console.log("attributes", attributes);

  useEffect(() => {
    if (tipeAbsen && isTipeAbsenSuccess) {
      if (!isTipeAbsenLoading) {
        set_attributes((prevState) => ({
          ...prevState,
          data_tipe_absen: tipeAbsen?.datas?.data,
        }));
        resetTipeAbsen();
      }
    }
  }, [tipeAbsen, isTipeAbsenSuccess, isTipeAbsenLoading]);

  useEffect(() => {
    if (isStatusInoutSuccess && statusInout) {
      if (!isStatusInoutLoading) {
        set_attributes((prevState) => ({
          ...prevState,
          data_status_inout: statusInout?.datas?.data,
        }));
        dispatch(resetStatusInout());
      }
    }
  }, [statusInout, isStatusInoutSuccess, isStatusInoutLoading]);

  useEffect(() => {
    if (isJamOperasionalSuccess && jamOperasional) {
      if (!isJamOperasionalLoading) {
        set_attributes((prevState) => ({
          ...prevState,
          data_jam_operasional: jamOperasional?.datas?.data,
        }));
        dispatch(resetJamOperasional());
      }
    }
  }, [jamOperasional, isJamOperasionalSuccess, isJamOperasionalLoading]);

  useEffect(() => {
    dispatch(getPelanggarans());
    dispatch(getTipeAbsens());
    dispatch(getStatusInout());
    dispatch(getJamOperasionals());
  }, []);

  const handleChangeValue = (data: any) => {
    set_value_form({
      ...value_form,
      uuid: data?.uuid,
      user_uuid: data?.user?.uuid,
      pelanggaran_uuid: data?.pelanggaran?.uuid,
      tipe_absen_uuid: data?.tipe_absen?.uuid,
      status_inout_uuid: data?.status_inout?.uuid,
      jam_operasional_uuid: data?.jam_operasional?.uuid,
      time: dayjs(data?.tanggal_mulai).format("HH:mm:ss"),
      tanggal_mulai: dayjs(data?.tanggal_mulai).format("YYYY-MM-DD HH:mm:ss"),
      tanggal_selesai: dayjs(data?.tanggal_selesai).format(
        "YYYY-MM-DD HH:mm:ss",
      ),
      is_absen_web: data?.is_absen_web,
      latitude: data?.latitude,
      longitude: data?.longitude,
    });
  };

  useEffect(() => {
    if (inOut2 && isInOutSuccess2) {
      if (!isInOutLoading2) {
        handleChangeValue(inOut2?.datas?.data);
        dispatch(resetInOut2());
      }
    }
  }, [inOut2, isInOutSuccess2, isInOutLoading2]);

  const getDataEvent = (uuid: any) => {
    dispatch(getInOutsById({ uuid }));
  };

  useEffect(() => {
    if (messageInOut2 && isInOutSuccess2) {
      if (!isInOutLoading2) {
        setMessage(messageInOut2);
        setOpen(false);
        dispatch(resetInOut2());
        dispatch(getInOutsByUser({ uuid }));
      }
    }
  }, [messageInOut2, isInOutSuccess2, isInOutLoading2]);

  const handleChangeTime = (time_data: any) => {
    const date_absen = dayjs(value_form?.tanggal_mulai).format("YYYY-MM-DD");
    const date_start = date_absen + " " + time_data;
    set_value_form({
      ...value_form,
      time: time_data,
      tanggal_mulai: dayjs(date_start).format("YYYY-MM-DD HH:mm:ss"),
    });
  };

  const submitForm = (e: any) => {
    e.preventDefault();
    dispatch(updateInOuts(value_form));
  };

  const clickDeleteEvent = (uuid: any) => {
    dispatch(deleteInOuts({ uuid }));
  };

  const form = (
    <div id="header-footer-slideover">
      {/* BEGIN: Slide Over Content */}
      <Slideover
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        {/* BEGIN: Slide Over Header */}
        <Slideover.Panel>
          <a
            onClick={(event: React.MouseEvent) => {
              event.preventDefault();
              setOpen(false);
            }}
            className="absolute top-0 left-0 right-auto mt-4 -ml-12"
            href="#"
          >
            <Lucide icon="X" className="w-8 h-8 text-slate-400" />
          </a>
          <Slideover.Title>
            <h2 className="mr-auto text-base font-medium">
              {dataInfo && dataInfo.user && dataInfo.user.name}
            </h2>
          </Slideover.Title>
          {/* END: Slide Over Header */}
          <form onSubmit={submitForm}>
            {/* BEGIN: Slide Over Body */}
            <Slideover.Description className="grid grid-cols-2 gap-3 md:grid-cols-1">
              <div className="mt-3">
                <FormLabel htmlFor="modal-form-6">Tipe Absen</FormLabel>
                <FormSelect
                  id="tipe_absen"
                  onChange={(e: any) =>
                    set_value_form({
                      ...value_form,
                      tipe_absen_uuid: e.target.value,
                    })
                  }
                  value={value_form.tipe_absen_uuid}
                  required
                >
                  <option value={""}></option>
                  {attributes?.data_tipe_absen?.map((data: any, key) => (
                    <option key={key} value={data?.uuid}>
                      {data?.name}
                    </option>
                  ))}
                </FormSelect>
              </div>
              <div className="mt-3">
                <FormLabel htmlFor="modal-form-1">Pukul</FormLabel>
                <FormInput
                  id="modal-form-1"
                  type="time"
                  step="1"
                  required
                  value={value_form.time}
                  onChange={(e: any) => handleChangeTime(e.target.value)}
                  placeholder=""
                />
              </div>
              <div className="mt-3">
                <FormLabel htmlFor="modal-form-2">Pelanggaran</FormLabel>
                <FormSelect
                  id="pelanggaran"
                  onChange={(e: any) =>
                    set_value_form({
                      ...value_form,
                      pelanggaran_uuid: e.target.value,
                    })
                  }
                  value={value_form.pelanggaran_uuid}
                  required
                >
                  <option value={""}></option>
                  {attributes?.data_pelanggaran?.map((data: any, key) => (
                    <option key={key} value={data?.uuid}>
                      {data?.name}
                    </option>
                  ))}
                </FormSelect>
              </div>
              <div className="mt-3">
                <FormLabel htmlFor="modal-form-2">Status</FormLabel>
                <FormSelect
                  id="status_inout"
                  onChange={(e: any) =>
                    set_value_form({
                      ...value_form,
                      status_inout_uuid: e.target.value,
                    })
                  }
                  value={value_form.status_inout_uuid}
                  required
                >
                  <option value={""}></option>
                  {attributes?.data_status_inout?.map((data: any, key) => (
                    <option key={key} value={data?.uuid}>
                      {data?.name}
                    </option>
                  ))}
                </FormSelect>
              </div>
              <div className="mt-3">
                <FormLabel htmlFor="modal-form-2">Jam Operasional</FormLabel>
                <FormSelect
                  id="jam_operasional"
                  onChange={(e: any) =>
                    set_value_form({
                      ...value_form,
                      jam_operasional_uuid: e.target.value,
                    })
                  }
                  value={value_form.jam_operasional_uuid}
                  required
                >
                  <option value={""}></option>
                  {attributes?.data_jam_operasional?.map((data: any, key) => (
                    <option key={key} value={data?.uuid}>
                      {data?.name}
                    </option>
                  ))}
                </FormSelect>
              </div>
              <div className="mt-3">
                <FormLabel htmlFor="modal-form-2">Absen By Web ?</FormLabel>
                <FormSelect
                  id="is_absen_web"
                  onChange={(e: any) =>
                    set_value_form({
                      ...value_form,
                      is_absen_web: e.target.value,
                    })
                  }
                  value={value_form.is_absen_web}
                  required
                >
                  <option value="1">Ya</option>
                  <option value="0">Tidak</option>
                </FormSelect>
              </div>
              <div className="mt-3">
                <FormLabel htmlFor="modal-form-1">Lat</FormLabel>
                <FormInput
                  id="modal-form-1"
                  type="text"
                  step="1"
                  required
                  value={value_form.latitude}
                  onChange={(e: any) =>
                    set_value_form({ ...value_form, latitude: e.target.value })
                  }
                  placeholder=""
                />
              </div>
              <div className="mt-3">
                <FormLabel htmlFor="modal-form-1">Log</FormLabel>
                <FormInput
                  id="modal-form-1"
                  type="text"
                  step="1"
                  required
                  value={value_form.longitude}
                  onChange={(e: any) =>
                    set_value_form({ ...value_form, longitude: e.target.value })
                  }
                  placeholder=""
                />
              </div>
            </Slideover.Description>
            {/* END: Slide Over Body */}
            {/* BEGIN: Slide Over Footer */}
            <Slideover.Footer>
              <Button
                variant="outline-danger"
                type="button"
                onClick={() => clickDeleteEvent(dataInfo && dataInfo.uuid)}
                className="w-20 mr-1"
              >
                Delete
              </Button>

              <Button
                variant="outline-secondary"
                type="button"
                onClick={() => {
                  clickCloseSlide();
                }}
                className="w-20 mr-1"
              >
                Cancel
              </Button>
              <Button variant="primary" type="submit" className="w-20">
                Submit
              </Button>
            </Slideover.Footer>
          </form>
        </Slideover.Panel>
        {/* END: Slide Over Footer */}
      </Slideover>
      {/* END: Slide Over Content */}
    </div>
  );

  return {
    form,
    open,
    setOpen,
    dataInfo,
    setDataInfo,
    message,
    getDataEvent,
  };
};
