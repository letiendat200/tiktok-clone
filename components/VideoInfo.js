import React from 'react'
import { FaMusic } from 'react-icons/fa'; 
 const VideoInfo = () => {
    return(
        <div className="flex flex-row">
            <img className="w-[50px] max-h-[70px] rounded-full" src ="https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.15752-9/387536664_862210075111562_1067181418563230859_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=xOf_IcUH8poAX8PxrkO&_nc_ht=scontent.fsgn8-3.fna&oh=03_AdQM3i2oE_xLkLt13z60Mv2Uw4zmpWYxjsH3kXugQMzZVA&oe=654B641C" alt="avt" />
            <div className="ml-3 min-w-[80%]">
                <div>
                    <a href="#" className="text-xl font-bold hover:underline"> Bé Đạt </a>
                    <a href="#" className="text-xl"> Đạt's channel </a>
                </div>
                <div className="max-w-[250px]">
                    A newly made channel for a newly made website 
                </div>
                <div className = "flex flex-row items-center">
                    <FaMusic/> <span className="ml-4"> The song is playing</span>
                </div>
            </div>
            <div><button className="p-1 pl-3 pr-3 border-2 border-red-500 text-red-500 rounded-md"> Follow</button> </div>
        </div>
        
    )
}

export default VideoInfo;