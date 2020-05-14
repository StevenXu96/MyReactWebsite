import React from 'react'
import {Link} from "react-router-dom";

class NavBar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            active: "about"
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const value = event.target.id
        this.setState({active: value})
    }

    render() {
        return (
            <nav className="NavBar">
                <ul className="Nav">
                    <li><Link to={'/about'} className={this.state.active === "about"? "active":null} onClick={this.handleChange} id="about"> About Me </Link></li>
                    <li><Link to={'/projects'} className={this.state.active === "projects"? "active":null} onClick={this.handleChange} id="projects">Projects</Link></li>
                    <li><Link to={'/contact'} className={this.state.active === "contact"? "active":null} onClick={this.handleChange} id="contact">Contact Me</Link></li>
                </ul>
            </nav>
        )
    }
}

export default NavBar