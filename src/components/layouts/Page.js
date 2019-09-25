import React from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/Page.css";

import AboutMe from "../pages/AboutMe";
import { withRouter } from "react-router-dom";
import MyProjects from "../pages/MyProjects";
import ContactPage from "../pages/ContactPage";
import MySkills from "../pages/MySkills";
import ErrorPage from "../pages/ErrorPage";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={AboutMe} />
        <Route path="/products" component={MyProjects} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/skils" component={MySkills} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default withRouter(Page);
