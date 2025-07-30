import { FormInput, FormSelect } from "../../base-components/Form";
import Button from "../../base-components/Button";
import LoadingIcon from "../../base-components/LoadingIcon";

const FormFilter = (props: any) => {
  const {
    isView,
    submit,
    clear,
    updateStatus,
    isLoading,
    search,
    setSearch,
    statusWfh,
    setStatusWfh,
    datas,
  } = props;

  return (
    <div className={`box ${!isView ? "hidden" : ""} p-4`}>
      <form onSubmit={submit}>
        <div className="grid grid-cols-12 gap-5 mt-5">
          <div className="col-span-9">
            <FormSelect
              formSelectSize="sm"
              aria-label=".form-select-sm example"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            >
              <option value=""></option>
              {datas &&
                datas.map((data: any, index: any) => (
                  <option key={index} value={data.uuid}>
                    {data.name}
                  </option>
                ))}
            </FormSelect>
          </div>
          <div className="col-span-3">
            <Button size="sm" type="submit" variant="secondary" className="w-full">
              {isLoading ? (
                <LoadingIcon
                  icon="tail-spin"
                  color="white"
                  className="w-4 h-4"
                />
              ) : (
                "Search"
              )}
            </Button>
          </div>
        </div>
      </form>
      <div className="grid grid-cols-12 gap-5 mt-5">
        <div className="col-span-9">
          <FormSelect
            formSelectSize="sm"
            aria-label=".form-select-sm example"
            name="statusWfh"
            value={statusWfh}
            onChange={(e) => setStatusWfh(e.target.value)}
          >
            <option value=""></option>
            <option value={0}>non active</option>
            <option value={1}>active</option>
          </FormSelect>
        </div>
        <div className="col-span-9">
          <Button size="sm" variant="primary" onClick={()=>updateStatus()} className="w-full text-white">
            {isLoading ? (
              <LoadingIcon
                icon="tail-spin"
                color="white"
                className="w-4 h-4"
              />
            ) : (
              "Update Status WFA"
            )}
          </Button>
        </div>
        <div className="col-span-9">
          <Button size="sm" variant="outline-primary" onClick={()=>clear()} className="w-full">
            {isLoading ? (
              <LoadingIcon
                icon="tail-spin"
                color="white"
                className="w-4 h-4"
              />
            ) : (
              "Clear and Close"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormFilter;
