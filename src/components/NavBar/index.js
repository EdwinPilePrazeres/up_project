import React from "react";
// import React, {useEffect, useState} from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  // const [scrollNav, setScrollNav] = useState(false);

  // const changeNav = () => {
  //   if(window.scrollY >= 80) {
  //     setScrollNav(true);
  //   } else {
  //     setScrollNav(false);
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', changeNav)
  // }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        {/* <Nav scrollNav={scrollNav}> */}
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              Logo
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="nucleo"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Nucleo
                  {/* <Dropbtn >
                    Nucleo
                  </Dropbtn>
                  <DropDownContent>
                    {" "}
                    <SubA>
                      Integrantes
                    </SubA>
                    <SubA >
                      Objectivos
                    </SubA>
                    <SubA >
                      Lineas de Investigación
                    </SubA>
                  </DropDownContent> */}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to=""
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Territorios Forestales
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to=""
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Proyecto Bicentenario
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to=""
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Proyecto Explora
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="abiotics"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Abióticos de la región
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/abiotics">Contactanos</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
