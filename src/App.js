import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import {Route, BrowserRouter, Switch} from "react-router-dom"
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App(){
    return(
        <BrowserRouter>
            <Header />
            <div className="main_grid">
                <div className="item1">
                    <NavBar />
                </div>
                <div className="item2">
                    <Switch>
                        <Route path={"/MyReactWebsite/"} exact component={About} />
                        <Route path={"/about"} exact component={About} />
                        <Route path={"/projects"} exact component={Projects} />
                        <Route path={"/contact"} exact component={Contact} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App