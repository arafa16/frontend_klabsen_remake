import { useEffect, useState } from "react";
import Button from "../../base-components/Button";

import GeneralReportEmploye from "../../components/employee/generalReportEmploye";
import EmployeTable from "../../components/employee/employeTable";
import { getDataUserTable, getCountDataUser } from "../../features/user/user";
import { FormImportUser } from "../../features/employee/formImportUser";
import { exportUser } from "../../features/employee/user";
import LoadingIcon from "../../base-components/LoadingIcon";
// import Select from "react-select";
// import CreatableSelect from "react-select/creatable";
import FormFilter from "../../components/employee/FormFilter";
import { getDataPenempatanSelect } from "../../features/penempatan/penempatan";

import {
  updatePrivilegeArray,
  resetPrivileges,
} from "../../stores/features/privilegeSlice";
import { useDispatch, useSelector } from "react-redux";

const dataEmployePage = () => {
  const [isViewFilter, setIsViewFilter] = useState(false);
  const [filter, setFilter] = useState<any | undefined>("");
  const [statusWfh, setStatusWfh] = useState<any | undefined>("");

  const dispatch = useDispatch();

  const dataUserTable = getDataUserTable();
  const reloadDataUserTable = dataUserTable.reload;
  const status_code = dataUserTable.status_code;

  const countDataUser = getCountDataUser();
  const reloadCount = countDataUser.reload;

  const dataPenempatan = getDataPenempatanSelect();

  const clickStatus = (code: any) => {
    dataUserTable.set_status_code(code);
  };

  const formImport = FormImportUser({
    reloadDataUserTable,
    reloadCount,
  });

  const exportDataUser = exportUser();

  const clickDownload = () => {
    exportDataUser.downloadUser({
      status_code,
      name: "donwload_user.xlsx",
    });
  };

  function handleClickFilter() {
    setIsViewFilter(!isViewFilter);
  }

  function handleSubmitFilter(e: any) {
    e.preventDefault();
    if (filter !== "") {
      dataUserTable.setPenempatanUuid(filter);
    } else {
      alert("filter not set");
    }
  }

  const {
    message: messagePrivilege,
    isSuccess: successPrivilege,
    isLoading: loadingPrivilege,
  } = useSelector((state: any) => state.privilege);

  useEffect(() => {
    if (messagePrivilege && successPrivilege) {
      if (!loadingPrivilege) {
        if (filter) {
          dataUserTable.reload();
          dataUserTable.setPenempatanUuid(filter);
        }
        dispatch(resetPrivileges());
      }
    }
  }, [
    messagePrivilege,
    successPrivilege,
    loadingPrivilege,
    dataUserTable,
    filter,
  ]);

  const handleUpdateFilter = (e:any) => {
    if (filter !== "" && statusWfh !== "") {
      dispatch(
        updatePrivilegeArray({
          penempatan_uuid: filter,
          wfh_modal: statusWfh,
        })
      );
    } else {
      alert("filter and status not set");
    }
  };

  const handleClearFilter = () => {
    setFilter("");
    setStatusWfh("");
    setIsViewFilter(false);
    dataUserTable.setPenempatanUuid(null);
  };

  return (
    <div className="grid grid-cols-12 gap-5 mt-5">
      <div className="col-span-12 xl:col-span-12">
        <GeneralReportEmploye
          datas={countDataUser?.datas}
          clickStatus={clickStatus}
        />
      </div>
      <div className="col-span-12 grid grid-cols-12">
        <div className="col-span-12 lg:col-span-4">
          <FormFilter
            submit={handleSubmitFilter}
            updateStatus={handleUpdateFilter}
            datas={dataPenempatan?.dataResult}
            isView={isViewFilter}
            search={filter}
            statusWfh={statusWfh}
            setStatusWfh={setStatusWfh}
            setSearch={setFilter}
            isLoading={loadingPrivilege}
            clear={handleClearFilter}
          />
        </div>
      </div>
      <div className="col-span-12 xl:col-span-6">{formImport.form}</div>
      <div className="col-span-12 xl:col-span-6 content-end mt-4">
        <div className="flex justify-end gap-x-3">
          <div>
            <Button
              variant={!formImport.isView ? "primary" : "danger"}
              size="sm"
              onClick={() => formImport.setIsView(!formImport.isView)}
            >
              {!formImport.isView
                ? "Show Form Upload User"
                : "Close Form Upload User"}
            </Button>
          </div>
          <div>
            <Button
              variant={!isViewFilter ? "primary" : "danger"}
              size="sm"
              onClick={() => handleClickFilter()}
            >
              {!isViewFilter ? "Show Filter" : "Hide Filter"}
            </Button>
          </div>
          <div>
            <Button
              variant={"primary"}
              size="sm"
              onClick={() => clickDownload()}
            >
              {exportDataUser.isLoading ? (
                <LoadingIcon
                  icon="tail-spin"
                  color="white"
                  className="w-4 h-4"
                />
              ) : (
                "Download User"
              )}
            </Button>
          </div>
        </div>
      </div>
      <div className="col-span-12 xl:col-span-12">
        <EmployeTable
          datas={dataUserTable.datas}
          limit={dataUserTable.limit}
          setLimit={dataUserTable.setLimit}
          linkCreate="/employee/create"
          linkView="/employee/data"
          page={dataUserTable.page}
          allPage={dataUserTable.allPage}
          nextPage={dataUserTable.nextPage}
          prevPage={dataUserTable.prevPage}
          search={dataUserTable.search}
          setSearch={dataUserTable.setSearch}
        />
      </div>
    </div>
  );
};

export default dataEmployePage;
