import React from "react";

import AsesoriaAdministrativaInfo from "../components/Servicios/AsesoríaAdministrativa/AsesoriaAdministrativaInfo";
import AsesoriaAdministrativaWelcome from "../components/Servicios/AsesoríaAdministrativa/AsesoriaAdministrativaWelcome";
import Contactanos from "../components/Landing/Contactanos";
import NavBar from "../components/Landing/Navbar";

function AsesoriaAdministrativa() {
  return (
    <div>
      <NavBar></NavBar>
      <AsesoriaAdministrativaWelcome></AsesoriaAdministrativaWelcome>
      <AsesoriaAdministrativaInfo></AsesoriaAdministrativaInfo>
      <Contactanos></Contactanos>
    </div>
  );
}

export default AsesoriaAdministrativa;
