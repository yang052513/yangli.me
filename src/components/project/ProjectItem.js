import React from 'react'

function ProjectItem(props) {
    return (
        <div className="showcase-container">
            <div id={props.project.id} className="showcase-overlay">
                <div className="overlay-content-wrap">
                    <p className="overlay-tit">{props.project.title}</p>
                    <p className="overlay-cont">{props.project.desc}</p>
                </div>
            </div>
            <img className="project-showcase" src={props.project.imgUrl}/>
        </div>
    )
}

export default ProjectItem