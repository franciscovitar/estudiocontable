import React from "react";
import AsesoriaLaboralInfo from "../components/Servicios/AsesorĂ­aLaboral/AsesoriaLaboralInfo";
import AsesoriaLaboralWelcome from "../components/Servicios/AsesorĂ­aLaboral/AsesoriaLaboralWelcome";
import Contactanos from "../components/Landing/Contactanos";

function AsesoriaLaboral() {
  return (
    <div>
      <AsesoriaLaboralWelcome></AsesoriaLaboralWelcome>
      <AsesoriaLaboralInfo></AsesoriaLaboralInfo>
      <Contactanos></Contactanos>
    </div>
  );
}

export default AsesoriaLaboral;
