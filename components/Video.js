import React from 'react'
import VideoInfo from './VideoInfo';
import VideoContent from './VideoContent';
 const Video = (prop) => {
    const videolink = prop.videolink;
    return(
        <div className='snap-start max-w-[600px] border-b-2 border-gray-200 pb-10 pt-5'>
            <VideoInfo />
            <VideoContent videolink = {videolink}/>
        </div>
    )
}

export default Video;