import { FormLabel, FormSelect, FormInput } from '../../base-components/Form';
import Button from '../../base-components/Button';
import { useNavigate } from 'react-router-dom';
import LoadingIcon from '../../base-components/LoadingIcon';

const formTemplate2 = (props : any) => {
    const {
        name, setName,
        jamMasuk, setJamMasuk,
        jamPulang, setJamPulang,
        keterangan, setKeterangan,
        code, setCode, 
        isActive, setIsActive, 
        linkBack,
        jamOperasionalGroupId, setJamOperasionalGroupId,
        jamOperasionalGroupSelect,
        submitAction,
        loadingSubmit,
        deleteAction,
        isDeleteActive,
        loadingDelete
    } = props;
    const navigate = useNavigate();

    return (
        <div className="p-5 mt-5 box intro-y">
            <form onSubmit={submitAction}>
                <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5`}>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="name"
                            type="text"
                            name='name'
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="jamMasuk">Jam Masuk</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="jamMasuk"
                            type="time"
                            name='jamMasuk'
                            step="1"
                            value={jamMasuk}
                            onChange={(e)=>setJamMasuk(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="jamPulang">Jam Pulang</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="jamPulang"
                            type="time"
                            step="1"
                            name='jamPulang'
                            value={jamPulang}
                            onChange={(e)=>setJamPulang(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="code">Code</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="code"
                            type="text"
                            name='code'
                            value={code}
                            onChange={(e)=>setCode(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="keterangan">Keterangan</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="keterangan"
                            type="text"
                            name='keterangan'
                            value={keterangan}
                            onChange={(e)=>setKeterangan(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="jamOperasionalGroupId">Jam Operasional Group</FormLabel>
                        <FormSelect
                            formSelectSize="sm"
                            aria-label=".form-select-sm example"
                            id="jamOperasionalGroupId"
                            name='jamOperasionalGroupId'
                            value={jamOperasionalGroupId}
                            onChange={(e)=>setJamOperasionalGroupId(e.target.value)}
                            >
                            <option></option>
                            {jamOperasionalGroupSelect && jamOperasionalGroupSelect.map((data :any, index:any)=>(
                                <option key={index} value={data.uuid}>{data.name}</option>
                            ))}
                        </FormSelect>
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="isActive">Is Active ?</FormLabel>
                        <FormSelect
                            formSelectSize="sm"
                            aria-label=".form-select-sm example"
                            id="isActive"
                            name='isActive'
                            value={isActive}
                            onChange={(e)=>setIsActive(e.target.value)}
                            >
                            <option></option>
                            <option value={`0`}>Non Active</option>
                            <option value={`1`}>Active</option>
                        </FormSelect>
                    </div>
                </div>
                <div className={`flex items-center justify-center col-span-12 mt-10 mx-10 intro-y sm:justify-end`}>
                    <Button
                        variant="secondary" 
                        className="w-24"
                        size='sm'
                        type='button'
                        onClick={()=>navigate(linkBack)}
                        >
                        Cancel
                    </Button>
                    <Button
                        variant="danger"
                        className={`w-24 ml-2 ${isDeleteActive ? '' : 'hidden'}`}
                        size='sm'
                        type='button'
                        onClick={()=>deleteAction()}
                        >
                        {loadingDelete ?   
                        <LoadingIcon icon="tail-spin" color='white' className="w-4 h-4" /> 
                        : 
                        'Delete'
                        }
                    </Button>
                    <Button
                        variant="primary" 
                        className={`w-36 ml-2`}
                        size='sm'
                        type='submit'
                        >
                        {loadingSubmit ?   
                        <LoadingIcon icon="tail-spin" color='white' className="w-4 h-4" /> 
                        : 
                        'Save'
                        }
                    </Button>
                </div>
            </form>
        </div>
        
    )
}

export default formTemplate2