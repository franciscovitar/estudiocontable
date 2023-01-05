import React from "react";

import AsesoriaContableInfo from "../components/Servicios/AsesoríaContable/AsesoriaContableInfo";
import AsesoriaContableOptions from "../components/Servicios/AsesoríaContable/AsesoriaContableOptions";
import AsesoriaContableWelcome from "../components/Servicios/AsesoríaContable/AsesoriaContableWelcome";
import Contactanos from "../components/Landing/Contactanos";
import NavBar from "../components/Landing/Navbar";

function AsesoriaContable() {
  return (
    <div>
      <NavBar></NavBar>
      <AsesoriaContableWelcome />
      <AsesoriaContableInfo />
      <AsesoriaContableOptions />
      <Contactanos />
    </div>
  );
}

export default AsesoriaContable;
