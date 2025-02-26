import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getDataGanderSelect } from '../../features/gander/gander';
import { getDataStatusPerkawinanSelect } from '../../features/statusPerkawinan/statusPerkawinan';
import { getDataPendidikanSelect } from '../../features/pendidikan/pendidikan';
import { getDataBankSelect } from '../../features/bank/bank';
import { getDataContactSelect } from '../../features/contact/contact';
import { getDataGolonganDarahSelect } from '../../features/golonganDarah/golonganDarah';
import { getDataPenempatanSelect } from '../../features/penempatan/penempatan';
import { getDataJabatanSelect } from '../../features/jabatan/jabatan';
import { getDataJamOperasionalGroup } from '../../features/jamOperasionalGroup/jamOperasionalGroup';
import { getDataGroupSelect } from '../../features/group/group';
import { getDataAtasanSelect } from '../../features/user/atasan';
import { getDataStatusSelect } from '../../features/status/status';
import { getMessageShow } from '../../features/messageShow';
import { getDataUserById, updateDataUserById } from "../../features/user/user";

import { FormInput, FormLabel, FormSelect } from "../../base-components/Form";
import Button from '../../base-components/Button';
import LoadingIcon from "../../base-components/LoadingIcon";
import dayjs from 'dayjs';

const updateEmployeePage = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    //value data pribadi
    const [absen_id, set_absen_id] = useState('');
    const [nik, set_nik] = useState('');
    const [name, set_name] = useState('');
    const [email, set_email] = useState('');
    const [gander_id, set_gander_id] = useState('');
    const [tempat_lahir, set_tempat_lahir] = useState('');
    const [tanggal_lahir, set_tanggal_lahir] = useState('');
    const [status_perkawinan_id, set_status_perkawinan_id] = useState('');
    const [jumlah_anak, set_jumlah_anak] = useState('');
    const [nama_ibu, set_nama_ibu] = useState('');

    //value pendidikan
    const [pendidikan_id, set_pendidikan_id] = useState('');
    const [nama_sekolah, set_nama_sekolah] = useState('');
    const [jurusan_sekolah, set_jurusan_sekolah] = useState('');
    const [tahun_lulus, set_tahun_lulus] = useState('');
    const [ipk, set_ipk] = useState('');

    //value data pendukung
    const [nomor_hp, set_nomor_hp] = useState('');
    const [nomor_ktp, set_nomor_ktp] = useState('');
    const [alamat_ktp, set_alamat_ktp] = useState('');
    const [alamat_domisili, set_alamat_domisili] = useState('');
    const [bank_id, set_bank_id] = useState('');
    const [nomor_rekening, set_nomor_rekening] = useState('');
    const [nomor_npwp, set_nomor_npwp] = useState('');

    //value data kesehatan
    const [nomor_bpjs_kesehatan, set_nomor_bpjs_kesehatan] = useState('');
    const [nomor_bpjs_ketenagakerjaan, set_nomor_bpjs_ketenagakerjaan] = useState('');
    const [contact_emergency_id, set_contact_emergency_id] = useState('');
    const [emergency_number, set_emergency_number] = useState('');
    const [emergency_address, set_emergency_address] = useState('');
    const [nomor_sim, set_nomor_sim] = useState('');
    const [golongan_darah_id, set_golongan_darah_id] = useState('');

    //value data operasional
    const [penempatan_id, set_penempatan_id] = useState('');
    const [jabatan_id, set_jabatan_id] = useState('');
    const [atasan_id, set_atasan_id] = useState();
    const [is_atasan, set_is_atasan] = useState('');
    const [jam_operasional_group_id, set_jam_operasional_group_id] = useState('');
    const [group_id, set_group_id] = useState('');
    const [extention, set_extention] = useState('');
    const [quote, set_quote] = useState('');

    //value kelengkapan data
    const [status_id, set_status_id] = useState('');
    const [is_active, set_is_active] = useState<any>('');
    
    //get user data

    const {dataResult: dataUser} = getDataUserById({id:id});

    //data select gander
    const {dataResult:dataGander} = getDataGanderSelect();

    //data select gander
    const {dataResult:dataStatusPerkawinan} = getDataStatusPerkawinanSelect();
  
    //pendidikan
    const {dataResult:dataPendidikan} = getDataPendidikanSelect()
  
    //bank
    const {dataResult:dataBank} = getDataBankSelect()
  
    //contact
    const {dataResult:dataContact} = getDataContactSelect()
  
    //golongan darah
    const {dataResult:dataGolonganDarah} = getDataGolonganDarahSelect()
  
    //penempatan
    const {dataResult:dataPenempatan} = getDataPenempatanSelect()
  
    //jabatan
    const {dataResult:dataJabatan} = getDataJabatanSelect()
  
    //operasional group
    const {dataResult:dataOperasionalGroup} = getDataJamOperasionalGroup()
  
    //operasional group
    const {dataResult:dataGroup} = getDataGroupSelect()
  
    //atasan
    const {dataResult:dataAtasan} = getDataAtasanSelect()
  
    //status
    const {dataResult:dataStatus} = getDataStatusSelect()

    const clickBack = () => {
        navigate(`/employee/data`);
    }

    useEffect(()=>{
        if(dataUser.length !== 0){
          changeValue(dataUser);
        }
    },[dataUser]);

    const changeValue = (data : any) => {
        //value data pribadi
        set_absen_id(data && data.absen_id);
        set_nik(data && data.nik);
        set_name(data && data.name);
        set_email(data && data.email);
        set_gander_id(data && data.gander_id);
        set_tempat_lahir(data && data.tempat_lahir);
        set_tanggal_lahir(dayjs(data && data.tanggal_lahir).format('YYYY-MM-DD'));
        set_status_perkawinan_id(`${data && data.status_perkawinan_id}`);
        set_jumlah_anak(data && data.jumlah_anak);
        set_nama_ibu(data && data.nama_ibu);
    
        //value pendidikan
        set_pendidikan_id(data && data.pendidikan_id);
        set_nama_sekolah(data && data.nama_sekolah);
        set_jurusan_sekolah(data && data.jurusan_sekolah);
        set_tahun_lulus(data && data.tahun_lulus !== null ? data.tahun_lulus : 0);
        set_ipk(data && data.ipk !== null ? data.ipk : '');
    
        //value data pendukung
        set_nomor_hp(data && data.nomor_hp);
        set_nomor_ktp(data && data.nomor_ktp);
        set_alamat_ktp(data && data.alamat_ktp);
        set_alamat_domisili(data && data.alamat_domisili);
        set_bank_id(data && data.bank_id);
        set_nomor_rekening(data && data.nomor_rekening);
        set_nomor_npwp(data && data.nomor_npwp);
    
        //value data kesehatan
        set_nomor_bpjs_kesehatan(data && data.nomor_bpjs_kesehatan === null ? '' : data.nomor_bpjs_kesehatan);
        set_nomor_bpjs_ketenagakerjaan(data && data.nomor_bpjs_ketenagakerjaan === null ? '' : data.nomor_bpjs_ketenagakerjaan);
        set_contact_emergency_id(data && data.contact_emergency_id);
        set_emergency_number(data && data.emergency_number);
        set_emergency_address(data && data.emergency_address === null ? '' : data.emergency_address);
        set_nomor_sim(data && data.nomor_sim);
        set_golongan_darah_id(data && data.golongan_darah_id);
    
        //value data operasional
        set_penempatan_id(data && data.penempatan_id);
        set_jabatan_id(data && data.jabatan_id);
        set_atasan_id(data && data.atasan_id);
        set_is_atasan(data && data.is_atasan ? '1' : '0');
        set_jam_operasional_group_id(data && data.jam_operasional_group_id);
        set_group_id(data && data.group_id);
        set_extention(data && data.extention);
        set_quote(data && data.quote);
    
        //value kelengkapan data
        set_status_id(data && data.status_id);
        set_is_active(data && data.is_active ? 1 : 0);
    }

    const {submit:submitUpdate, isLoading:isLoadingUserUpdate,  message:messageUserUpdate, isSuccess:isSuccessUserUpdate} = updateDataUserById({
        id:id,
        nik:nik,
        absen_id:absen_id,
        name:name,
        gander_id:gander_id, 
        email:email,
        extention:extention,
        nomor_hp:nomor_hp,
        penempatan_id:penempatan_id,
        jabatan_id:jabatan_id,
        atasan_id:atasan_id,
        nomor_ktp:nomor_ktp,
        alamat_ktp:alamat_ktp,
        alamat_domisili:alamat_domisili,
        tempat_lahir:tempat_lahir,
        tanggal_lahir:tanggal_lahir,
        nomor_npwp:nomor_npwp,
        status_perkawinan_id:status_perkawinan_id,
        jumlah_anak:jumlah_anak,
        nama_ibu:nama_ibu,
        pendidikan_id:pendidikan_id,
        nama_sekolah:nama_sekolah,
        jurusan_sekolah:jurusan_sekolah,
        tahun_lulus:tahun_lulus,
        ipk:ipk,
        nomor_bpjs_kesehatan:nomor_bpjs_kesehatan,
        nomor_bpjs_ketenagakerjaan:nomor_bpjs_ketenagakerjaan,
        contact_emergency_id:contact_emergency_id,
        emergency_number:emergency_number,
        emergency_address:emergency_address,
        nomor_sim:nomor_sim,
        golongan_darah_id:golongan_darah_id,
        bank_id:bank_id,
        nomor_rekening:nomor_rekening,
        jam_operasional_group_id:jam_operasional_group_id,
        group_id:group_id,
        quote:quote,
        status_id:status_id,
        is_atasan:is_atasan,
        is_active:is_active
      });

    //message
    const messageShow = getMessageShow(messageUserUpdate);
    
    return (
        <div>
            {messageShow}
            <form onSubmit={submitUpdate}>
                <div className={`flex items-center justify-center gap-x-4 col-span-12 mt-10 intro-y sm:justify-end`}>
                    <Button
                        variant="secondary" 
                        className="w-24"
                        size='sm'
                        type='button'
                        onClick={()=>clickBack()}
                        >
                        Cancel
                    </Button>
                    <Button
                        variant="primary" 
                        className="w-24"
                        size='sm'
                        type='submit'
                        >
                        {isLoadingUserUpdate ? <LoadingIcon icon="circles" className="w-4 h4" color="white"  /> : 'Save'}
                    </Button>
                </div>
                <div className="w-full mt-5 box p-4">
                    {/* data diri */}
                    <div className='w-full mb-8'>
                        <p className='text-xs underline text-slate-800'>Data Diri</p>
                    </div>
                    <div className={`text-xs grid grid-cols-12 gap-4 mt-5 gap-y-5 pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400`}>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel className='' htmlFor="input-wizard-1">Absen Id *</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="absen_id"
                                type="text"
                                placeholder="Dari hcm"
                                required
                                name='absen_id'
                                value={absen_id}
                                onChange={(e)=>set_absen_id(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-2">NIK *</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="nik"
                                type="text"
                                placeholder=""
                                name='nik'
                                value={nik}
                                onChange={(e)=>set_nik(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-3">Nama *</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="nama"
                                type="text"
                                placeholder=""
                                name='name'
                                value={name}
                                onChange={(e)=>set_name(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-3">Email *</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="email"
                                type="email"
                                placeholder=""
                                required
                                name='email'
                                value={email}
                                onChange={(e)=>set_email(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="gander">Jenis Kelamin *</FormLabel>
                            <FormSelect
                                formSelectSize="sm"
                                aria-label="gander"
                                name='gander_id'
                                required
                                value={gander_id}
                                onChange={(e)=>set_gander_id(e.target.value)}
                                >
                                <option></option>
                                {dataGander && dataGander.map((data :any, index :any)=>(
                                    <option key={index} value={data.id}>{data.name}</option>
                                ))}
                            </FormSelect>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-3">Tempat Lahir *</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="tempat_lahir"
                                type="text"
                                placeholder=""
                                name='tempat_lahir'
                                value={tempat_lahir}
                                onChange={(e)=>set_tempat_lahir(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="tanggal_lahir">Tanggal Lahir *</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="tanggal_lahir"
                                type="date"
                                data-date-format="YYYY-MM-DD"
                                time-zone="in"
                                placeholder=""
                                required
                                name='tanggal_lahir'
                                value={tanggal_lahir}
                                onChange={(e)=>set_tanggal_lahir(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-3">Status Perkawinan *</FormLabel>
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='status_perkawinan_id'
                                required
                                value={status_perkawinan_id}
                                onChange={(e)=>set_status_perkawinan_id(e.target.value)}
                                >
                                <option></option>
                                {dataStatusPerkawinan && dataStatusPerkawinan.map((data : any, index :any)=>(
                                    <option key={index} value={data.id}>{data.name}</option>
                                ))}
                            </FormSelect>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-3">Jumlah Anak *</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="jumlah_anak"
                                type="number"
                                placeholder=""
                                name='jumlah_anak'
                                value={jumlah_anak}
                                onChange={(e)=>set_jumlah_anak(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-3">Nama Ibu *</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="samaIbu"
                                type="text"
                                placeholder=""
                                name='nama_ibu'
                                value={nama_ibu}
                                onChange={(e)=>set_nama_ibu(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* data diri */}
                    {/* pendidikan */}
                    <div className='w-full mb-8'>
                        <p className='text-xs underline text-slate-800'>Pendidikan</p>
                    </div>
                    <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5 text-xs pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400`}>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Pendidikan *</FormLabel>
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='pendidikan_id'
                                required
                                value={pendidikan_id}
                                onChange={(e)=>set_pendidikan_id(e.target.value)}
                                >
                                <option></option>
                                {dataPendidikan && dataPendidikan.map((data : any, index : any)=>(
                                    <option key={index} value={data.id}>{data.name}</option>
                                ))}
                            </FormSelect>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Nama Sekolah *</FormLabel>
                            <FormInput
                            formInputSize="sm"
                            id="nama_sekolah"
                            type="text"
                            placeholder=""
                            name='nama_sekolah'
                            value={nama_sekolah}
                            onChange={(e)=>set_nama_sekolah(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Jurusan/Prodi *</FormLabel>
                            <FormInput
                            formInputSize="sm"
                            id="jurusan_sekolah"
                            type="text"
                            required
                            placeholder=""
                            name='jurusan_sekolah'
                            value={jurusan_sekolah}
                            onChange={(e)=>set_jurusan_sekolah(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Tahun Lulus *</FormLabel>
                            <FormInput
                            formInputSize="sm"
                            id="tahun_lulus"
                            type="number"
                            placeholder=""
                            name='tahun_lulus'
                            value={tahun_lulus}
                            onChange={(e)=>set_tahun_lulus(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">IPK *</FormLabel>
                            <FormInput
                            formInputSize="sm"
                            id="ipk"
                            type="text"
                            placeholder=""
                            name='ipk'
                            value={ipk}
                            onChange={(e)=>set_ipk(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* pendidikan */}
                    {/* data pendukung */}
                    <div className='w-full mb-8'>
                        <p className='text-xs underline text-slate-800'>Data Pendukung</p>
                    </div>
                    <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5 text-xs pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400`}>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Nomor HP</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="nomor_hp"
                                type="text"
                                placeholder=""
                                name='nomor_hp'
                                value={nomor_hp}
                                onChange={(e)=>set_nomor_hp(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Nomor KTP</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="nomor_ktp"
                                type="text"
                                placeholder=""
                                name='nomor_ktp'
                                value={nomor_ktp}
                                onChange={(e)=>set_nomor_ktp(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Alamat KTP</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="alamat_ktp"
                                type="text"
                                placeholder=""
                                name='alamat_ktp'
                                value={alamat_ktp}
                                onChange={(e)=>set_alamat_ktp(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Alamat Domisili</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="alamat_domisili"
                                type="text"
                                placeholder=""
                                name='alamat_domisili'
                                value={alamat_domisili}
                                onChange={(e)=>set_alamat_domisili(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Bank</FormLabel>
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='bank_id'
                                required
                                value={bank_id}
                                onChange={(e)=>set_bank_id(e.target.value)}
                                >
                                <option></option>
                                {dataBank && dataBank.map((data :any, index :any)=>(
                                    <option key={index} value={data.id}>{data.name}</option>
                                ))}
                            </FormSelect>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Nomor Rekening</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="nomor_rekening"
                                type="text"
                                placeholder=""
                                name='nomor_rekening'
                                value={nomor_rekening}
                                onChange={(e)=>set_nomor_rekening(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Nomor Npwp</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="nomor_npwp"
                                type="text"
                                placeholder=""
                                value={nomor_npwp}
                                onChange={(e)=>set_nomor_npwp(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* data pendukung */}
                    {/* data kesehatan */}
                    <div className='w-full mb-8'>
                        <p className='text-xs underline text-slate-800'>Data Kesehatan</p>
                    </div>
                    <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5 text-xs pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400`}>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Nomor Bpjs Kesehatan</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="nomor_bpjs_kesehatan"
                                type="text"
                                placeholder=""
                                name='nomor_bpjs_kesehatan'
                                value={nomor_bpjs_kesehatan}
                                onChange={(e)=>set_nomor_bpjs_kesehatan(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Nomor Bpjs Ketenagakerjaan</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="nomor_bpjs_ketenagakerjaan"
                                type="text"
                                placeholder=""
                                name='nomor_bpjs_ketenagakerjaan'
                                value={nomor_bpjs_ketenagakerjaan}
                                onChange={(e)=>set_nomor_bpjs_ketenagakerjaan(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Contact Emergency</FormLabel>
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='contactEmergancyId'
                                value={contact_emergency_id}
                                onChange={(e)=>set_contact_emergency_id(e.target.value)}
                                >
                                    <option></option>
                                    {dataContact && dataContact.map((data :any, index : any)=>(
                                        <option key={index} value={data.id}>{data.name}</option>
                                    ))}
                            </FormSelect>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Nomor Emergency</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="emergency_number"
                                type="text"
                                placeholder=""
                                name='emergancyNumber'
                                value={emergency_number}
                                onChange={(e)=>set_emergency_number(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Alamat Emergancy</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="emergancyAddress"
                                type="text"
                                placeholder=""
                                name='emergancyAddress'
                                value={emergency_address}
                                onChange={(e)=>set_emergency_address(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Nomor Sim</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="nomor_sim"
                                type="text"
                                placeholder=""
                                name='nomor_sim'
                                value={nomor_sim}
                                onChange={(e)=>set_nomor_sim(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Golongan Darah</FormLabel>
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='golongan_darah_id'
                                required
                                value={golongan_darah_id}
                                onChange={(e)=>set_golongan_darah_id(e.target.value)}
                                >
                                    <option></option>
                                    {dataGolonganDarah && dataGolonganDarah.map((data :any, index : any)=>(
                                        <option key={index} value={data.id}>{data.name}</option>
                                    ))}
                            </FormSelect>
                        </div>
                    </div>
                    {/* data operasional */}
                    <div className='w-full mb-8'>
                        <p className='text-xs underline text-slate-800'>Data Operasional</p>
                    </div>
                    <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5 text-xs pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400`}>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Penempatan *</FormLabel>
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='penempatan_id'
                                required
                                value={penempatan_id}
                                onChange={(e)=>set_penempatan_id(e.target.value)}
                                >
                                    <option></option>
                                    {dataPenempatan && dataPenempatan.map((data : any, index : any)=>(
                                        <option key={index} value={data.id}>{data.name}</option>
                                    ))}
                            </FormSelect>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Jabatan *</FormLabel>
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='jabatan_id'
                                required
                                value={jabatan_id}
                                onChange={(e)=>set_jabatan_id(e.target.value)}
                                >
                                    <option></option>
                                    {dataJabatan && dataJabatan.map((data : any, index : any)=>(
                                        <option key={index} value={data.id}>{data.name}</option>
                                    ))}
                            </FormSelect>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Atasan</FormLabel>
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='atasan_id'
                                required
                                value={atasan_id}
                                onChange={(e:any)=>set_atasan_id(e.target.value)}
                                >
                                    <option></option>
                                    {dataAtasan && dataAtasan.map((data : any, index : any)=>(
                                        <option key={index} value={data.id}>{data.name}</option>
                                    ))}
                            </FormSelect>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">is Atasan ?</FormLabel>
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='is_atasan'
                                value={is_atasan}
                                onChange={(e)=>set_is_atasan(e.target.value)}
                                >
                                <option></option>
                                <option value='0'>No</option>
                                <option value='1'>Yes</option>
                            </FormSelect>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Jam Operasional Group *</FormLabel>
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='jamOperasionalId'
                                required
                                value={jam_operasional_group_id}
                                onChange={(e)=>set_jam_operasional_group_id(e.target.value)}
                                >
                                    <option></option>
                                    {dataOperasionalGroup && dataOperasionalGroup.map((data : any, index : any)=>(
                                        <option key={index} value={data.id}>{data.name}</option>
                                    ))}
                            </FormSelect>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Group *</FormLabel>
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='group_id'
                                required
                                value={group_id}
                                onChange={(e)=>set_group_id(e.target.value)}
                                >
                                    <option></option>
                                    {dataGroup && dataGroup.map((data : any, index : any)=>(
                                        <option key={index} value={data.id}>{data.name}</option>
                                    ))}
                            </FormSelect>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Extention *</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="extention"
                                type="text"
                                placeholder=""
                                name='extention'
                                value={extention}
                                onChange={(e)=>set_extention(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Quote *</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="quote"
                                type="text"
                                placeholder=""
                                name='quote'
                                value={quote}
                                onChange={(e)=>set_quote(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* data operasional */}
                    {/* kelengkapan data */}
                    <div className='w-full mb-8'>
                        <p className='text-xs underline text-slate-800'>Kelengkapan Data</p>
                    </div>
                    <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5 text-xs pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400`}>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Status *</FormLabel>
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='status'
                                required
                                value={status_id}
                                onChange={(e)=>set_status_id(e.target.value)}
                                >
                                <option></option>
                                {dataStatus && dataStatus.map((data : any, index : any)=>(
                                    <option key={index} value={data.id}>{data.name}</option>
                                ))}
                            </FormSelect>
                        </div>
                    </div>
                    {/* kelengkapan data */}
                </div>
                <div className={`flex items-center justify-center gap-x-4 col-span-12 mt-10 intro-y sm:justify-end  mb-20`}>
                    <Button
                        variant="secondary" 
                        className="w-24"
                        size='sm'
                        type='button'
                        onClick={()=>clickBack()}
                        >
                        Cancel
                    </Button>
                    <Button
                        variant="primary" 
                        className="w-24"
                        size='sm'
                        type='submit'
                        >
                        {isLoadingUserUpdate ? <LoadingIcon icon="circles" className="w-4 h4" color="white"  /> : 'Save'}
                    </Button>
                </div>
            </form>
        </div>
        
    )
}

export default updateEmployeePage