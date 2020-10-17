import React from 'react'
import Avalon from '../Projects/Avalon'
import Calendar from '../Projects/Calendar'
import NBA from '../Projects/NBA'
import SortingVisualizer from '../Projects/SortingVisualizer'
import Science from '../Projects/Science'

function Projects(){
    return(
        <h1>
            <div className="Projects">
                <Science />
                <SortingVisualizer />
                <NBA />
                <Avalon />
                <Calendar />
            </div>
        </h1>
    )
}

export default Projects