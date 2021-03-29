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
          <SidebarLink to="" onClick={toggle}>
            Integrantes
          </SidebarLink>
          <SidebarLink to="" onClick={toggle}>
            Objectivos
          </SidebarLink>
          <SidebarLink to="" onClick={toggle}>
            Lineas de Investigacion
          </SidebarLink>
          <SidebarLink to="" onClick={toggle} className='disable'>
            Territorios Forestales
          </SidebarLink>
          <SidebarLink to="" onClick={toggle} className='disable'>
            Proyecto Bicentenario
          </SidebarLink>
          <SidebarLink to="" onClick={toggle} className='disable'>
            Proyecto Explora
          </SidebarLink>
          <SidebarLink to="" onClick={toggle}>
            Abióticos de la región
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/up_project/contact">Contactanos</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
