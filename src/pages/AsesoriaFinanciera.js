import React from "react";

import AsesoriaFinancieraWelcome from "../components/Servicios/AsesoríaFinanciera/AsesoriaFinancieraWelcome";
import AsesoriaFinancieraInfo from "../components/Servicios/AsesoríaFinanciera/AsesoriaFinancieraInfo";
import Contactanos from "../components/Landing/Contactanos";
import NavBar from "../components/Landing/Navbar";

function AsesoriaFinanciera() {
  return (
    <div>
      <NavBar></NavBar>
      <AsesoriaFinancieraWelcome></AsesoriaFinancieraWelcome>
      <AsesoriaFinancieraInfo></AsesoriaFinancieraInfo>
      <Contactanos></Contactanos>
    </div>
  );
}

export default AsesoriaFinanciera;
