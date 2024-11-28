import { FormLabel, FormSelect, FormInput } from '../../base-components/Form';
import Button from '../../base-components/Button';
import { useNavigate } from 'react-router-dom';

const FormCreate = (props : any) => {
    const {
        name, setName, 
        tanggal_mulai, set_tanggal_mulai,
        tanggal_selesai, set_tanggal_selesai,
        tipe_event_id, set_tipe_event_id,
        code, setCode, 
        is_active, set_is_active, 
        dataTipeEvents,
        linkBack,
        submitEvent
    } = props;

    const navigate = useNavigate();

    return (
        <div className="p-5 mt-5 box intro-y">
            <form onSubmit={submitEvent}>
                <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5`}>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="input-wizard-1">Name</FormLabel>
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
                        <FormLabel htmlFor="tanggalMulai">Tanggal Mulai</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="tanggalMulai"
                            type="datetime-local"
                            step='1'
                            name='tanggalMulai'
                            value={tanggal_mulai}
                            onChange={(e)=>set_tanggal_mulai(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="tanggalSelesai">Tanggal Selesai</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="tanggalSelesai"
                            type="datetime-local"
                            step='1'
                            name='tanggalSelesai'
                            value={tanggal_selesai}
                            onChange={(e)=>set_tanggal_selesai(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="tipeEventId">Tipe Event</FormLabel>
                        <FormSelect
                            formSelectSize="sm"
                            aria-label=".form-select-sm example"
                            name='tipeEventId'
                            value={tipe_event_id}
                            onChange={(e)=>set_tipe_event_id(e.target.value)}
                            >
                            <option></option>
                            {dataTipeEvents && dataTipeEvents.map((data:any, index:any)=>(
                                <option key={index} value={data.uuid}>{data.name}</option>
                            ))}
                            
                        </FormSelect>
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="input-wizard-1">Code</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="code"
                            type="number"
                            name='code'
                            placeholder='0'
                            value={code}
                            onChange={(e)=>setCode(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="input-wizard-1">Is Active ?</FormLabel>
                        <FormSelect
                            formSelectSize="sm"
                            aria-label=".form-select-sm example"
                            name='isActive'
                            value={is_active}
                            onChange={(e)=>set_is_active(e.target.value)}
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
                        className="w-24 ml-2"
                        size='sm'
                        type='button'
                        onClick={()=>navigate(linkBack)}
                        >
                        Cancel
                    </Button>
                    {/* {isAuthLoading ?   
                        <LoadingIcon icon="tail-spin" color='blue' className="w-4 h-4" /> 
                        :  */}
                        <Button
                            variant="primary" 
                            className={`w-36 ml-2`}
                            size='sm'
                            type='submit'
                            >
                            Save
                        </Button>
                    {/* } */}
                </div>
            </form>
        </div>
        
    )
}

export default FormCreate