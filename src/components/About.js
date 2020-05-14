import React from 'react'

function About(){
    return(
        <h1 style={{marginLeft:"25%", padding:"1px 20px"}}>
            <div>
                <h2>Who Am I?</h2>
                <p>
                    My name is Steven Xu. I am a Computer Science student at the University of Toronto.
                </p>
                <p>
                    I also already completed a Bachelor of Science degree in Biochemistry at the University of British Columbia.
                </p>
                <br />
                <h2>Languages I am familiar with:</h2>
                <ul className="languages">
                    <li>Python</li>
                    <li>Java</li>
                    <li>C, C++</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
                <br />
                <h2>Web frameworks I am familiar with:</h2>
                <ul className="frameworks">
                    <li>React</li>
                    <li>django</li>
                </ul>
            </div>
        </h1>
    )
}

export default About