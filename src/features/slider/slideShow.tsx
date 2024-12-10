import TinySlider from "../../base-components/TinySlider";
import { useDispatch, useSelector } from "react-redux";
import { getSlider, resetSlider } from "../../stores/features/sliderSlice";
import { useEffect, useState } from "react";
import LoadingIcon from "../../base-components/LoadingIcon";

export const SlideShow = () => {
    const [datas, setDatas] = useState<any>([]);

    const {data:dataSlide, isError, isSuccess, isLoading, message} = useSelector(
        (state : any) => state.slider
    );

    const dispatch = useDispatch();

    useEffect(()=>{
        if(isSuccess && dataSlide){
            if(!isLoading){
                setDatas(dataSlide && dataSlide.datas && dataSlide.datas.data)
                dispatch(resetSlider());
            }
        }
    },[isSuccess, dataSlide, isLoading])

    useEffect(()=>{
        dispatch(getSlider());
    },[])

    const slide :any = (
        <>
        <div className={`${datas.length !== 0 ? 'col-span-12 box p-2 md:flex' : 'hidden'} `}>
            <div className={`${isLoading === true ? '' : 'hidden'} h-10 px-2`}>
                <LoadingIcon icon="circles" className="w-4 h4" color="primary"  />
            </div>
            <div className={`${isLoading !== true && datas.length !== 0 ? '' : 'hidden'} mx-6`}>
                {datas.length !== 0 ?
                <TinySlider
                    options={{
                    controls: true,
                    }}
                    >
                    {datas && datas.map((data:any, key:string)=>(
                        <div key={key} className={`h-fit md:h-fit lg:h-72 md:w-full px-2`}>
                            <div className=" rounded-md bg-slate-100 dark:bg-darkmode-400">
                                <img 
                                    src={import.meta.env.VITE_REACT_APP_API_URL+data.file_link} 
                                    alt="not found" 
                                    className="w-full"
                                />
                            </div>
                        </div>
                    ))}
                </TinySlider>
                :
                <></>
                }
            </div>
        </div>
        </>
    )

    return {slide}
}