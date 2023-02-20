import React from "react";
import { motion } from "framer-motion";

function EmpresaWelcome() {
  return (
    <div className="EmpresaWelcome-container">
      <motion.div className="container">
        <motion.h3
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0 },
          }}
        >
          Constituye tu empresa con nosotros
        </motion.h3>
        <motion.p
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.2 },
          }}
        >
          ¿Tiene un negocio y aún no lo ha registrado? Muchos no formalizan sus
          emprendimientos por desconocer todo el proceso que implica la
          <span>constitución de empresas</span>, ¡pero esto debe cambiar! Si tu
          <span>empresa produce</span> o quiere iniciar un negocio desde cero,
          le brindamos la <span>asesoría en constitución de empresas</span> que
          necesita para que trabaje conforme a la ley y disfrute de los
          beneficios de la formalización.{" "}
        </motion.p>
        <a href="/Contacto">
          <motion.button
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.4 },
            }}
            whileHover={{ scale: 1.2 }}
          >
            Contáctanos
          </motion.button>
        </a>
      </motion.div>
    </div>
  );
}

export default EmpresaWelcome;
