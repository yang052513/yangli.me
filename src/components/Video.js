import React from 'react'
import VideoContainer from './video/VideoContainer'
import videoList from './JSON/videoList'
import '../css/Video.css'
import '../video'

function Video() {
    const videoContainerComponents = videoList.map(item => 
        <VideoContainer
            key={item.id}
            video={item}
        />
    )

    return(
        <div id="video-section" className="module-layout">
            <h3 className="section-title">VIDEO PORTFOLIO</h3>
            <div className="video-wrap">
                {videoContainerComponents}
            </div>

        </div>
    )
}

export default Video