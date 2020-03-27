import React from 'react';
import TimeLineItem from './TimeLineItem'

function TimeLine() {
    return(
        <div className="timeline">
            <ul>
                <li data-aos="fade-up">
                    <TimeLineItem 
                        title="British Columbia Institute of Technology"
                        position="Computer System Technology Diploma"
                        duty="Created multiple web porjects with peers by using html, css,
                            and javascript. Proficient programming with C and Java."
                        time="September 2019 - April 2021"
                    />
                </li>
                <li data-aos="fade-up">
                    <TimeLineItem 
                        title="Victor Immigration Inc."
                        position="Immigration Consult"
                        duty="Help clients to renew their status in Canana by filling the form and
                            connect CIC for clients"
                        time="December 2018 - July 2019"
                    />
                </li>
                <li data-aos="fade-up">
                    <TimeLineItem 
                        title="Simon Fraser University"
                        position="Bachelor of Arts in Economics"
                        duty="Achieved 3 times Dean's Honor Roll with excellent academic records.
                            Enhanced my critical thinking by taking advance Economics courses."
                        time="September 2015 - August 2018"
                    />
                </li>
                <li data-aos="fade-up">
                    <TimeLineItem 
                        title="T&amp;T Supermarket"
                        position="Grocery Assistant"
                        duty="Provided excellent customer service by helping customers efficiently
                            in a timely and friendly manner,
                            and received good feedback from customer survey"
                        time="September 2015 - August 2018"
                    />
                </li>
            <div style={{clear: "both"}}></div>    
            </ul>
        </div>
    )
}

export default TimeLine