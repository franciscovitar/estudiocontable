import React from "react";

import AsesoriaAdministrativaInfo from "../components/Servicios/Asesor√≠aAdministrativa/AsesoriaAdministrativaInfo";
import AsesoriaAdministrativaWelcome from "../components/Servicios/Asesor√≠aAdministrativa/AsesoriaAdministrativaWelcome";
import Contactanos from "../components/Landing/Contactanos";

function AsesoriaAdministrativa() {
  return (
    <div>
      <AsesoriaAdministrativaWelcome></AsesoriaAdministrativaWelcome>
      <AsesoriaAdministrativaInfo></AsesoriaAdministrativaInfo>
      <Contactanos></Contactanos>
    </div>
  );
}

export default AsesoriaAdministrativa;
