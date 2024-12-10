import React from 'react'
import Table7 from '../../components/tableTemplate/table7'
import { getDataSliderTable } from '../../features/slider/slider';

const sliderPage = () => {

  const {dataResult, nextPage, prevPage, page, allPage} = getDataSliderTable();
    
  return (
    <div className='w-full'>
        <Table7
            datas={dataResult}
            linkView="/slider/view"
            linkCreate="/slider/create"
            nextPage={nextPage}
            prevPage={prevPage}
            page={page}
            allPage={allPage}
        />
    </div>
  )
}

export default sliderPage
