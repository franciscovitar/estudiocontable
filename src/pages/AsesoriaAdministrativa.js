import React from "react";

import AsesoriaAdministrativaInfo from "../components/Servicios/AsesoríaAdministrativa/AsesoriaAdministrativaInfo";
import AsesoriaAdministrativaWelcome from "../components/Servicios/AsesoríaAdministrativa/AsesoriaAdministrativaWelcome";
import Contacto from "../components/Landing/Contacto";
import NavBar from "../components/Landing/Navbar";
import Footer from "../components/Landing/Footer";

function AsesoriaAdministrativa() {
  return (
    <div>
      <NavBar></NavBar>
      <AsesoriaAdministrativaWelcome></AsesoriaAdministrativaWelcome>
      <AsesoriaAdministrativaInfo></AsesoriaAdministrativaInfo>
      <Contacto></Contacto>
      <Footer></Footer>
    </div>
  );
}

export default AsesoriaAdministrativa;
