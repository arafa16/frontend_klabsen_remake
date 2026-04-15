import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Menu, Slideover } from "../../base-components/Headless";
import { FormLabel } from "../../base-components/Form";
import Lucide from "../../base-components/Lucide";
import Button from "../../base-components/Button";
import { useDispatch, useSelector } from "react-redux";
import { getInOutsById, resetInOut2 } from "../../stores/features/inOut2Slice";
import { viewKoreksiByDate } from "../koreksi/koreksiTable";
import { useNavigate } from "react-router-dom";

export const SlideOverDateAdmin = (datas: any) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<any>(null);
  const [dataResult, setDataResult] = useState<any>([]);
  const [user, setUser] = useState<any>([]);
  const [message, setMessage] = useState<any>(null);
  const [keterangan, setKeterangan] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: dataInOut,
    isSuccess,
    isLoading,
    isError,
  } = useSelector((state: any) => state.inOut2);

  useEffect(() => {
    if (dataInOut && isSuccess) {
      if (!isLoading) {
        setDataResult(dataInOut && dataInOut.datas && dataInOut.datas.data);
        dispatch(resetInOut2());
        setDataKoreksi(
          dataInOut &&
            dataInOut.datas &&
            dataInOut.datas.data &&
            dataInOut.datas.data.koreksis,
        );
      }
    }
  }, [dataInOut, isSuccess, isLoading]);

  useEffect(() => {
    if (data && data.event && data.event.id !== null) {
      dispatch(getInOutsById({ uuid: data.event.id }));
    }
  }, [data]);

  const clouseSlice = () => {
    setOpen(false);
    setData(null);
    setDataResult([]);
    setDataKoreksi([]);
  };

  //view koreksi
  const {
    showData,
    setDatas: setDataKoreksi,
    set_link_back,
  } = viewKoreksiByDate();

  useEffect(() => {
    if (datas.link_back) {
      set_link_back(datas.link_back);
    }
  }, [datas.link_back]);

  // useEffect(() => {
  //   if (datas.link_back) {
  //     set_link_back(datas.link_back);
  //     console.log("link_back", datas.link_back);
  //   }
  // }, [datas.link_back]);

  const clickViewMaps = () => {
    if (dataResult?.latitude && dataResult?.longitude) {
      const url = `https://www.google.com/maps?q=${dataResult?.latitude},${dataResult?.longitude}`;
      window.open(url, "_blank");
    } else {
      alert("Data lokasi tidak tersedia");
    }
  };

  const form = (
    <div>
      {/* BEGIN: Slide Over Content */}
      <Slideover
        // backdrop="static"
        open={open}
        onClose={() => {
          clouseSlice();
        }}
      >
        {/* BEGIN: Slide Over Header */}
        <Slideover.Panel>
          <a
            onClick={(event: React.MouseEvent) => {
              event.preventDefault();
              clouseSlice();
            }}
            className="absolute top-0 left-0 right-auto mt-4 -ml-12"
            href="#"
          >
            <Lucide icon="X" className="w-8 h-8 text-slate-400" />
          </a>

          <Slideover.Title>
            <h2 className="mr-auto text-base font-medium">Form Koreksi</h2>
            <Button
              variant="primary"
              size="sm"
              type="button"
              onClick={() => datas.clickEditEvent(data)}
            >
              Edit
            </Button>
          </Slideover.Title>
          {/* END: Slide Over Header */}
          {/* form koreksi */}
          <Slideover.Description>
            <div className={`grid grid-cols-1 md:grid-cols-1 gap-6 mb-10`}>
              <div>
                <FormLabel htmlFor="modal-form-1">Tanggal</FormLabel>
                <div>
                  :{" "}
                  {dataResult &&
                    dataResult.tanggal_mulai &&
                    dayjs(dataResult && dataResult.tanggal_mulai).format(
                      "YYYY-MM-DD",
                    )}
                </div>
              </div>
              <div className="">
                <FormLabel htmlFor="modal-form-2">Jam</FormLabel>
                <div>
                  :{" "}
                  {dataResult &&
                    dataResult.tanggal_mulai &&
                    dayjs(dataResult && dataResult.tanggal_mulai).format(
                      "HH:mm:ss",
                    )}
                </div>
              </div>
              <div className="">
                <FormLabel htmlFor="modal-form-3">Tipe Absen</FormLabel>
                <div>
                  :{" "}
                  {dataResult &&
                    dataResult.tipe_absen &&
                    dataResult.tipe_absen.name}
                </div>
              </div>
              <div className="">
                <FormLabel htmlFor="modal-form-3">Jam Operasional</FormLabel>
                <div>
                  :{" "}
                  {dataResult &&
                    dataResult.jam_operasional &&
                    dataResult.jam_operasional.name}
                </div>
                <div className="mx-2">
                  {dataResult &&
                    dataResult.jam_operasional &&
                    dataResult.jam_operasional.jam_masuk}{" "}
                  -{" "}
                  {dataResult &&
                    dataResult.jam_operasional &&
                    dataResult.jam_operasional.jam_pulang}
                </div>
              </div>
              <div className="">
                <FormLabel htmlFor="modal-form-3">Lat, Long</FormLabel>
                <div onClick={() => navigate(``)}>
                  : {dataResult && dataResult.latitude},
                  {dataResult && dataResult.longitude}
                </div>
                <div
                  className={`mt-2 ${dataResult?.latitude && dataResult?.longitude ? "" : "hidden"}`}
                >
                  <Button
                    size="sm"
                    variant="outline-secondary"
                    type="button"
                    onClick={clickViewMaps}
                  >
                    view maps
                  </Button>
                </div>
              </div>
            </div>
            {/* show data koreksi */}
            <div
              className={`${dataResult.koreksis && dataResult.koreksis.length !== 0 ? "" : "hidden"}`}
            >
              {showData}
            </div>
            {/* show data koreksi */}
          </Slideover.Description>
          {/* end: form koreksi */}
          {/* BEGIN: Slide Over Footer */}
          <Slideover.Footer
            className={`${dataResult.koreksis && dataResult.koreksis.length === 0 ? "" : "hidden"}`}
          >
            <Button
              variant="outline-secondary"
              type="button"
              onClick={() => {
                setOpen(false);
              }}
              className="w-20 mr-1"
              size="sm"
            >
              Cancel
            </Button>
          </Slideover.Footer>
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
    data,
    setData,
    user,
    setUser,
    keterangan,
    setKeterangan,
    message,
    setMessage,
  };
};
