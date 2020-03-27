import React from 'react'
import '../css/Form.css'

function Form() {
    return(
        <div className="form-wrap" data-aos="fade-up">
            <form>
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name?" required />

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name?" required />

                <label for="email">Email Address</label>
                <input type="text" id="email" name="emailaddress" placeholder="So we could get back to you" required />

                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="What do you want to say?" style={{height: "200px"}} required></textarea>
                
                <div class="submit-button">
                    <input id="submit-btn" type="submit" value="Submit" class="submit-button" />
                </div>
                <br/>
                <br/>
            </form>
        </div>
    )
}

export default Form