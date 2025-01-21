import React from "react"

import { slide as Menu } from "react-burger-menu"
import { Link } from "gatsby"

import Container from "../Nav/Container"
import IconContainer from "../Nav/IconContainer"
import Icon from "../Nav/Icon"
import Links from "../Nav/Links"
import NavLink from "../Nav/NavLink"
import MobileMenu from "../Nav/MobileMenu"

import Logo from "../../assets/images/logos/mchacks-martlet.svg"

const LiveNav = ({ switchPage = () => {}, activePage }) => {
  const NavItems = (
    <>
      <Link to={"/"} className="home-link">
        Home
      </Link>
      <NavLink
        onClick={() => switchPage("info")}
        className={activePage === "info" ? "active" : ""}
      >
        Info
      </NavLink>
      <NavLink
        onClick={() => switchPage("schedule")}
        className={activePage === "schedule" ? "active" : ""}
      >
        Schedule
      </NavLink>
      <NavLink
        onClick={() => switchPage("judging")}
        className={activePage === "judging" ? "active" : ""}
      >
        Judging
      </NavLink>
    </>
  )
  return (
    <Container className="dark-background">
      <Links>{NavItems}</Links>
      <Menu isOpen={false} styles={MobileMenu}>
        {NavItems}
      </Menu>
    </Container>
  )
}

export default LiveNav
