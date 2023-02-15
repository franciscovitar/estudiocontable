import React from "react";

import EmpresaWelcome from "../components/Empresa/EmpresaWelcome";
import EmpresaInfo from "../components/Empresa/EmpresaInfo";
import EmpresaInfo2 from "../components/Empresa/EmpresaInfo2";
import Contactanos from "../components/Landing/Contactanos";

function Empresa() {
  return (
    <div>
      <EmpresaWelcome></EmpresaWelcome>
      <EmpresaInfo></EmpresaInfo>
      <EmpresaInfo2></EmpresaInfo2>
      <Contactanos></Contactanos>
    </div>
  );
}

export default Empresa;
