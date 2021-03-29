import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialIconWrap,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Centro de Investigacion</FooterLinkTitle>
              <FooterLink to="/signin">Territorios Forestales</FooterLink>
              <FooterLink to="/signin">Proyecto Bicentenario</FooterLink>
              <FooterLink to="/signin">Proyecto Explora</FooterLink>
              <FooterLink to="/signin">Abioticos de la region</FooterLink>
            </FooterLinkItems>
            {/* <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/signin">Instagram</FooterLink>
              <FooterLink to="/signin">Facebook</FooterLink>
              <FooterLink to="/signin">Youtube</FooterLink>
              <FooterLink to="/signin">Twitter</FooterLink>
            </FooterLinkItems>*/}
          </FooterLinksWrapper> 
         
          <FooterLinksWrapper>
          <FooterLinkItems>
              <FooterLinkTitle>Contactanos</FooterLinkTitle>
              <FooterLink to="/signin">Contacto</FooterLink>
              <FooterLink to="/signin">Integrantes</FooterLink>
              <FooterLink to="/signin">Linea de Investigacion</FooterLink>
            </FooterLinkItems>
           
            {/* <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/signin">Contact</FooterLink>
              <FooterLink to="/signin">Support</FooterLink>
              <FooterLink to="/signin">Destinations</FooterLink>
            </FooterLinkItems> */}
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Logo
            </SocialLogo>
            <WebsiteRights>
            Logo © {new Date().getFullYear()} All Rights reserved.
            </WebsiteRights>
            <SocialIconWrap>
              <SocialIcons>
                <SocialIconLink
                  href="//www.facebook.com/"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>
              </SocialIcons>
              <SocialIcons>
                <SocialIconLink
                  href="//www.instagram.com/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
              </SocialIcons>
              <SocialIcons>
                <SocialIconLink
                  href="//www.youtube.com/"
                  target="_blank"
                  aria-label="Youtube"
                >
                  <FaYoutube />
                </SocialIconLink>
              </SocialIcons>
              <SocialIcons>
                <SocialIconLink
                  href="//www.Linkedin.com/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialIconWrap>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
