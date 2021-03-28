import React from "react";
import Icon1 from '../../../images/team.svg'
import Icon2 from '../../../images/goals.svg'
import Icon3 from '../../../images/lineaInvestigacion.svg'
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./NucleoElements";

const Nucleo = () => {
  return (
    <ServicesContainer id="nucleo">
      <ServicesH1>Nucleo</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Integrantes</ServicesH2>
          <ServicesP>
            {" "}
            lorem................
            {/* Conoce a los integrantes por los cuales nuestro equipo esta compuesto */}
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Objectivos</ServicesH2>
          <ServicesP>
            {" "}
            lorem................
            {/* Objectivos del equipo. Hacia donde apuntamos! */}
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Lineas de Investigacion</ServicesH2>
          <ServicesP>
            lorem................
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Nucleo;
