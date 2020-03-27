import React from 'react';

function TimeLineItem(props) {
    return(
        <div>
            <div className="content content-left">
                <h3>{props.title}</h3>
                <p className="content-job">{props.position}</p>
                <p className="content-details">{props.duty}</p>
            </div>
            <div className="time">
                <h4>{props.time}</h4>
            </div>
        </div>
    )
}

export default TimeLineItem