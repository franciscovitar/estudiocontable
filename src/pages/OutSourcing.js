import React from "react";
import OutsourcingText from "../components/Servicios/OutsourcingContable/OutsourcingText";
import OutsourcingText2 from "../components/Servicios/OutsourcingContable/OutsourcingText2";
import OutsourcingVariedad from "../components/Servicios/OutsourcingContable/OutsourcingVariedad";
import OutsourcingWelcome from "../components/Servicios/OutsourcingContable/OutsourcingWelcome";
import Contactanos from "../components/Landing/Contactanos";
import NavBar from "../components/Landing/Navbar";

function OutSourcing() {
  return (
    <div>
      <NavBar></NavBar>
      <OutsourcingWelcome></OutsourcingWelcome>
      <OutsourcingText></OutsourcingText>
      <OutsourcingText2></OutsourcingText2>
      <OutsourcingVariedad></OutsourcingVariedad>
      <Contactanos></Contactanos>
    </div>
  );
}

export default OutSourcing;
