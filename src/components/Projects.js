import React from 'react'
import Avalon from '../Projects/Avalon'
import Calendar from '../Projects/Calendar'
import NBA from '../Projects/NBA'
import SortingVisualizer from '../Projects/SortingVisualizer'

function Projects(){
    return(
        //<h1 style={{padding:"20px"}}>
            <div className="Projects">
                <SortingVisualizer />
                <NBA />
                <Avalon />
                <Calendar />
            </div>
        //</h1>
    )
}

export default Projects