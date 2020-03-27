import React from 'react'
import CancelBtn from '../components/projectmodal/CancelBtn'
import ModalTitle from '../components/projectmodal/ModalTitle'


function ProjectModal(props) {
    return(
        <div id={props.id} className="project-modal">
            <div className="project-modal-content">
                <p className="modal-content-title">{props.title}</p>
                <CancelBtn/>
           
            <div className="modal-content-wrap">
                <div className="modal-content-description">
                    <ModalTitle text="Description: "/>
                    <p className="modal-description-content">{props.content}</p>
                    <ModalTitle text="Features: "/>
                    <ul className="modal-description-content">
                        <li>{props.feature}</li>
                    </ul>
                    <a href={props.demoUrl}><button className="live-demo">Live Demo</button></a>
                </div>

                <div className="modal-content-showcase">
                    <img src={props.imgUrl} className="modal-content-img"/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProjectModal