import React from 'react'
import NBAPic from '../Img/NBA.png'

function NBA(){

    return(
        <div className="individual-projects">
            <div>NBA Analytic Tool</div>
            <br />
            <img src={NBAPic} alt="A picture of the NBA tool" />
            <p>A full-stack statictical analytic tool on NBA players, analyzing their strengths and weakness, updating in real-time. All you need to do is enter the players name in the search bar, then all results will be presented in tables and graphs, easy to understand.</p>
            <a href="http://nbaplayerdash.herokuapp.com/" target="_blank" rel="noopener noreferrer">View Website</a>
        </div>
    )
}

export default NBA