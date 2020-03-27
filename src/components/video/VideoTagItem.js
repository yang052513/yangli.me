import React from 'react'

function VideoTagItem(props) {
    return(
        <p className="video-tag">{props.video.tag[0]}</p>
    )
}

export default VideoTagItem