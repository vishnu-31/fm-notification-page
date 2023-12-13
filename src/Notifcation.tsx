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
        <div className={`flex justify-start rounded-lg p-3 m-1 ${props.unread? "unread":""} min-w-full`}>
            <img className="w-10 h-10 rounden-full mx-2" src={props.avatar} alt={props.username} />
            <div className="mx-2 flex flex-col w-full">
                <div className="flex justify-between mx-0 min-w-full">
                    <div className="flex flex-col">
                        <div className="text-sm flex">
                            <span className="inline">
                                <a className=" mx-1 font-bold cursor-pointer hover:text-blue-500">{props.username}</a>
                                <a className="mx-1">{props.message} </a>
                                {!!props.link && <a className="font-semibold mx-1 cursor-pointer highlighted-text hover:text-blue-500">{props.link}</a>}
                            </span>
                            {props.unread && <FaCircle color='red' className="w-[8px]  h-[8px] mt-2"/>}
                        </div>
                        <div className="text-sm my-1 text-gray-500">{props.time}</div>
                    </div>
                    {!!props.image && <img className="h-10 w-10 ml-4 cursor-pointer" src={props.image.src} alt={props.image.alt} />}
                </div>
                
                {!!props.taggedMessage && <div className="flex border-[1px] rounded p-3 text-sm text-gray-500 border-gray-300 transition-color ease-in-out duration-300 cursor-pointer hover-tagged">
                    {props.taggedMessage}
                </div>}
            </div>
            
            
        </div>
    );
}
