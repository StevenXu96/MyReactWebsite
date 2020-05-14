import React from 'react'
import calendar from '../Img/calendar.png'

function Calendar(){

    return(
        <div className="individual-projects">
            <div>Calendar</div>
            <br />
            <img src={calendar} alt="A picture of a calendar" />
            <p>A Java project intended to implement a calendar, with a variety of functions. This program allows users to keep track of any event in a more organized fashion, with a built in alert system to remind users of upcoming events. One cool feature is that this program also allows event sharing with other users.</p>
            <a href="https://github.com/StevenXu96/Calendar" target="_blank" rel="noopener noreferrer">View GitHub</a>
        </div>
    )
}

export default Calendar