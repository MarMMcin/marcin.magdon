import React from "react";
import { Route, Switch } from "react-router-dom";

import AboutMe from "../pages/AboutMe";
import { withRouter } from "react-router-dom";
import MyProjects from "../pages/MyProjectPage/MyProjects";
import ContactPage from "../pages/ContactPage";
import MySkills from "../pages/SkillsPage/MySkills";
import ErrorPage from "../pages/ErrorPage";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={AboutMe} />
        <Route path="/projects" component={MyProjects} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/skils" component={MySkills} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default withRouter(Page);
