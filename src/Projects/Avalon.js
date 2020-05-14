import React from 'react'
import AvalonPic from '../Img/Avalon.png'

function Avalon(){

    return(
        <div className="individual-projects">
            <div>Avalon</div>
            <br />
            <img src={AvalonPic} alt="A picture of Avalon" />
            <p>This is a deductive-reasoning based social role-playing party game. This app can be downloaded on an android device from Google Play. This game replies on certain players attemting to disrupt the larger group working together, while the rest of the players work to reveal the spy working against them.</p>
            <a href="https://github.com/StevenXu96/Avalon" target="_blank" rel="noopener noreferrer">View GitHub</a>
        </div>
    )
}

export default Avalon