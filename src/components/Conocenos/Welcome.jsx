import React from "react";
import { motion } from "framer-motion";
function Welcome() {
  return (
    <div className="conocenos-welcome-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h5>Bienvenido</h5>
        <h1>ESTUDIO CONTABLE</h1>
      </motion.div>
    </div>
  );
}

export default Welcome;
