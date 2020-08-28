import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import {Route, BrowserRouter, Switch} from "react-router-dom"
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App(){
    return(
        <BrowserRouter className="main_grid">
            <Header className="item1"/>
            <NavBar className="item2"/>
            <Switch className="item3">
                <Route path={"/MyReactWebsite/"} exact component={About} />
                <Route path={"/about"} exact component={About} />
                <Route path={"/projects"} exact component={Projects} />
                <Route path={"/contact"} exact component={Contact} />
            </Switch>
        </BrowserRouter>
    )
}

export default App