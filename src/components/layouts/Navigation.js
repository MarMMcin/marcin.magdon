import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const list = [
  { name: "About me", path: "/", exact: true },
  { name: "My projects", path: "/projects" },
  { name: "My skills", path: "/skils" },
  { name: "Contact", path: "/contact" }
];

const StyledLi = styled.li`
  font-weight: 500;
  font-size: 2vh;
  text-decoration: none;
  padding: 10px;
  height: 20%;
  z-index: 300;

  a {
    text-decoration: none;
    color: #edf0f1;
  }

  a:hover {
    color: rgba(249, 212, 125, 1);
  }
`;

const StyledNavi = styled.div`
  height: 8vh;
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  padding: 1vw 1%;
  background-color: rgba(44, 44, 44);

  list-style: none;
`;
const Navigation = () => {
  const menu = list.map(item => (
    <StyledLi className="li" key={item.name}>
      <NavLink
        to={item.path}
        exact={item.exact ? item.exact : false}
        activeClassName="active"
        activeStyle={{
          color: "#F9D47D"
        }}
      >
        {item.name}
      </NavLink>
    </StyledLi>
  ));
  return (
    <nav className="active">
      <StyledNavi>{menu}</StyledNavi>
    </nav>
  );
};

export default withRouter(Navigation);
