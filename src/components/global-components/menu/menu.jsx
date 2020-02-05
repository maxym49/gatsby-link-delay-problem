import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import menuData from "../../../static/variables/menu-data"
import TransitionRedirect from "../../interactive-components/redirect/transitionRedirect"
import { Link } from "gatsby"

const MenuWrapper = styled.div`
  display: flex;
  background: #fefefe;
  z-index: 10;
  min-height: 100px;
  padding: 10px 100px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  transition: 0.3s ease-in-out all;
  transform: ${props =>
    props.visible ? "translateY(0)" : "translateY(-200px)"};
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.02);
  @media screen and (max-width: 1200px) {
    padding: 10px 40px;
  }
`

const LogoPlace = styled.div`
  display: flex;
  cursor: pointer;
  margin: 0;
`

const MenuItems = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`

const HamburgerWrapper = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: -8px;
`

const Hamburger = styled.div`
  display: none;
  @media screen and (max-width: 1000px) {
    display: flex;
  }
  margin-bottom: -17px;
  cursor: pointer;
  width: 24px;
  height: 4px;
  position: relative;
  background: #1c3144;
  border-radius: 3px;
  transition: 0.15s ease-in-out opacity;
  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    background: #1c3144;
    border-radius: 3px;
    transition: 0.15s ease-in-out transform;
  }
  &:before {
    width: 18px;
    bottom: 8px;
  }
  &:after {
    bottom: 16px;
  }
`

const linkStyle = css`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  color: #222222;
  cursor: pointer;
  border-radius: 2px;
  padding: 5px 12px;
  border: ${props =>
    props.isitcontact ? "2px solid #FF5A67" : "2px solid transparent"};
  position: relative;
  overflow: hidden;
  transition: 0.15s ease-in-out all;
  &:after,
  &:before {
    opacity: 0;
    content: "";
    position: absolute;
    overflow: hidden;
    width: 100%;
    bottom: 0;
    height: 100%;
    z-index: -1;
    left: 0;
    transition: 0.15s ease-in-out all;
  }
  &:after {
    background: #ff5a67;
  }
  &:before {
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    bottom: -4px;
    border-radius: 2px;
    left: -4px;
    border: 2px solid #1c3144;
    z-index: 2;
  }
  &:hover {
    color: #fff;
    border-color: transparent;
  }
  &:hover:before,
  &:hover:after {
    opacity: 1;
  }
`

const MenuItem = styled.li`
  margin: 0 20px;
`

const StyledLink = styled.a`
  ${linkStyle};
  text-decoration: none;
`

const StyledGatsbyLink = styled(Link)`
  ${linkStyle};
  text-decoration: none;
`

const MobileMenu = styled.div`
   transform: ${props =>
     props.visible ? "translateX(0)" : "translate(100vw)"};
   transition: .25s ease-in-out all;
   display: flex;
   min-height: 100vh;
   min-width: 100vw;
   align-items: center;
   position: fixed;
   background: #fefefe;
   z-index: 20;
    @media screen and (min-width: 1000px) {
    display: none;
  }
  ul {
    width: 100%;
    list-style: none;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    li {
    margin: 10px 0;
    }
    a {
    font-size: 1.4em;
  }
`

const Cross = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 30px;
  right: 50px;
  cursor: pointer;
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    border-radius: 3px;
    top: 50%;
    background: #b0b0b0;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`

const Menu = ({ pathname }) => {
  const [pos, setPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const [link, setLink] = useState("")
  const [title, setTitle] = useState("")

  useEffect(() => {
    const handleScrollPosition = () => {
      let temp = window.pageYOffset
      setVisible(pos > temp)
      setPos(temp)
    }
    window.addEventListener("scroll", handleScrollPosition)
    return () => {
      window.removeEventListener("scroll", handleScrollPosition)
    }
  })

  const handleRedirect = (url, title) => {
    setRedirect(!redirect)
    setLink(url)
    setTitle(title)
  }

  return (
    <>
      <MobileMenu visible={mobileMenu}>
        <Cross onClick={() => setMobileMenu(!mobileMenu)} />
        <ul>
          {menuData
            .filter(({ link }) => link !== pathname)
            .map(({ link, title }) => (
              <MenuItem key={link}>
                <StyledGatsbyLink to={link}>{title}</StyledGatsbyLink>
              </MenuItem>
            ))}
        </ul>
      </MobileMenu>
      <MenuWrapper visible={visible}>
        <LogoPlace onClick={() => handleRedirect("/", "main")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            viewBox="0 0 500 500"
          >
            <image
              id="Projekt_bez_tytułu"
              data-name="Projekt bez tytułu"
              width="500"
              height="500"
              href="data:image/png;base64,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e22trccd8/u10eNR89iY3H6/sp1OlbhcWpiVxb4CSAgEHUDSGfD5VMDlf8AHMN0CkHSIOfBhBB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADEDQAQAwAEEHAMAABB0AAAMQdAAADPD/AYYv/6Mj4EedAAACEWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLycgeDp4bXB0az0nSW1hZ2U6OkV4aWZUb29sIDEwLjgwJz4KPHJkZjpSREYgeG1sbnM6cmRmPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjJz4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgPHBkZjpBdXRob3I+b2RvaG9kbyBNYWtzPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmE8L3htcDpDcmVhdG9yVG9vbD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSdyJz8+AwD/zAAAAABJRU5ErkJggg=="
            />
          </svg>
        </LogoPlace>
        <HamburgerWrapper onClick={() => setMobileMenu(!mobileMenu)}>
          <Hamburger />
        </HamburgerWrapper>
        <MenuItems>
          {menuData
            .filter(({ link }) => link !== pathname)
            .map(({ link, title }) => (
              <MenuItem key={link}>
                <StyledLink
                  onClick={() => handleRedirect(link, title)}
                  isitcontact={link.toString() === "/contact" ? "contact" : ""}
                  to={link}
                  // href={link}
                >
                  {title}
                </StyledLink>
              </MenuItem>
            ))}
        </MenuItems>
        {redirect ? <TransitionRedirect id={title} linkTo={link} /> : null}
      </MenuWrapper>
    </>
  )
}

Menu.propTypes = {
  pathname: PropTypes.string,
}

Menu.defaultProps = {
  pathname: "/home",
}

export default Menu
