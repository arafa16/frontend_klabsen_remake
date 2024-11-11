import React, {useEffect, useState} from 'react'
import clsx from "clsx";
import DataAbsen from "./dataAbsen";
import { getInOutsByIdAndMonth, resetInOuts } from '../../stores/features/inOutSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const AbsenReport = (props:any) => {
    const {dataPeriodeKerja, dataUser} = props;
    const [dataInOut, setDataInOut] = useState<any>([]);

    const dispatch = useDispatch();

    const getData = async() => {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/inOuts/idAndMonth/${dataUser.uuid}&${dataPeriodeKerja.tanggalMulai}&${dataPeriodeKerja.tanggalSelesai}`);
        // console.log(response.data, 'response');
        setDataInOut(response.data);
        // console.log(response.data.tipe_absen, 'data response')
    } 

    useEffect(()=>{
        getData();
    },[dataPeriodeKerja]);

    const dataIn = dataInOut.filter((data: { tipe_absen : any }) => data.tipe_absen.code === '0');
    const dataInPelanggaran = dataIn.filter((data: { pelanggaran : any }) => data.pelanggaran.code === '2');
    const dataInNormal = dataIn.length - dataInPelanggaran.length;

    const dataOut = dataInOut.filter((data: { tipe_absen : any }) => data.tipe_absen.code === '1');
    const dataOutPelanggaran = dataOut.filter((data: { pelanggaran : any }) => data.pelanggaran.code === '2');
    const dataOutNormal = dataOut.length - dataOutPelanggaran.length;

    const dataInShift = dataInOut.filter((data: { tipe_absen : any }) => data.tipe_absen.code === '4');
    const dataInShiftPelanggaran = dataInShift.filter((data: { pelanggaran : any }) => data.pelanggaran.code === '2');
    const dataInShiftNormal = dataInShift.length - dataInShiftPelanggaran.length;

    const dataOutShift = dataInOut.filter((data: { tipe_absen : any }) => data.tipe_absen.code === '5');
    const dataOutShiftPelanggaran = dataOutShift.filter((data: { pelanggaran : any }) => data.pelanggaran.code === '2');
    const dataOutShiftNormal = dataOutShift.length - dataOutShiftPelanggaran.length;

    const dataInWFH = dataInOut.filter((data: { tipe_absen : any }) => data.tipe_absen.code === '8');
    const dataInWFHPelanggaran = dataInWFH.filter((data: { pelanggaran : any }) => data.pelanggaran.code === '2');
    const dataInWFHNormal = dataInWFH.length - dataInWFHPelanggaran.length;

    const dataOutWFH = dataInOut.filter((data: { tipe_absen : any }) => data.tipe_absen.code === '9');
    const dataOutWFHPelanggaran = dataOutWFH.filter((data: { pelanggaran : any }) => data.pelanggaran.code === '2');
    const dataOutWFHNormal = dataOutWFH.length - dataOutWFHPelanggaran.length;

    const dataTidakAbsenMasuk = dataInOut.filter((data: { tipe_absen : any }) => data.tipe_absen.code === '11');
    const dataTidakAbsenMasukPelanggaran = dataTidakAbsenMasuk.filter((data: { pelanggaran : any }) => data.pelanggaran.code === '2');
    const dataTidakAbsenMasukNormal = dataTidakAbsenMasuk.length - dataTidakAbsenMasukPelanggaran.length;

    const dataTidakAbsenPulang = dataInOut.filter((data: { tipe_absen : any }) => data.tipe_absen.code === '12');
    const dataTidakAbsenPulangPelanggaran = dataTidakAbsenPulang.filter((data: { pelanggaran : any }) => data.pelanggaran.code === '2');
    const dataTidakAbsenPulangNormal = dataTidakAbsenPulang.length - dataTidakAbsenPulangPelanggaran.length;

    const dataCuti = dataInOut.filter((data: { tipe_absen : any }) => data.tipe_absen.code === '13');
    const dataSakit = dataInOut.filter((data: { tipe_absen : any }) => data.tipe_absen.code === '14');
    
    const dataInOutPelangaran = 
        dataInPelanggaran.length + 
        dataOutPelanggaran.length + 
        dataInShiftPelanggaran.length +
        dataOutShiftPelanggaran.length +
        dataInWFHPelanggaran.length +
        dataOutWFHPelanggaran.length +
        dataTidakAbsenMasukPelanggaran.length+
        dataTidakAbsenPulangPelanggaran.length;

    const dataAllInPelangaran = 
        dataInPelanggaran.length + 
        dataInShiftPelanggaran.length +
        dataInWFHPelanggaran.length +
        dataTidakAbsenMasukPelanggaran.length;

    const dataAllOutPelangaran = 
        dataOutPelanggaran.length + 
        dataOutShiftPelanggaran.length +
        dataOutWFHPelanggaran.length+
        dataTidakAbsenPulangPelanggaran.length;

    const dataAllPelanggaran = dataInOutPelangaran * 0.5;

    const dataInOutNormal = 
        dataInNormal+ 
        dataOutNormal+ 
        dataInShiftNormal+ 
        dataOutShiftNormal+ 
        dataInWFHNormal+
        dataOutWFHNormal+
        dataTidakAbsenMasukNormal+
        dataTidakAbsenPulangNormal;
    
    const dataAllInNormal = 
        dataInNormal+ 
        dataInShiftNormal+ 
        dataInWFHNormal+
        dataTidakAbsenMasukNormal;
    
    const dataAllOutNormal = 
        dataOutNormal+ 
        dataOutShiftNormal+ 
        dataOutWFHNormal+
        dataTidakAbsenPulangNormal;

    const dataAllNormal = (dataInOutNormal*0.5) + dataCuti.length + dataSakit.length;

    const dataBelumAbsen = dataPeriodeKerja.jumlahHari - dataAllPelanggaran - dataAllNormal;

    return (
        <div>
            {/* BEGIN: Seller Report */}
            <div className="col-span-12 mt-4 sm:col-span-6 md:col-span-4 lg:col-span-3 lg:mt-6">
                <div
                    className={clsx([
                    "mt-4 intro-y",
                    "before:content-[''] before:w-[90%] before:shadow-[0px_3px_5px_#0000000b] before:h-full before:bg-slate-50 before:border before:border-slate-200 before:mt-3 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60",
                    ])}
                >
                    <div className="p-5 box">
                    <div className="relative px-3">
                        <div className="w-40 mx-auto lg:w-auto">
                        <DataAbsen
                            className="relative z-10 mt-3"
                            height={190}
                            dataBelumAbsen={dataBelumAbsen}
                            dataNormal={dataAllNormal}
                            dataPelanggaran={dataAllPelanggaran}
                        />
                        </div>
                        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full">
                        <div className="text-xl font-medium leading-7">{dataPeriodeKerja.name}</div>
                        <div className="mt-1 text-slate-500">{dataPeriodeKerja.jumlahHari} Days</div>
                        </div>
                    </div>
                    <div className="mx-auto mt-8 w-52 lg:w-auto">
                        {/* <div className="flex items-center">
                            <div className="w-2 h-2 mr-3 border rounded-full bg-secondary/50 border-primary/50"></div>
                            <span className="truncate">Belum Absen</span>
                            <span className="ml-auto">{dataBelumAbsen} hari</span>
                        </div> */}
                        <div className="flex items-center mt-4">
                            <div className="w-2 h-2 mr-3 border rounded-full bg-primary/50 border-primary/50"></div>
                            <span className="truncate">Masuk</span>
                            <span className="ml-auto">{dataAllInNormal} kali</span>
                        </div>
                        <div className="flex items-center mt-4">
                            <div className="w-2 h-2 mr-3 border rounded-full bg-primary/50 border-primary/60"></div>
                            <span className="truncate">Pulang</span>
                            <span className="ml-auto">{dataAllOutNormal} kali</span>
                        </div>
                        <div className="flex items-center mt-4">
                            <div className="w-2 h-2 mr-3 border rounded-full bg-primary/50 border-primary/60"></div>
                            <span className="truncate">Cuti</span>
                            <span className="ml-auto">{dataCuti.length} kali</span>
                        </div>
                        <div className="flex items-center mt-4">
                            <div className="w-2 h-2 mr-3 border rounded-full bg-primary/50 border-primary/60"></div>
                            <span className="truncate">Sakit</span>
                            <span className="ml-auto">{dataSakit.length} kali</span>
                        </div>
                        {/* <div className="flex items-center mt-4">
                            <div className="w-2 h-2 mr-3 border rounded-full bg-primary/50 border-primary/60"></div>
                            <span className="truncate">Perbaikan</span>
                            <span className="ml-auto">{dataTidakAbsenNormal} kali</span>
                        </div> */}
                        <div className="flex items-center mt-4">
                            <div className="w-2 h-2 mr-3 border rounded-full bg-danger/50 border-danger/50"></div>
                            <span className="truncate">pelanggaran</span>
                            <span className="ml-auto">{dataAllInPelangaran + dataAllOutPelangaran} kali</span>
                        </div>
                        <div className="flex items-center mt-4">
                            <div className="w-2 h-2 mr-3 border rounded-full bg-black/20 border-black/20"></div>
                            <span className="truncate">Belum Absen</span>
                            <span className="ml-auto">{dataBelumAbsen * 2} kali</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            {/* END: Seller Report */}
        </div>
    )
}

export default AbsenReport