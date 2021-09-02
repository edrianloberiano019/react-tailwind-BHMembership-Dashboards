import React from "react"
import { Route, Switch } from "react-router-dom"
import Voters from "../components/Sidebar"
import HomeDashboard from "./dashboard/HomeDashboard"
import Login from "./dashboard/Login"
import Page1 from "./dashboard/TotalManagement"
import Page2 from "./dashboard/Page2"
import Settings from "./dashboard/Settings"

const Dashboard = () => {
    return (
        <div>
            <Voters>
                <Switch>
                    <Route path="/dashboard" exact component={HomeDashboard} />
                    <Route path="/dashboard/TotalManagement" exact component={Page1} />
                    <Route path="/dashboard/page2" exact component={Page2} />
                    <Route path="/dashboard/Settings" exact component={Settings} />
                    <Route path="/dashboard/Login" exact component={Login} />
                </Switch>
            </Voters>
        </div>
    )
}

export default Dashboard
