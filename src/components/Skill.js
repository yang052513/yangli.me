import React from 'react';
import SkillBlock from './skill/SkillBlock'
import '../css/Skill.css'

function Skill() {
    return(
        <div id="skill-section" class="module-layout" data-aos="fade-up">
            <h3 className="section-title">SKILLS</h3>
            <div id="skill-section-wrap" data-aos="fade-up">
                <SkillBlock 
                    imgUrl="resource/uidesign.png" 
                    title="UI/UX Design" 
                    content="I am proficient with Adobe Illustrator, Photoshop, Xd to design
                        elegent Web page layout. In addition, I have a lot of project experience with Adobe Affects that can
                        be utilized for video touch up."
                />
                <SkillBlock 
                    imgUrl="resource/webdesign.png" 
                    title="Web Development" 
                    content="I am a full stack web developer with expereince of html, css,
                        javascript, jquery, MongoDB, React, and others to create a dynamic and fully function websites"
                />
                <SkillBlock 
                    imgUrl="resource/develop.png" 
                    title="IOS App Development" 
                    content="I am also able to create IOS app with swift. I usually study IOS
                        developing courses during my spare time to extend my knowledge."
                />
            </div>
        </div>
    )
}

export default Skill