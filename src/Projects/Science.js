import React from 'react'
import SciencePic from '../Img/SciencePic.png'

function Science(){

    return(
        <div className="individual-projects">
            <div>High school Science Practice Tool</div>
            <br />
            <img src={SciencePic} alt="A picture of the High school science web app" />
            <p>An educational web application, aimed to present different types of sorting algorithms in animations. 
                This web app features customizable array size and height, and animation speed, allowing a more interactive and exploratory 
                learning experience.</p>
            <p>An educational web app, collaborated with a local tutor institute, to provide more aid for high school students to understand Science. This tool features all topics covered in high school science, 
                provides questions with different parameters, and generates steps for every single question.
            </p>
            <a href="www.simplyscience.ca" target="_blank" rel="noopener noreferrer">View Website</a>
        </div>
    )
}

export default Science