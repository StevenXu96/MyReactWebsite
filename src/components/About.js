import React from 'react'
import StevenPic from '../Img/StevenPic.png'

function About(){
    return(
        <div className="about_grid">
            <div className="About_Me">
                <h3>About Me</h3>
                <p>A WHOLE PARAGRAH, BLAH BLAH BLAH</p>
            </div>
            <div className="Picture">
                <img src={StevenPic} alt="A picture of the awesome programmer Steven" />
            </div>
            <div className="Skills">
                <h3>Skills</h3>
            </div>
            <div className="skill1">
            </div>
            <div className="skill2">
            </div>
        </div>
    )
}

export default About