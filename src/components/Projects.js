import React from 'react'
import Avalon from '../Projects/Avalon'
import Calendar from '../Projects/Calendar'

function Projects(){
    return(
        <h1 style={{marginLeft:"25%", padding:"1px 20px"}}>
            <div className="Projects">
                <Avalon />
                <Calendar />
            </div>
        </h1>
    )
}

export default Projects