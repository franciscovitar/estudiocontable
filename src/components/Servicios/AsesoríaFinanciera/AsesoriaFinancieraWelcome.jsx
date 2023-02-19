import React from "react";
import { motion } from "framer-motion";

function AsesoriaFinanciera() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="asesoria-financiera-welcome-container"
    >
      <div className=" container">
        <h2>Asesoría financiera empresarial</h2>
        <p>
          Somos un <span>estudio contable</span> que ofrece el servicio de{" "}
          <span>asesoría financiera</span>, el cual consiste en realizar un
          diagnóstico sobre la capacidad que tiene su empresa para generar
          efectivo en el corto, mediano y largo plazo.
        </p>
      </div>
    </motion.div>
  );
}

export default AsesoriaFinanciera;
