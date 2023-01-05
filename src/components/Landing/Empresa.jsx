import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Empresa() {
  return (
    <div className="container-empresa">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1>¿Estas emprendiendo y quieres constituir tu empresa?</h1>
        <p>
          Te ayudamos con la constitución. Invierte en los gastos notariales y
          registrales. ¡Formalízate¡
        </p>
        <Link to="/Empresa">
          <motion.button whileHover={{ scale: 1.1 }}>
            Constituye tu empresa
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

export default Empresa;
