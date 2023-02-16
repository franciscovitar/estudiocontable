import React from "react";
import { motion } from "framer-motion";
function Welcome() {
  return (
    <div className="conocenos-welcome-container">
      <motion.div className="container-fluid">
        <motion.h5
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0 },
          }}
        >
          Bienvenido
        </motion.h5>
        <motion.h1
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.2 },
          }}
        >
          ESTUDIO CONTABLE
        </motion.h1>
      </motion.div>
    </div>
  );
}

export default Welcome;
