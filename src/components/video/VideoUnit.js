import React from 'react'

function VideoUnit(props) {
    return (
        <div>
            <video className="video-player" width="960" controls>
                <source src={props.video.source} type="video/mp4"/>
            </video> 
        </div>
    )
}

export default VideoUnit