import "@fullcalendar/react/dist/vdom";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { CalendarOptions } from "@fullcalendar/common";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

const CalendarAdmin = (props : any) => {
  const {dataAbsen, clickDate, clickEvent, dataEventInternal} = props;


  // const {dataAbsen, clickDate, dateSetting} = props;
  const [events, setEvents] = useState<any>([]);
  // const [date, setDate] = useState<any>(null);
  // console.log(events, 'view');

  useEffect(()=>{
    setEvents([]);
    inputAbsen(dataAbsen);
    inputEvent(dataEventInternal);
  },[dataAbsen, dataEventInternal]);

  const inputAbsen = (datas : any) => {
    datas.map((data : any)=>{
      if(data.tipe_absen.code !== '11'){
        if(data.tipe_absen.code === '13' || data.tipe_absen.code === '14'){
          const newData : any = {
            id:data.uuid,
            title:dayjs(data.tanggalMulai).locale('zh-cn').format('HH:mm:ss')+' '+data.tipe_absen.name,
            start:dayjs(data.tanggalMulai).format('YYYY-MM-DD'),
            end:dayjs(data.tanggalSelesai).format('YYYY-MM-DD'),
            color:'gray',
            className:'text-xs w-full px-0',
            groupId:'absen'
          } 
          setEvents((events: any)  => [...events, newData])
        }
        else{
          if(data.pelanggaran.code === '2'){
            if(data.status_inout.code === '2' || data.status_inout.code === '3'){
              const newData : any = {
                id:data.uuid,
                title:dayjs(data.tanggalMulai).locale('zh-cn').format('HH:mm:ss')+' '+data.tipe_absen.name,
                start:dayjs(data.tanggalMulai).format('YYYY-MM-DD'),
                end:dayjs(data.tanggalSelesai).format('YYYY-MM-DD'),
                color:'orange',
                className:'text-xs w-full px-0',
                groupId:'absen'
              } 
              setEvents((events: any)  => [...events, newData])
            }
            else{
              const newData : any = {
                id:data.uuid,
                title:dayjs(data.tanggalMulai).locale('zh-cn').format('HH:mm:ss')+' '+data.tipe_absen.name,
                start:dayjs(data.tanggalMulai).format('YYYY-MM-DD'),
                end:dayjs(data.tanggalSelesai).format('YYYY-MM-DD'),
                color:'red',
                className:'text-xs w-full px-0',
                groupId:'absen'
              } 
              setEvents((events: any)  => [...events, newData])
            }
          }
          else{
            const newData : any = {
              id:data.uuid,
              title:dayjs(data.tanggalMulai).locale('zh-cn').format('HH:mm:ss')+' '+data.tipe_absen.name,
              start:dayjs(data.tanggalMulai).format('YYYY-MM-DD'),
              end:dayjs(data.tanggalSelesai).format('YYYY-MM-DD'),
              color:'',
              className:'text-xs w-full px-0',
              groupId:'absen'
            } 
            setEvents((events: any)  => [...events, newData])
          }
        }
      }
      else{
        const newData : any = {
          id:data.uuid,
          title:dayjs(data.tanggalMulai).locale('zh-cn').format('HH')+' '+data.tipe_absen.name,
          start:dayjs(data.tanggalMulai).format('YYYY-MM-DD'),
          end:dayjs(data.tanggalSelesai).format('YYYY-MM-DD'),
          color:data.pelanggaran.code == 2 ? '#ff3c00' : '',
          className:'text-xs w-full px-0',
          groupId:'absen'
        }
        setEvents((events: any)  => [...events, newData])
      }
    })
  }
  
  const inputEvent = (datas : any) => {
    datas.map((data : any)=>{
        const newData : any = {
          id:data.uuid,
          title:data.name,
          start:dayjs(data.tanggalMulai).format('YYYY-MM-DD'),
          end:dayjs(data.tanggalSelesai).format('YYYY-MM-DD'),
          className:'text-sm text-white py-1 text-center w-full px-0',
          groupId:'event',
          color:'red',
          textColor:'white',
        } 
        setEvents((events: any)  => [...events, newData])
        // events.push(newData);
    })
  }

  const options : CalendarOptions = {
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
    droppable: true,
    headerToolbar: {
      left: "prev,next today dayGridMonth",
      center: "title",
      right: "",
    },
    // initialDate: dateSetting,
    viewClassNames:'cursor-pointer',
    navLinks: true,
    editable: true,
    dayMaxEvents: true,
    events: {events},
    dateClick: (info)=>clickDate(info),
    // eventClick: (info)=>alert(info.event._def),
    eventClick: (info)=>clickEvent(info.event._def),
    // drop: function (info) {
    //   if (
    //     document.querySelectorAll("#checkbox-events").length &&
    //     (document.querySelectorAll("#checkbox-events")[0] as HTMLInputElement)
    //       ?.checked
    //   ) {
    //     (info.draggedEl.parentNode as HTMLElement).remove();
    //     if (
    //       document.querySelectorAll("#calendar-events")[0].children.length == 1
    //     ) {
    //       document
    //         .querySelectorAll("#calendar-no-events")[0]
    //         .classList.remove("hidden");
    //     }
    //   }
    // },
  };

  return (
    <div className="full-calendar">
      <FullCalendar {...options} />
    </div>
  );
}

export default CalendarAdmin;
