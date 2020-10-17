import React from 'react'
import StevenPic from '../Img/StevenPic.png'

function About(){
    return(
        <div className="about_grid">
            <div className="About_Me">
                <h1>About Me</h1>
                <p>Hi, My name is Steven. I am currently a Computer Science student at the University of Toronto. 
                    I am passionate about programming, especially learning new languages to build new things, 
                    such as this website! Currently, I am working on a creative full stack MERN Chat App which utilizes socket-io. 
                    So far, I have completed 4 personal projects, ranging from full-stact web applications to Android Software 
                    developments. One thing I have learnt from these projects is that I love learning new things, 
                    and constantly improving myself. 
                </p> <br />
                <p>
                    I've been enthusiastic about open source. One major comtribution I have made so far was when I was implementing 
                    the NBA Analytic Tool. I was using an API service of an open source project. I contributed to that API service 
                    to make the search function much more optimized by adding new search filters. 
                </p> <br />
                <p>
                    Outside of programming related fields, I love sports. I am fairly good at tennis and basketball. I also love to travel, 
                    Japan is my favourite destinaton. 
                </p>
            </div>
            <div className="Picture">
                <img src={StevenPic} alt="A picture of the awesome programmer Steven" />
            </div>
            <div className="Skills">
                <h1>Skills</h1>
            </div>
            <div className="skill1">
                <ul>
                    <li>Java</li>
                    <li>Python</li>
                    <li>HTML, CSS</li>
                    <li>JavaScript</li>
                    <li>C/C++</li>
                </ul>
            </div>
            <div className="skill2">
            <ul>
                    <li>ReactJs</li>
                    <li>MERN</li>
                    <li>Data Structures + Algorithms</li>
            </ul>
            </div>
        </div>
    )
}

export default About