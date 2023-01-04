import React from "react";
import OutsourcingText from "../components/Servicios/OutsourcingContable/OutsourcingText";
import OutsourcingText2 from "../components/Servicios/OutsourcingContable/OutsourcingText2";
import OutsourcingVariedad from "../components/Servicios/OutsourcingContable/OutsourcingVariedad";
import OutsourcingWelcome from "../components/Servicios/OutsourcingContable/OutsourcingWelcome";
import Contacto from "../components/Landing/Contacto";
import NavBar from "../components/Landing/Navbar";
import Footer from "../components/Landing/Footer";

function OutSourcing() {
  return (
    <div>
      <NavBar></NavBar>
      <OutsourcingWelcome></OutsourcingWelcome>
      <OutsourcingText></OutsourcingText>
      <OutsourcingText2></OutsourcingText2>
      <OutsourcingVariedad></OutsourcingVariedad>
      <Contacto></Contacto>
      <Footer></Footer>
    </div>
  );
}

export default OutSourcing;
