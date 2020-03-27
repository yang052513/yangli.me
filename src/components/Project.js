import React from 'react'
import ProjectItem from './project/ProjectItem'
import projectList from './JSON/projectList'
import '../css/Project.css'

function Project() {
    const projectComponents = projectList.map(item => 
        <ProjectItem 
            key={item.id}
            project={item}
        />)

    return(
        <div id="project-section-showcase">
            <div id="project-section" class="module-layout">
                <h3 className="section-title">PROJECTS</h3>
                <div id="project-case-wrap">
                    {projectComponents}
                </div>
            </div>
        </div>
    )
}
export default Project