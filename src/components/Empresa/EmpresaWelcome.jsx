import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function EmpresaWelcome() {
  return (
    <div className="EmpresaWelcome-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container"
      >
        <h3>Constituye tu empresa con nosotros</h3>
        <p>
          ¿Tiene un negocio y aún no lo ha registrado? Muchos no formalizan sus
          emprendimientos por desconocer todo el proceso que implica la
          <span>constitución de empresas</span>, ¡pero esto debe cambiar! Si tu
          <span>empresa produce</span> o quiere iniciar un negocio desde cero,
          le brindamos la <span>asesoría en constitución de empresas</span> que
          necesita para que trabaje conforme a la ley y disfrute de los
          beneficios de la formalización.{" "}
        </p>
        <Link to="/Contacto">
          <motion.button whileHover={{ scale: 1.2 }}>Contáctanos</motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

export default EmpresaWelcome;
