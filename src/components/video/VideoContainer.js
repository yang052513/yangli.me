import React from 'react'
import VideoTagItem from './VideoTagItem'
import videoList from '../JSON/videoList'

function VideoContainer(props) {
    const videoTagComponents = videoList.map(item => 
        <VideoTagItem
            key={item.id} 
            video={item}
        />)

    return(
        <div className="video-container">
            <div className="video-preview-wrap">
                <img className="video-play-btn" src="resource/play-button.png" width="70px" height="auto" />
                <img className="video-preview-img" src={props.video.preview} width="400px" height="225px" />
                <video className="video-player" width="960" controls>
                    <source src={props.video.source} type="video/mp4" />
                </video>
            </div>
                
            <p className="video-title">{props.video.title}</p>
            <p className="video-info">{props.video.desc}</p>
            <a href={props.video.url} target="_blank" /><img src="resource/bilibili.png"  width="120px" height="auto" />
               
            <div className="video-tag-wrap">    
                {/* {videoTagComponents} */}
            </div>
        </div>
    )
}

export default VideoContainer