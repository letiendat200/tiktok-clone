import React from 'react'
import VideoInfo from './VideoInfo';
import VideoContent from './VideoContent';
 const Video = () => {
    return(
        <div className='max-w-[600px] border-b-2 border-gray-200 pb-10 pt-5'>
            <VideoInfo />
            <VideoContent />
        </div>
    )
}

export default Video;