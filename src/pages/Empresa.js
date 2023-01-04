import React from "react";

import EmpresaWelcome from "../components/Empresa/EmpresaWelcome";
import EmpresaInfo from "../components/Empresa/EmpresaInfo";
import EmpresaInfo2 from "../components/Empresa/EmpresaInfo2";
import Contacto from "../components/Landing/Contacto";
import NavBar from "../components/Landing/Navbar";
import Footer from "../components/Landing/Footer";

function Empresa() {
  return (
    <div>
      <NavBar></NavBar>
      <EmpresaWelcome></EmpresaWelcome>
      <EmpresaInfo></EmpresaInfo>
      <EmpresaInfo2></EmpresaInfo2>
      <Contacto></Contacto>
      <Footer></Footer>
    </div>
  );
}

export default Empresa;
