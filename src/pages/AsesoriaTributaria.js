import React from "react";

import AsesoriaServicios from "../components/Servicios/AsesoríaTributaría/AsesoriaServicios";
import AsesoriaWelcome from "../components/Servicios/AsesoríaTributaría/AsesoriaWelcome";
import Contactanos from "../components/Landing/Contactanos";
import NavBar from "../components/Landing/Navbar";

function AsesoriaTributaria() {
  return (
    <div>
      <NavBar></NavBar>
      <AsesoriaWelcome />
      <AsesoriaServicios />
      <Contactanos />
    </div>
  );
}

export default AsesoriaTributaria;
