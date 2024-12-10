import FormTemplate3 from '../../components/formTemplate/formTemplate3';
import { useParams} from 'react-router-dom';
import { deleteDataPeriodeKerja, updateDataPeriodeKerja } from '../../features/periodeKerja/periodeKerja';

const editPeriodeKerjaPage = () => {
    const {uuid} = useParams();
    
    const {
      changeDataSetting, 
      name, set_name, 
      bulan, set_bulan,
      tahun, set_tahun,
      tanggal_mulai, set_tanggal_mulai,
      tanggal_selesai, set_tanggal_selesai,
      jumlah_hari, set_jumlah_hari,
      code, set_code, 
      is_active, set_is_active, 
      isLoading
    } = updateDataPeriodeKerja({uuid})

    const {deleteData, isLoading:isLoadingDelete} = deleteDataPeriodeKerja({uuid})

  return (
    <div>
        <FormTemplate3
            name={name}
            setName={set_name}
            bulan={bulan}
            setBulan={set_bulan}
            tahun={tahun}
            setTahun={set_tahun}
            tanggalMulai={tanggal_mulai}
            setTanggalMulai={set_tanggal_mulai}
            tanggalSelesai={tanggal_selesai}
            setTanggalSelesai={set_tanggal_selesai}
            jumlahHari={jumlah_hari}
            setJumlahHari={set_jumlah_hari}
            code={code}
            setCode={set_code}
            isActive={is_active}
            setIsActive={set_is_active}
            linkBack={'/periodeKerja'}
            submitAction={changeDataSetting}
            loadingSubmit={isLoading}
            deleteAction={deleteData}
            isDeleteActive={true}
            loadingDelete={isLoadingDelete}
        />
    </div>
  )
}

export default editPeriodeKerjaPage