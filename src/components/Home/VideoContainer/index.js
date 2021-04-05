import React, { useState } from "react";
import Video from "../../../videos/video.mp4";
import { ButtonS } from "../../ButtonScrollElements";
import BG from '../../../images/background-min.png';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroBtnWrapper,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
} from "./VideoElements";

const VideoContainer = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        {/* <VideoBg autoPlay loop muted src={Video} type="video/mp4" /> */}
        <VideoBg className='VV' autoPlay preload='true' loop muted type="video/mp4">
          <source src={Video} poster={BG}></source>
        </VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Centro De Investigacion</HeroH1>
        <HeroP>
        Contribuir desde las ciencias sociales y humanas, con un enfoque teórico y empirico, al conocimiento sobre los conflictos y politicas ambientales de nuetro pais, conformando una red
        </HeroP>
        <HeroBtnWrapper>
          <ButtonS
            to="last_pub"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Últimas Publicaciones {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonS>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default VideoContainer;
