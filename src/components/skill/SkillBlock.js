import React from 'react';

function SkillBlock(props) {
    return(
        <div className="skill-section-block">
            <img src={props.imgUrl} />
            <h4 className="skill-section-block-title">{props.title}</h4>
            <p className="skill-section-block-content">{props.content}</p>
        </div>
    )
}
export default SkillBlock