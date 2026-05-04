import React, { useEffect, useState, useRef } from "react";
import PendapatanTableAdmin from "../../components/pendapatan/pendapatanTableAdmin";
import { getPendapatansTable } from "../../stores/features/pendapatanSlice";
import { useDispatch, useSelector } from "react-redux";
// import FormUploadPendapatan from '../../components/Form/Pendapatan/FormUploadPendapatan'
import Button from "../../base-components/Button";
import { formUploadPendapatan } from "../../features/pendapatan/formUploadPendapatan";
// import Notification from "../../base-components/Notification";
// import { NotificationElement } from "../../base-components/Notification";
import { FormInput, FormLabel, FormSelect } from "../../base-components/Form";
import { useNavigate } from "react-router-dom";
import { getDataPendapatansTable } from "../../features/pendapatan/pendapatan";
import { getMessageShow } from "../../features/messageShow";

const AdminPendapatan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [fromUpload, setFormUpload] = useState(false);
  // const [msg, setMsg] = useState("");
  // const [form_search, set_form_search] = useState<any>({
  //   group: "",
  //   periode: "",
  //   pendapatan_atas: "",
  // });

  const {
    reload,
    search,
    setSearch,
    dataResult: dataPendapatan,
    setDataResult,
    limit,
    setLimit,
    page,
    setPage,
    nextPage,
    prevPage,
    allPage,
    dataOption,
  } = getDataPendapatansTable();

  const {
    from: formPendapatan,
    isView: isViewPendapatan,
    setIsView: setIsViewPendapatan,
    message: messagePendapatan,
  } = formUploadPendapatan({ reload });

  const viewSlip = (data: any) => {
    if (data && data.tipe_pendapatan.code === "1") {
      navigate("/viewSlip/" + data.uuid);
    } else {
      navigate("/viewSlipBonus/" + data.uuid);
    }
  };

  //message
  const messageShow = getMessageShow(messagePendapatan);

  return (
    <div className="w-full">
      {messageShow}
      <div className="grid grid-cols-12 mt-5 gap-x-2 md:flex md:justify-end">
        <div className="col-start-1 col-span-6 row-span-2">
          {formPendapatan}
        </div>
        <div className="col-span-8 md:col-span-4">
          <FormInput
            formInputSize="sm"
            id="search"
            type="text"
            name="search"
            placeholder="search by name"
            className="w-full"
            value={search.pendatapan_atas}
            onChange={(e: any) =>
              setSearch({
                ...search,
                pendatapan_atas: e.target.value,
              })
            }
          />
        </div>
        <div className="col-span-4 md:col-span-4">
          <Button
            variant="primary"
            size="sm"
            className="w-full"
            onClick={() => setIsViewPendapatan(!isViewPendapatan)}
          >
            Upload Slip
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-5 md:flex md:justify-end">
        <div className="box grid grid-cols-12 col-span-6 gap-5 p-5 md:flex md:justify-end">
          <FormSelect
            formSelectSize="sm"
            id="group"
            name="group"
            className="col-span-12 md:col-span-4"
            value={search?.group_uuid}
            onChange={(e) =>
              setSearch({
                ...search,
                group_uuid: e.target.value,
              })
            }
          >
            <option value=""></option>
            {dataOption?.group?.map((item: any, index: number) => (
              <option key={index} value={item.uuid}>
                {item.name}
              </option>
            ))}
          </FormSelect>
          <FormSelect
            formSelectSize="sm"
            id="year"
            name="year"
            className="col-span-12 md:col-span-4"
            value={search.periode}
            onChange={(e) =>
              setSearch({
                ...search,
                periode: e.target.value,
              })
            }
          >
            <option value=""></option>
            {dataOption?.periode?.map((item: any, index: number) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </FormSelect>
          <FormSelect
            formSelectSize="sm"
            id="pendapatan_atas"
            name="pendapatan_atas"
            className="col-span-12 md:col-span-4"
            value={search?.pendatapan_atas}
            onChange={(e) =>
              setSearch({
                ...search,
                pendatapan_atas: e.target.value,
              })
            }
          >
            <option value=""></option>
            {dataOption?.pendatapan_atas?.map((item: any, index: number) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </FormSelect>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <PendapatanTableAdmin
            datas={dataPendapatan}
            page={page}
            limit={limit}
            nextPage={nextPage}
            prevPage={prevPage}
            allPage={allPage}
            link1={"/pendapatan/slip/"}
            link2={"/pendapatan/bonus/"}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminPendapatan;
