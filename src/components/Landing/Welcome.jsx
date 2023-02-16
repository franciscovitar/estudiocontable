import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="welcome-container">
      <motion.div className="container">
        <motion.h5
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0 },
          }}
        >
          Estudio contable
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
          Servicios contables para Pymes. Te ayudamos a tomar las mejores
          decisiones
        </motion.h1>
        <Link to="/conocenos">
          <motion.button
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.4 },
            }}
            whileHover={{ scale: 1.1 }}
          >
            Conocenos
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

export default Welcome;
