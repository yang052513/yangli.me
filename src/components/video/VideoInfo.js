import React from 'react'
import Bilibili from './Bilibili'

function VideoInfo(props) {
    return(
       <div>
            <p className="video-title">{props.video.title}</p>
            <p className="video-info">{props.video.desc}</p>
            <a href={props.video.url} target="_blank">
                <Bilibili />
            </a>
       </div> 
    )
}

export default VideoInfo