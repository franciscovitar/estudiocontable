import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

function AsesoriaAdministrativaWelcome() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="AsesoriaAdministrativaWelcome-container "
    >
      <div className="container">
        <h3>Asesoría Administrativa para empresas</h3>
        <p>
          ¡Es momento de que vea crecer su negocio! Concéntrese en su core
          business principal y contrate nuestros
          <span> servicios de asesoría administrativa.</span>
        </p>
        <p>
          Gracias a nuestra <span>asesoría administrativa </span>
          usted tendrá un mejor manejo de su empresa. ¡Tener en orden su negocio
          hará que la toma de decisiones sea más rápida y acertada!
        </p>
        <p>
          Con <span> asesoría administrativas</span> no tendrá que preocuparse
          más por la gestión de recursos internos y externos de su
          emprendimiento, ni en trámites, licencias, manejo de personal, etc.
        </p>
        <Link to="/contacto">
          <motion.button whileHover={{ scale: 1.2 }}>Contáctanos</motion.button>
        </Link>
      </div>
    </motion.div>
  );
}

export default AsesoriaAdministrativaWelcome;
