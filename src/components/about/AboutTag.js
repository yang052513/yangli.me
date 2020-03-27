import React from 'react'
import AboutTagItem from './AboutTagItem'
import skillList from '../JSON/skillList'

function AboutTag() {
    const tagComponents = skillList.map(tag => 
        <AboutTagItem 
            key={tag.id} 
            tagItem={tag}
        />)
        
    return(
        <div id="about-section-tag-wrap">
            {tagComponents}
        </div>
    )
}

export default AboutTag