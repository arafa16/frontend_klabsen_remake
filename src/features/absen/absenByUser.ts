import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getInOutsByUser,
  createInOutsByAbsenWeb,
  resetInOuts,
} from "../../stores/features/inOutSlice";
import dayjs from "dayjs";
import { useSearchParams } from "react-router-dom";
import { get } from "lodash";

export const getAbsenByUser = (datas: any) => {
  const dispatch = useDispatch();
  const [dataResult, setDataResult] = useState<any>([]);
  const [message, setMessage] = useState<any>(null);

  const {
    data,
    message: messageInOut,
    isSuccess,
    isLoading,
    isError,
  } = useSelector((state: any) => state.inOut);

  useEffect(() => {
    if (data && isSuccess) {
      if (!isLoading) {
        setDataResult(data && data.datas && data.datas.data);
        dispatch(resetInOuts());
      }
    }
  }, [data, isSuccess, isLoading]);

  useEffect(() => {
    if (datas.uuid !== undefined) {
      dispatch(getInOutsByUser({ uuid: datas.uuid }));
    }
  }, [datas]);

  const reload = () => {
    if (datas.uuid !== undefined) {
      dispatch(getInOutsByUser({ uuid: datas.uuid }));
    }
  };

  useEffect(() => {
    if (messageInOut && isSuccess) {
      if (!isLoading) {
        setMessage(messageInOut);
        dispatch(resetInOuts());
        dispatch(getInOutsByUser({ uuid: datas.uuid }));
      }
    }
  }, [messageInOut, isSuccess, isLoading]);

  const clickAbsen = (data: any) => {
    const dateNow = dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss");
    dispatch(
      createInOutsByAbsenWeb({
        user_uuid: data.uuid,
        tanggal_mulai: dateNow,
        tanggal_selesai: dateNow,
        latitude: data.latitude,
        longitude: data.longitude,
        code_tipe_absen: data.code_tipe_absen,
      }),
    );
  };

  return { dataResult, isLoading, clickAbsen, message, reload };
};

export const getAbsenById = (uuid: any, tahun: any, hide_koreksi: any) => {
  const dispatch = useDispatch();
  const [dataResult, setDataResult] = useState<any>([]);
  const [dataUser, setDataUser] = useState<any>({});

  const { data, message, isSuccess, isLoading, isError } = useSelector(
    (state: any) => state.inOut,
  );

  useEffect(() => {
    if (data && isSuccess) {
      if (!isLoading) {
        setDataResult(data && data.datas && data.datas.data);
        setDataUser(data && data.datas && data.datas.user);
        dispatch(resetInOuts());
      }
    }
  }, [data, isSuccess, isLoading]);

  const getInOut = (uuid: any, tahun: any, hide_koreksi: any) => {
    if (
      uuid !== undefined &&
      tahun !== undefined &&
      hide_koreksi !== undefined
    ) {
      dispatch(getInOutsByUser({ uuid, tahun, hide_koreksi }));
    }
  };

  useEffect(() => {
    getInOut(uuid, tahun, hide_koreksi);
  }, [uuid, tahun, hide_koreksi]);

  const reload = () => {
    getInOut(uuid, tahun, hide_koreksi);
  };

  return { dataResult, dataUser, isLoading, reload };
};
