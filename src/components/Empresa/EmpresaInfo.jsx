import React from "react";
import { motion } from "framer-motion";

import Contadores from "../../image/pexels-karolina-grabowska-7681097.jpg";

function EmpresaInfo() {
  return (
    <div className="EmpresaInfo-container container">
      <motion.div className="row">
        <div className="col-12 col-lg-6">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            src={Contadores}
            alt=""
          />
        </div>
        <div className="col-12 col-lg-6">
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0 },
            }}
          >
            Las{" "}
            <span>
              características y costo de servicio de constitución de empresas
            </span>{" "}
            no son nada del otro mundo, pero si no tiene tiempo para aprenderlo
            todo, es mejor que trabaje con profesionales para que no se le
            escape nada. <span> COFIDE </span>puede ayudarle en la{" "}
            <span>constitución de empresas</span>, pero nosotros también ¡Todas
            nuestras energías estarán concentradas exclusivamente en la
            formalización de su negocio!
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
          >
            Le guiaremos en cada paso que implique la{" "}
            <span>constitución de empresa </span> o, mejor aún, ¡Lo haremos todo
            por usted!
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.4 },
            }}
          >
            ¡Cuéntenos qué necesita! ¿{" "}
            <span>Orientación en la constitución de empresas</span>? Quizá saber
            los <span>costos para constituir una empresa</span>. Cualquier
            asunto que requiera para formalizar su emprendimiento lo atenderemos
            de forma eficiente, rápida y asequible.
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.6 },
            }}
          >
            ¡<span>CONSTITUYE TU EMPRESA </span>CON NOSOTROS!
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

export default EmpresaInfo;
