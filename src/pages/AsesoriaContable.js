import React from "react";

import AsesoriaContableInfo from "../components/Servicios/AsesoríaContable/AsesoriaContableInfo";
import AsesoriaContableOptions from "../components/Servicios/AsesoríaContable/AsesoriaContableOptions";
import AsesoriaContableWelcome from "../components/Servicios/AsesoríaContable/AsesoriaContableWelcome";
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
