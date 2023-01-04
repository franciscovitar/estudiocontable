import { motion } from "framer-motion";
import React from "react";

function AsesoriaLaboralWelcome() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="asesoria-laboral-welcome-container"
    >
      <div className="container">
        <h1>Asesoría Laboral para empresas</h1>
        <p>
          Nuestro estudio contable ofrece a su empresa el servicio de{" "}
          <span>asesoría laboral</span> según las regulaciones establecidas por
          el MTPE. Como compañía asesora, le proporcionamos a nuestros clientes,
          todo el soporte legal que necesitan en relación con asuntos como la
          <span> contratación, compensación y liquidación</span> de sus
          trabajadores, ya sean estos nacionales o extranjeros.
        </p>
      </div>
    </motion.div>
  );
}

export default AsesoriaLaboralWelcome;
