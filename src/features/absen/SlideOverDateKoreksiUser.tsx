import { Slideover } from "../../base-components/Headless";
import {
    FormLabel,
    FormInput,
    FormSelect,
    FormTextarea,
} from "../../base-components/Form";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getInOutsByUser, resetInOuts } from "../../stores/features/inOutSlice";
import { createKoreksisByDate, resetKoreksis } from "../../stores/features/koreksiSlice";

import dayjs from "dayjs";

import { getPelanggaran } from "../pelanggaran/pelanggaran";
import { getTipeAbsen } from "../tipeAbsen/tipeAbsen";
import { getDataJamOperasional } from "../jamOperasional/jamOperasional";
import LoadingIcon from "../../base-components/LoadingIcon";

export const SlideOverDateKoreksiUser = () => {

    const [open, setOpen] = useState(false);
    const [dataInfo, setDataInfo] = useState<any>([]);
    const [dataUser, setDataUser] = useState<any>([]);
    const [message, setMessage] = useState<any>(null)

    //form
    const [time, setTime] = useState('');
    const [keterangan, setKeterangan] = useState('');
    const [tipeAbsenId, setTipeAbsenId] = useState('');
    const [jamOperasionalId, setJamOperasionalId] = useState('');

    const dispatch = useDispatch(); 

    const {dataResult: dataTipeAbsen} = getTipeAbsen();

    const {dataResult: dataJamOperasional} = getDataJamOperasional();

    const {message:messageKoreksi, isSuccess, isLoading} = useSelector(
        (state : any) => state.koreksi
    );

    useEffect(()=>{
        const uuid = dataUser.uuid;
        if(messageKoreksi && isSuccess){
            if(!isLoading){
                setMessage(messageKoreksi);
                dispatch(resetKoreksis());
                dispatch(getInOutsByUser({uuid}));
                resetValue();
                setOpen(false);
            }
        }
    },[messageKoreksi, isSuccess, isLoading])

    const submitForm = (e : any) => {
        e.preventDefault();
        const dateStart = dataInfo.dateStr+' '+time;
        const tanggalMulai = dayjs(dateStart).format('YYYY-MM-DD HH:mm:ss');
        
        dispatch(createKoreksisByDate({
            userId:dataUser.uuid,
            tanggalMulai:tanggalMulai,
            tanggalSelesai:tanggalMulai,
            tipeAbsenId:tipeAbsenId,
            codePelanggaran:2,
            codeStatusInout:2,
            codeStatusKoreksi:1,
            keterangan:keterangan,
            jamOperasionalId:jamOperasionalId,
            isAbsenWeb:1,
        }));
    }

    const resetValue = () => {
        setTime('');
        setKeterangan('');
        setTipeAbsenId('');
        setJamOperasionalId('');
    }

    const form = (
        <div id="header-footer-slideover">
            <Slideover
            open={open}
            onClose={() => {
                setOpen(false);
            }}
            >
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
                <form onSubmit={submitForm}>
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
                                <option key={key} value={data && data.uuid} className={`${(data && data.isSelect ? '' : 'hidden')}`}>{data && data.name}</option>
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
                        <FormLabel htmlFor="modal-form-2">Jam Operasional</FormLabel>
                        <FormSelect 
                            id="jam_operasional"
                            onChange={(e : any)=>setJamOperasionalId(e.target.value)}
                            value={jamOperasionalId}
                            required
                            >
                        <option value={''}></option> 
                        {dataJamOperasional && dataJamOperasional.map((data : any, key)=>(
                            <option 
                                key={key} 
                                value={data.uuid}
                                className={`${data.jamOperasionalGroupId === dataUser.jamOperasionalGroupId && data.isActive === true ? '' : 'hidden'}`}
                                >{data.jamMasuk}-{data.jamPulang} {data.name}</option>
                        ))}
                        </FormSelect>
                    </div>
                    <div className="mt-3">
                        <FormLabel htmlFor="keterangan">Keterangan</FormLabel>
                        <FormTextarea
                            id="keterangan"
                            required
                            value={keterangan}
                            onChange={(e : any) => setKeterangan(e.target.value)}
                            placeholder=""
                        />
                    </div>
                    </Slideover.Description>
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
                        {isLoading ? <LoadingIcon icon="tail-spin" className="w-4 h4" color="white"  /> : 'Submit'}
                    </Button>
                    </Slideover.Footer>
                </form>
            </Slideover.Panel>
            </Slideover>
        </div>
    )

    return {message, form, open, setOpen, dataInfo, setDataInfo, dataUser, setDataUser}
}
  