import React from 'react'
import SortingVisualizerPic from '../Img/SortingVisualizer.png'

function SortingVisualizer(){

    return(
        <div className="individual-projects">
            <div>Algorithm Visualization</div>
            <br />
            <img src={SortingVisualizerPic} alt="A picture of the Visualizer" />
            <p>An educational web application, aimed to present different types of sorting algorithms in animations. This web app features customizable array size and height, and animation speed, allowing a more interactive and exploratory learning experience.</p>
            <a href="https://stevenxu96.github.io/SortingAlgorithms/" target="_blank" rel="noopener noreferrer">View Website</a>
        </div>
    )
}

export default SortingVisualizer