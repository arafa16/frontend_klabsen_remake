import Notification from "../base-components/Notification";
import { useRef, useEffect } from "react";
import { NotificationElement } from "../base-components/Notification";

export const getMessageShow = (datas : any) =>{
    // Basic non sticky notification
    const notifMessage = useRef<NotificationElement>();
    
    useEffect(()=>{
        if(datas !== null){
            notifMessage.current?.showToast();
        }
    },[datas]);

    const message = (
        <Notification
            getRef={(el) => {
            notifMessage.current = el;
            }}
            options={{
            duration: 3000,
            }}
            className="flex flex-col sm:flex-row"
        >
            <div className="font-medium">
                {datas && datas.datas && datas.datas.message}
            </div>
        </Notification>
    )

    return (message)
}