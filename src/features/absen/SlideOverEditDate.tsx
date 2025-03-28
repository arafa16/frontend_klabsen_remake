import { Slideover } from "../../base-components/Headless";
import {
    FormLabel,
    FormInput,
    FormSelect
} from "../../base-components/Form";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import { useEffect, useState } from "react";
import { getPelanggarans, resetPelanggaran } from "../../stores/features/pelanggaranSlice";
import { getTipeAbsens, resetTipeAbsen } from "../../stores/features/tipeAbsenSlice";
import { getStatusInout, resetStatusInout } from "../../stores/features/statusInoutSlice";
import { getJamOperasionals, resetJamOperasional } from '../../stores/features/jamOperasionalSlice';
import { useDispatch, useSelector } from "react-redux";
import { getInOutsByUser, resetInOuts } from "../../stores/features/inOutSlice";
import dayjs from "dayjs";

import { createInOuts, resetInOut2 } from "../../stores/features/inOut2Slice";

export const SlideOverEditDate = (props : any) => {
    const {uuid} = props;

    const [dataUser, setDataUser] = useState<any>(null);
    const [open, setOpen] = useState(false);
    const [dataInfo, setDataInfo] = useState<any>(null);
    const [message, setMessage] = useState<any>(null);

    const [dataPelanggaran, setDataPelanggaran] = useState([]);
    const [dataTipeAbsen, setDataTipeAbsen] = useState([]);
    const [dataStatusInOut, setDataStatusInOut] = useState([]);
    const [dataJamOperasional, setDataJamOperasional] = useState([]);

    //form
    const [time, setTime] = useState('');
    const [pelanggaranId, setPelanggaranId] = useState('');
    const [tipeAbsenId, setTipeAbsenId] = useState('');
    const [statusInoutId, setStatusInOutId] = useState('');
    const [jamOperasionalId, setJamOperasionalId] = useState('');
    const [isAbsenWeb, setIsAbsenWeb] = useState(0);

    const dispatch = useDispatch(); 

    const {data:pelanggaran, isSuccess:isPelanggaranSuccess, isLoading:isPelanggaranLoading} = useSelector(
        (state : any) => state.pelanggaran
    );

    const {data:tipeAbsen, isSuccess:isTipeAbsenSuccess, isLoading:isTipeAbsenLoading} = useSelector(
        (state : any) => state.tipeAbsen
    );

    const {data:statusInout, isSuccess:isStatusInoutSuccess, isLoading:isStatusInoutLoading} = useSelector(
        (state : any) => state.statusInout
    )

    const {data:jamOperasional, isSuccess:isJamOperasionalSuccess, isLoading:isJamOperasionalLoading} = useSelector(
        (state : any) => state.jamOperasional
    )

    const {data:inOuts, message:messageInOuts, isSuccess:isInOutsSuccess, isLoading:isInOutsLoading} = useSelector(
        (state: any) => state.inOut2
    );

    useEffect(()=>{
        if(pelanggaran && isPelanggaranSuccess){
            if(!isPelanggaranLoading){
                setDataPelanggaran(pelanggaran && pelanggaran.datas && pelanggaran.datas.data);
                resetPelanggaran();
            }
        }
    },[pelanggaran, isPelanggaranSuccess, isPelanggaranLoading]);

    useEffect(()=>{
        if(tipeAbsen && isTipeAbsenSuccess){
            if(!isTipeAbsenLoading){
                setDataTipeAbsen(tipeAbsen && tipeAbsen.datas && tipeAbsen.datas.data);
                resetTipeAbsen();
            }
        }
    },[tipeAbsen, isTipeAbsenSuccess, isTipeAbsenLoading])

    useEffect(()=>{
        if(isStatusInoutSuccess && statusInout){
            if(!isStatusInoutLoading){
                setDataStatusInOut(statusInout && statusInout.datas && statusInout.datas.data);
                dispatch(resetStatusInout());
            }
        }
    },[statusInout, isStatusInoutSuccess, isStatusInoutLoading])

    useEffect(()=>{
        if(isJamOperasionalSuccess && jamOperasional){
            if(!isJamOperasionalLoading){
                setDataJamOperasional(jamOperasional && jamOperasional.datas && jamOperasional.datas.data);
                dispatch(resetJamOperasional());
            }
        }
    },[jamOperasional, isJamOperasionalSuccess, isJamOperasionalLoading]);

    useEffect(()=>{
        dispatch(getPelanggarans());
        dispatch(getTipeAbsens());
        dispatch(getStatusInout());
        dispatch(getJamOperasionals());
    },[])

    useEffect(()=>{
        if(messageInOuts && isInOutsSuccess){
            if(!isInOutsLoading){
                setMessage(messageInOuts);
                setOpen(false);
                dispatch(resetInOut2());
                dispatch(getInOutsByUser({uuid}));
            }
        }
    },[inOuts, isInOutsSuccess, isInOutsLoading]);

    const submitForm = (e : any) => {
        e.preventDefault();
        const dateStart = dataInfo.dateStr+' '+time;
        const tanggal_mulai = dayjs(dateStart).format('YYYY-MM-DD HH:mm:ss');
        
        dispatch(createInOuts({
            user_uuid:dataUser.uuid,
            tanggal_mulai:tanggal_mulai,
            tanggal_selesai:tanggal_mulai,
            tipe_absen_uuid:tipeAbsenId,
            pelanggaran_uuid:pelanggaranId,
            status_inout_uuid:statusInoutId,
            jam_operasional_uuid:jamOperasionalId,
            is_absen_web:isAbsenWeb
        }));
    }

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
                    {dataUser && dataUser.name} | {dataInfo && dataInfo.dateStr}
                </h2>
                </Slideover.Title>
                {/* END: Slide Over Header */}
                <form onSubmit={submitForm}>
                    {/* BEGIN: Slide Over Body */}
                    <Slideover.Description>
                    <div className="mt-3">
                        <FormLabel htmlFor="modal-form-6">Tipe Absen</FormLabel>
                        <FormSelect 
                            id="tipe_absen"
                            onChange={(e : any)=>setTipeAbsenId(e.target.value)}
                            value={tipeAbsenId}
                            required
                            >
                            <option value={''}></option> 
                            {dataTipeAbsen.map((data : any, key)=>(
                                <option key={key} value={data && data.uuid}>{data && data.name}</option>
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
                        value={time}
                        onChange={(e : any) => setTime(e.target.value)}
                        placeholder=""
                        />
                    </div>
                    <div className="mt-3">
                        <FormLabel htmlFor="modal-form-2">Pelanggaran</FormLabel>
                        <FormSelect 
                            id="pelanggaran"
                            onChange={(e : any)=>setPelanggaranId(e.target.value)}
                            value={pelanggaranId}
                            required
                            >
                        <option value={''}></option> 
                        {dataPelanggaran.map((data : any, key)=>(
                            <option key={key} value={data && data.uuid}>{data && data.name}</option>
                        ))}
                        </FormSelect>
                    </div>
                    <div className="mt-3">
                        <FormLabel htmlFor="modal-form-2">Status</FormLabel>
                        <FormSelect 
                            id="status_inout"
                            onChange={(e : any)=>setStatusInOutId(e.target.value)}
                            value={statusInoutId}
                            required
                            >
                        <option value={''}></option> 
                        {dataStatusInOut.map((data : any, key)=>(
                            <option key={key} value={data && data.uuid}>{data && data.name}</option>
                        ))}
                        </FormSelect>
                    </div>
                    <div className="mt-3">
                        <FormLabel htmlFor="modal-form-2">Jam Operasional</FormLabel>
                        <FormSelect 
                            id="jam_operasional"
                            onChange={(e : any)=>setJamOperasionalId(e.target.value)}
                            value={jamOperasionalId}
                            required
                            >
                        <option value={''}></option> 
                        {dataJamOperasional.map((data : any, key)=>(
                            <option 
                                key={key} 
                                value={data && data.uuid}
                                >{data.jam_masuk}-{data.jam_pulang} {data.name}</option>
                        ))}
                        </FormSelect>
                    </div>
                    <div className="mt-3">
                        <FormLabel htmlFor="modal-form-2">Absen By Web ?</FormLabel>
                        <FormSelect 
                            id="is_absen_web"
                            onChange={(e : any)=>setIsAbsenWeb(e.target.value)}
                            value={isAbsenWeb}
                            required
                            >
                        <option value='1'>Ya</option>
                        <option value='0'>Tidak</option>
                        </FormSelect>
                    </div>
                    </Slideover.Description>
                    {/* END: Slide Over Body */}
                    {/* BEGIN: Slide Over Footer */}
                    <Slideover.Footer>
                    <Button
                        variant="outline-secondary"
                        type="button"
                        onClick={() => {
                        setOpen(false);
                        }}
                        className="w-20 mr-1"
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="primary"
                        type="submit"
                        className="w-20"
                    >
                        Submit
                    </Button>
                    </Slideover.Footer>
                </form>
            </Slideover.Panel>
            {/* END: Slide Over Footer */}
            </Slideover>
            {/* END: Slide Over Content */}
        </div>
    )

    return {
        form,
        dataUser, setDataUser,
        open, setOpen,
        dataInfo, setDataInfo,
        message
    }
}
  