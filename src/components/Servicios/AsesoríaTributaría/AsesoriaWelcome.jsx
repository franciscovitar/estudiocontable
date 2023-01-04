import React from "react";
import { motion } from "framer-motion";

function AsesoriaWelcome() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="asesoria-welcome-container"
    >
      <div>
        <h2>Servicio de asesoría Tributaria y contable</h2>
        <p>
          Si su empresa necesita asesoría para la gestión de asuntos tributarios
          (ante SUNAT o el Tribunal Fiscal){" "}
          <span>nuestro estudio contable</span> puede ayudarle. Podemos
          proporcionarle las herramientas legales que necesite para que su
          negocio cumpla con las normas tributarias vigentes, como{" "}
          <span>
            código tributario, ley de impuesto a la renta, ley de comprobantes
            de pago, ley de impuesto general a las ventas.
          </span>
        </p>
      </div>
    </motion.div>
  );
}

export default AsesoriaWelcome;
