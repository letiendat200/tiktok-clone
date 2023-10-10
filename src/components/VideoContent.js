import React from 'react'
import { FaHeart,FaComment, FaShare } from 'react-icons/fa'; 
 const VideoContent = () => {
    return(
        <div className="flex flex-row">
            <video className="w-[80%] max h-[600px] ml-[60px] rounded-md mt-1" src="https://scontent.xx.fbcdn.net/v/t42.3356-2/367970633_6559599160773402_8220661390576667831_n.mp4?_nc_cat=105&ccb=1-7&_nc_sid=060d78&_nc_ohc=-lh9EBrjdBoAX8nNDoP&_nc_ht=scontent.xx&oh=03_AdTevnCHtvMSzuUBSu8WmIaoIwHAiodB-G4a4nLthQ3WYQ&oe=6525C27E&dl=1" loop></video>
            <div className="flex flex-col justify-end ml-7">
                <div className="flex flex-col items-center mb-3">
                    <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
                        <FaHeart className="text-xl"/>
                    </div>
                    <span>23123</span>
                </div> 
                <div className="flex flex-col items-center mb-3">
                    <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
                        <FaComment className="text-xl"/>
                    </div>
                    <span>401</span>
                </div>          
                <div className="flex flex-col items-center">
                    <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
                        <FaShare className="text-xl"/>
                    </div>
                    <span>12</span>
                </div>                   
            </div>              
        </div>
    )
}

export default VideoContent;