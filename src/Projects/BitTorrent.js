import React from 'react'
import bittorrent from '../Img/bittorrent.png'

function BitTorrent(){

    return(
        <div className="individual-projects">
            <div>BitTorrent Client</div>
            <br />
            <img src={bittorrent} alt="An illustration of BitTorrent" />
            <p>A BitTorrent Client CLI tool.</p>
            <a href="https://github.com/StevenXu96/Calendar" target="_blank" rel="noopener noreferrer">View GitHub</a>
        </div>
    )
}

export default BitTorrent