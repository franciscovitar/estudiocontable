import React from "react";

import AsesoriaContableInfo from "../components/Servicios/AsesoríaContable/AsesoriaContableInfo";
import AsesoriaContableOptions from "../components/Servicios/AsesoríaContable/AsesoriaContableOptions";
import AsesoriaContableWelcome from "../components/Servicios/AsesoríaContable/AsesoriaContableWelcome";
import Contacto from "../components/Landing/Contacto";
import NavBar from "../components/Landing/Navbar";
import Footer from "../components/Landing/Footer";

function AsesoriaContable() {
  return (
    <div>
      <NavBar></NavBar>
      <AsesoriaContableWelcome />
      <AsesoriaContableInfo />
      <AsesoriaContableOptions />
      <Contacto />
      <Footer></Footer>
    </div>
  );
}

export default AsesoriaContable;
