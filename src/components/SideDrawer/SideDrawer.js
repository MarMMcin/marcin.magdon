import React from "react";
import Nav2 from "../layouts/NavigationBurger";

import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = ["side-drawer"];
  if (props.show) {
    drawerClasses = ["side-drawer open"];
  }
  return (
    <nav className={drawerClasses.join("")}>
      <ul>
        <Nav2 />
      </ul>
    </nav>
  );
};
export default sideDrawer;
