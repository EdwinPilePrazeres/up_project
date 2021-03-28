import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarRoute,
  SideBtnWrap,
  SidebarLink,
  SidebarMenu,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            Integrantes
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            Objectivos
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            Lineas de Investigacion
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            Territorios Forestales
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            Proyecto Bicentenario
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Proyecto Explora
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
            Abióticos de la región
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Contactanos</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
