import React, { useEffect } from 'react'
import Lucide from '../../base-components/Lucide'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'

export const calculationAbsenTable = (props : any) => {
  const {datas, linkView, linkCreate, page, allPage, prevPage, nextPage} = props;

  const navigate = useNavigate();

  const table = (
    <div className={`grid grid-cols-12 mt-5 box`}>
      {/* BEGIN: Inbox Content */}
      <div className="col-span-12 xl:col-span-12 2xl:col-span-12">
        <div className="flex flex-col-reverse px-5 py-4 border-b sm:flex-row text-slate-500 border-slate-200/60 text-xs">
          <div className="flex items-center flex-none mr-5 w-5">
            No
          </div>
          <div className="flex items-center flex-none mr-5 w-24">
            Nama
          </div>
          <div className="w-64 truncate sm:w-24">
            NIK
          </div>
          <div className="w-64 truncate sm:w-24">
            Jumlah Hari
          </div>
          <div className="w-64 truncate sm:w-24">
            Masuk
          </div>
          <div className="w-64 truncate sm:w-24">
            Masuk (N)
          </div>
          <div className="w-64 truncate sm:w-24 text-red-500">
            Masuk (P)
          </div>
          <div className="w-64 truncate sm:w-24">
            Pulang
          </div>
          <div className="w-64 truncate sm:w-24">
            Pulang (N)
          </div>
          <div className="w-64 truncate sm:w-24 text-red-500">
            Pulang (P)
          </div>
          <div className="w-64 truncate sm:w-24 ">
            Cuti
          </div>
          <div className="w-64 truncate sm:w-24 ">
            Sakit
          </div>
          <div className="w-64 truncate sm:w-24 text-red-500">
            Tidak Absen
          </div>
          <div className="w-64 truncate sm:w-24 text-red-500">
            Total (Point)
          </div>
          <div className="w-64 truncate sm:w-24 text-red-500">
            Point (P)
          </div>
        </div>
        <div className="overflow-x-auto sm:overflow-x-visible text-xs">
            {datas && datas.map((data : any, index : any) => (
            <div 
              key={index} 
              className="intro-y"
              // onClick={()=>navigate(linkView+`/${data.uuid}`)}
              >
              <div
                className={clsx([
                  "transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400",
                  "hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded",
                ])}
                >
                  <div className="flex px-5 py-3">
                      <div className="flex items-center flex-none mr-5 w-5">
                          {index+1}
                      </div>
                      <div className="flex items-center flex-none mr-5 w-24">
                          {data && data.name}
                      </div>
                      <div className="w-64 truncate sm:w-24">
                        {data && data.nik}
                      </div>
                      <div className="w-64 truncate sm:w-24">
                        <span
                          className={clsx([
                          "ml-3 truncate"
                          ])}
                          >
                          {data && data.jumlah_hari}
                        </span>
                      </div>
                      <div className="w-64 truncate sm:w-24">
                        <span
                          className={clsx([
                          "ml-3 truncate"
                          ])}
                          >
                          {data && data.data_in}
                        </span>
                      </div>
                      <div className="w-64 truncate sm:w-24">
                        <span
                          className={clsx([
                          "ml-3 truncate"
                          ])}
                          >
                          {data && data.data_in_normal}
                        </span>
                      </div>
                      <div className="w-64 truncate sm:w-24">
                        <span
                          className={clsx([
                          "ml-3 truncate"
                          ])}
                          >
                          {data && data.data_in_pelanggaran}
                        </span>
                      </div>
                      <div className="w-64 truncate sm:w-24">
                        <span
                          className={clsx([
                          "ml-3 truncate"
                          ])}
                          >
                          {data && data.data_out}
                        </span>
                      </div>
                      <div className="w-64 truncate sm:w-24">
                        <span
                          className={clsx([
                          "ml-3 truncate"
                          ])}
                          >
                          {data && data.data_out_normal}
                        </span>
                      </div>
                      <div className="w-64 truncate sm:w-24">
                        <span
                          className={clsx([
                          "ml-3 truncate"
                          ])}
                          >
                          {data && data.data_out_pelanggaran}
                        </span>
                      </div>
                      <div className="w-64 truncate sm:w-24">
                        <span
                          className={clsx([
                          "ml-3 truncate"
                          ])}
                          >
                          {data && data.data_cuti}
                        </span>
                      </div>
                      <div className="w-64 truncate sm:w-24">
                        <span
                          className={clsx([
                          "ml-3 truncate"
                          ])}
                          >
                          {data && data.data_sakit}
                        </span>
                      </div>
                      <div className="w-64 truncate sm:w-24">
                        <span
                          className={clsx([
                          "ml-3 truncate"
                          ])}
                          >
                          {data && data.data_tidak_absen * 2}
                        </span>
                      </div>
                      <div className="w-64 truncate sm:w-24">
                        <span
                          className={clsx([
                          "ml-3 truncate"
                          ])}
                          >
                          {data.data_tidak_absen + data.data_out_pelanggaran + data.data_in_pelanggaran}
                        </span>
                      </div>
                      <div className="w-64 truncate sm:w-24">
                        <span
                          className={clsx([
                          "ml-3 truncate"
                          ])}
                          >
                          {(data.data_tidak_absen + data.data_out_pelanggaran + data.data_in_pelanggaran)*0.005}
                        </span>
                      </div>
                  </div>
                </div>
            </div>
            ))}
        </div>
      </div>
      {/* END: Inbox Content */}
    </div>
  )
  
  return {table}
}