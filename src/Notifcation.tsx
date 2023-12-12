import { FC } from "react";
import { FaCircle } from "react-icons/fa6";


type NotifcationParams ={
    unread:boolean;
    avatar:string;
    username:string;
    message:string;
    time:string;
    link?:string;
    image?:{src:string;alt:string;};
    taggedMessage?:string;
}

export const Notification: FC<NotifcationParams> = (props:NotifcationParams) => {

    return (
        <div className={`flex justify-start rounded p-3 ${props.unread? "bg-blue-100":""} min-w-full`}>
            <img className="w-10 h-10 rounden-full mx-2" src="/images/avatar-angela-gray.webp" alt="Angela Gray" />
            <div className="mx-2 flex flex-col w-full">
                <div className="flex justify-between mx-0 min-w-full">
                    <div className="flex flex-col">
                        <div className="text-sm flex">
                            <span className="inline">
                                <a className=" mx-1 font-bold">{props.username}</a>
                                <a className="mx-1">{props.message} </a>
                                {!!props.link && <a className="font-semibold mx-1 cursor-pointer">{props.link}</a>}
                            </span>
                            {props.unread && <FaCircle color='red' className="w-2 h-2"/>}
                        </div>
                        <div className="text-sm my-1 text-gray-500">{props.time}</div>
                    </div>
                    {!!props.image && <img className="h-10 w-10 ml-4" src={props.image.src} alt={props.image.alt} />}
                </div>
                
                {!!props.taggedMessage && <div className="flex border-[1px] rounded p-3 text-sm border-gray-300 transition-color ease-in-out duration-300 cursor-pointer hover:bg-blue-300">
                    {props.taggedMessage}
                </div>}
            </div>
            
            
        </div>
    );
}
