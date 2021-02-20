import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  AddSeminar,
  DoneSeminar,
  Home,
  ListParticipants,
  Login,
  MassMailer,
  MonthSeminar,
  NotFound,
  Registration,
  RegistrationSuccess,
  TodaySeminar,
  UpcomingSeminar,
  UpdateSeminar,
} from "./Page";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" exact component={Home} />
        <Route path="/seminar/done" exact component={DoneSeminar} />
        <Route path="/seminar/today" exact component={TodaySeminar} />
        <Route path="/seminar/upcoming" exact component={UpcomingSeminar} />
        <Route path="/seminar/month" exact component={MonthSeminar} />
        <Route path="/mass-mailer" exact component={MassMailer} />
        <Route path="/seminar/add" component={AddSeminar} />
        <Route path="/seminar/update/:id" component={UpdateSeminar} />
        <Route path="/registration/:id" component={Registration} />
        <Route
          path="/successful-registration/:idseminar/:id"
          component={RegistrationSuccess}
        />
        <Route path="/seminar/detail/:id" component={ListParticipants} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
