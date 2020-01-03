import React, { Component } from "react";
import Toolbar from "./components/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer.js";
import Backdrop from "./components/Backdrop/Backdrop";
import Page from "./components/layouts/Page";
import Footer from "./components/layouts/Footer";

import { HashRouter } from "react-router-dom";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <HashRouter>
        <div style={{ height: "100%" }}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} /> {backdrop}
        </div>
        {<Page />}
        {<Footer></Footer>}
      </HashRouter>
    );
  }
}
export default App;
