import React from 'react'
import ProjectModal from './ProjectModal'
import '../css/Modal.css'
import '../modal'

function ProjectModalWrap() {
    return(
        <div>
            <ProjectModal 
                id="budget-project-modal"
                title="Budget"
                content="A simple budget tracker which allows you login and track you
                    expense within limited time frame. I focus a lot on UI/UX design as better layput could improve
                    user experience. This is my first web project in BCIT by using html, css, javascript and
                    firebase."
                feature="Water stimulate wave effect tells user how much you left"
                demoUrl="https://comp1930-inclass.firebaseapp.com/"
                imgUrl="resource/project-1.jpg"
            />
            <ProjectModal 
                id="haikyuu-project-modal"
                title="Haikyuu!!! To the Top!"
                content="I am a huge fan of Haikyuu animation series. As the season 4
                    coming, I decided to create a website that I can track episode log easily on the go. The web is
                    mainly for practicing my grid and flex skills."
                feature="Dynamic website by using grid and flex"
                demoUrl="https://comp1930-inclass.firebaseapp.com/"
                imgUrl="resource/project-2.jpg"
            />
            <ProjectModal 
                id="howsurday-project-modal"
                title="Twitter"
                content="At first I was practicing my css skill by copying twitter
                    layout. Soon after I realized that I could make a soical media app that people can post contents
                    to the app and share with other people."
                feature="Water stimulate wave effect tells user how much you left"
                demoUrl="https://twitter-6f022.firebaseapp.com"
                imgUrl="resource/project-1.jpg"
            />
            <ProjectModal 
                id="osaka-project-modal"
                title="Budget"
                content="A simple budget tracker which allows you login and track you
                    expense within limited time frame. I focus a lot on UI/UX design as better layput could improve
                    user experience. This is my first web project in BCIT by using html, css, javascript and
                    firebase."
                feature="Water stimulate wave effect tells user how much you left"
                demoUrl="https://comp1930-inclass.firebaseapp.com/"
                imgUrl="resource/project-1.jpg"
            />
            <ProjectModal 
                id="dollars-project-modal"
                title="Budget"
                content="A simple budget tracker which allows you login and track you
                    expense within limited time frame. I focus a lot on UI/UX design as better layput could improve
                    user experience. This is my first web project in BCIT by using html, css, javascript and
                    firebase."
                feature="Water stimulate wave effect tells user how much you left"
                demoUrl="https://comp1930-inclass.firebaseapp.com/"
                imgUrl="resource/project-1.jpg"
            />
            <ProjectModal 
                id="pinboard-project-modal"
                title="Budget"
                content="A simple budget tracker which allows you login and track you
                    expense within limited time frame. I focus a lot on UI/UX design as better layput could improve
                    user experience. This is my first web project in BCIT by using html, css, javascript and
                    firebase."
                feature="Water stimulate wave effect tells user how much you left"
                demoUrl="https://comp1930-inclass.firebaseapp.com/"
                imgUrl="resource/project-1.jpg"
            />
        </div>
    )
}

export default ProjectModalWrap