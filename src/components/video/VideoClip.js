import React from 'react'
import PlayBtn from './PlayBtn'
import VideoUnit from './VideoUnit'
import videoList from '../JSON/videoList'

function VideoClip(props) {
    const videoUnitComponents = videoList.map(item => 
        <VideoUnit 
            key={item.id}
            video={item}
        />
        )
    return(
       <div className="video-preview-wrap">
           <PlayBtn />
           <img className="video-preview-img" src={props.video.preview} width="400px" height="225px"/>
           {videoUnitComponents}
       </div> 
    )
}

export default VideoClip