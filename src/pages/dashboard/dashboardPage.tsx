import _ from "lodash";
import Lucide from '../../base-components/Lucide'
import UserProfile from "../../components/dashboard/user";
import EventData from "../../components/dashboard/event";
import { getMeAuth } from "../../features/auth/meAuth";
import { eventData } from "../../features/event/event";
import { reportAbsenMonth } from "../../features/periodeKerja/absenReport";
import AbsenReport from "../../components/dashboard/absenReport";
import { SlideShow } from "../../features/slider/slideShow";

const DasboardPage = () => {

  //get data auth
  const {data: dataMe, loading:loadingMe, message:messageMe} = getMeAuth();

  const {dataEvents, page, limit, nextPage, prevPage, allPage} = eventData();

  const {dataPeriodeKerjas, nextPage:nextPagePeriodeKerja, prevPage:prevPagePeriodeKerja, page:pagePeriodeKerja, allPage:allPagePeriodeKerja} = reportAbsenMonth();

  const {slide} = SlideShow();

  return (
    <div className="grid grid-cols-12 gap-6 mb-10 text-xs">
      <div className="col-span-12 2xl:col-span-12">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-4 lg:col-span-4 sm:row-start-4 md:row-start-3 lg:row-start-auto">
            <UserProfile
              dataUser={dataMe}
            />
          </div>
          <div className="col-span-12 mt-4 sm:col-span-8 lg:col-span-8 sm:row-start-4 md:row-start-3 lg:row-start-auto">
            {slide}
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 lg:mb-10">
        <div className="grid grid-cols-12 gap-y-6 gap-x-4">
          {dataPeriodeKerjas.rows && dataPeriodeKerjas.rows.map((dataPeriodeKerja:any, index:any)=>(
            <div key={index} className="col-span-12 mt-4 sm:col-span-6 lg:col-span-6 lg:row-start-auto">
              <AbsenReport
                dataPeriodeKerja={dataPeriodeKerja}
                dataUser={dataMe}
              />
            </div>
          ))}
          <div className="col-span-12 flex flex-col-reverse px-5 py-4 border-b sm:flex-row text-slate-500 border-slate-200/60">
              <div className="flex items-center justify-end sm:ml-auto">
                  <div className="text-xs">{pagePeriodeKerja <= allPagePeriodeKerja ? pagePeriodeKerja : allPagePeriodeKerja} of {allPagePeriodeKerja} slide </div>
              <div
                  className="flex items-center justify-center w-5 h-5 ml-5"
              >
                  < Lucide 
                      icon="ChevronLeft" 
                      className="w-4 h-4 hover:cursor-pointer" 
                      onClick={()=>prevPagePeriodeKerja()}
                      />
              </div>
              <div
                  className="flex items-center justify-center w-5 h-5 ml-5"
              >
                  <Lucide 
                      icon="ChevronRight" 
                      className="w-4 h-4 hover:cursor-pointer"
                      onClick={()=>nextPagePeriodeKerja()}
                      />
              </div>
              </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 mb-4">
        <div className="grid grid-cols-12">
          <div className="col-span-12 mt-4 sm:col-span-6 lg:col-span-12 sm:row-start-4 md:row-start-3 lg:row-start-auto">
            <EventData 
              dataEvents={dataEvents}
              page={page}
              limit={limit}
              nextPage={nextPage}
              prevPage={prevPage}
              allPage={allPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DasboardPage;
