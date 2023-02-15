import React from "react";

import AsesoriaServicios from "../components/Servicios/AsesoríaTributaría/AsesoriaServicios";
import AsesoriaWelcome from "../components/Servicios/AsesoríaTributaría/AsesoriaWelcome";
import Contactanos from "../components/Landing/Contactanos";

function AsesoriaTributaria() {
  return (
    <div>
      <AsesoriaWelcome />
      <AsesoriaServicios />
      <Contactanos />
    </div>
  );
}

export default AsesoriaTributaria;
