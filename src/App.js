import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./view/Dashboard"
import Settings from "./view/dashboard/Settings"
import Login from "./view/dashboard/Login"
import TotalManagement from "./view/dashboard/TotalManagement"

function App() {
    return (
        <Router>
            <Switch>
                <Route path="./dashboard/Login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/dashboard/TotalManagement" component={TotalManagement} />
                <Route path="/dashboard/:page" component={Dashboard} />
                <Route path="/dashboard/Settings" component={Settings} />
            </Switch>
        </Router>
    )
}

export default App
