import React, { useEffect, useState } from "react"

import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu"

import Container from "./Container"
import Icon from "./Icon"
import IconContainer from "./IconContainer"
import Links from "./Links"
import MobileMenu from "./MobileMenu"
import NavLink from "./NavLink"

import Logo from "../../assets/images/logos/mchacks-martlet.svg"
import SocialMediaBar from "../SocialMedia/SocialMediaBar"

import MLHBanner from "../../assets/images/mlh-trust-badge-2025-white.svg"

const Nav = ({
  scrollToAbout,
  scrollToSponsor,
  scrollToFaq,
  darkBackground = false,
}) => {
  const [hasBorder, setHasBorder] = useState(false)
  const handleScroll = () => {
    setHasBorder(window.pageYOffset > 15)
  }

  useEffect(() => {
    handleScroll()
    document.addEventListener("scroll", handleScroll)
    return () => document.removeEventListener("scroll", handleScroll)
  }, [])

  const NavItems = mobile => (
    <>
      {scrollToAbout ? (
        <NavLink onClick={scrollToAbout} $mobile={mobile}>
          About
        </NavLink>
      ) : null}

      {scrollToSponsor ? (
        <NavLink onClick={scrollToSponsor} $mobile={mobile}>
          Sponsor
        </NavLink>
      ) : null}

      {scrollToFaq ? (
        <NavLink onClick={scrollToFaq} $mobile={mobile}>
          FAQ
        </NavLink>
      ) : null}

      {/* <NavLink href="https://app.mchacks.ca" $mobile={mobile}>
        Apply
      </NavLink>

      <NavLink href="https://forms.gle/2CHq5PZZLxuirVCT6" $mobile={mobile}>
        Volunteer
      </NavLink> */}
    </>
  )
  return (
    <Container
      className={
        (hasBorder ? "has-border " : "") +
        (darkBackground ? "dark-background" : "")
      }
    >
      <div>
        <IconContainer>
          <Link to="/">
            <Icon src={Logo} />
          </Link>
        </IconContainer>
        <Links $hasBorder={hasBorder}>
          {NavItems(false)}
          <div className="Nav__socials">
            <SocialMediaBar />
          </div>
          <div className="Nav__mlh-banner">
            <a href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white">
              <img
                src={MLHBanner}
                alt="Major League Hacking 2024 Hackathon Season"
              />
            </a>
          </div>
        </Links>
      </div>
      <Menu isOpen={true} styles={MobileMenu}>
        {NavItems(true)}
      </Menu>
    </Container>
  )
}

export default Nav
