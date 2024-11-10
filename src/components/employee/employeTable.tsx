import React from 'react'
import Lucide from '../../base-components/Lucide'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { FormInput } from '../../base-components/Form';

const employeTable = (props : any) => {
  const {datas, limit, setLimit, linkView, linkCreate, page, allPage, prevPage, nextPage, search, setSearch} = props;
  const navigate = useNavigate();
  
  return (
    <>
      <div className="grid grid-cols-12 box">
          {/* BEGIN: Inbox Content */}
          <div className="col-span-12 xl:col-span-12 2xl:col-span-12">
              <div className="flex flex-col-reverse px-5 py-4 border-b sm:flex-row text-slate-500 border-slate-200/60">
                <div className='flex items-center mx-4'>
                  <FormInput
                    type="text"
                    className="block px-3 py-1 mt-0 mx-2 text-xs"
                    placeholder="search by name"
                    name='search'
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-end sm:ml-auto">
                  <div className='flex items-center mx-4'>
                    <FormInput
                      type="text"
                      className="block px-1 py-0 mt-0 w-10 mx-2 text-center text-xs"
                      placeholder="0"
                      name='limit'
                      value={datas.count === 0 ? 0 : (limit > datas.count ? datas.count : limit)}
                      onChange={(e)=>setLimit(e.target.value)}
                    /> 
                    <p className=' text-center text-xs'>/ {datas.count}</p>
                  </div>
                  <div className="text-xs">{page <= allPage ? page : allPage} of {allPage} page </div>
                  <div
                      className="flex items-center justify-center w-5 h-5 ml-5"
                  >
                      <Lucide 
                          icon="ChevronLeft" 
                          className="w-4 h-4 hover:cursor-pointer" 
                          onClick={()=>prevPage()}/>
                  </div>
                  <div
                      className="flex items-center justify-center w-5 h-5 ml-5"
                  >
                      <Lucide 
                          icon="ChevronRight" 
                          className="w-4 h-4 hover:cursor-pointer"
                          onClick={()=>nextPage()}
                          />
                  </div>
                  <div
                      className="flex items-center justify-center w-5 h-5 ml-5 cursor-pointer hover:text-blue-500"
                      onClick={()=>navigate(linkCreate)}
                  >
                      <Lucide icon="FilePlus" className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto sm:overflow-x-visible text-xs">
                  {datas.rows && datas.rows.map((data : any, index : any) => (
                  <div 
                      key={index} 
                      className="intro-y"
                      onClick={()=>navigate(linkView+`/${data.uuid}`)}
                      >
                      <div
                          className={clsx([
                              "transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400",
                              "hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded",
                          ])}
                      >
                      <div className="flex px-5 py-3">
                          <div className="flex items-center flex-none mr-5 w-72">
                            <div className='w-16'>
                              {index+1+((page-1)*limit)}
                            </div>
                            <div
                              className={clsx([
                              "ml-3 truncate"
                              ])}
                              >
                              {data && data.name}
                            </div>
                          </div>
                          <div className="w-64 truncate sm:w-72">
                            <span
                              className={clsx([
                              "ml-3 truncate"
                              ])}
                              >
                              {data && data.email}
                            </span>
                          </div>
                          <div className="w-64 truncate sm:w-72">
                            <span
                              className={clsx([
                              "ml-3 truncate"
                              ])}
                              >
                              {data && data.group && data.group.name}
                            </span>
                          </div>
                          <div
                            className={clsx([
                              "pl-10 ml-auto whitespace-nowrap"
                            ])}
                            >
                            {data.isActive ? 'active' : 'non active'}
                          </div>
                      </div>
                      </div>
                  </div>
                  ))}
              </div>
          </div>
          {/* END: Inbox Content */}
      </div>
    </>
  )
}

export default employeTable