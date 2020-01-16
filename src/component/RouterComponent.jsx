import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListCustomerComponent from "./user/ListCustomerComponent";
import AddCustomerComponent from "./user/AddCustomerComponent";
// import EditUserComponent from "./user/EditUserComponent";
import React from "react";
import LoginComponent from "./user/LoginComponent";

const AppRouter = () => {
    return(
            <Router>
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/list-customer" component={ListCustomerComponent} />
                        <Route path="/add-customer" component={AddCustomerComponent} />
                    </Switch>
            </Router>
    )
}

export default AppRouter;