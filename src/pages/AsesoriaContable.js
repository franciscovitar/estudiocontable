import React from "react";

import AsesoriaContableInfo from "../components/Servicios/AsesorĂ­aContable/AsesoriaContableInfo";
import AsesoriaContableOptions from "../components/Servicios/AsesorĂ­aContable/AsesoriaContableOptions";
import AsesoriaContableWelcome from "../components/Servicios/AsesorĂ­aContable/AsesoriaContableWelcome";
import Contactanos from "../components/Landing/Contactanos";

function AsesoriaContable() {
  return (
    <div>
      <AsesoriaContableWelcome />
      <AsesoriaContableInfo />
      <AsesoriaContableOptions />
      <Contactanos />
    </div>
  );
}

export default AsesoriaContable;
