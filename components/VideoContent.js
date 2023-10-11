import React, { useRef, useState, useEffect } from 'react'
import { FaHeart,FaComment, FaShare } from 'react-icons/fa'; 
 const VideoContent = (props) => {
    const videolink = props.videolink;
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    
    const handleVideo = () =>{
        if(playing) {
            videoRef.current.pause()
            setPlaying(false);
        } else {
            videoRef.current.play()
            setPlaying(true);
        }
    };
    
    return(
        <div className="flex flex-row">
            <video 
            controls
            ref = {videoRef}
            onClick={handleVideo}
            className="w-[400px] h-[600px] ml-[60px] rounded-md mt-1" 
            src={videolink} 
            autoPlay muted>                
            </video>
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