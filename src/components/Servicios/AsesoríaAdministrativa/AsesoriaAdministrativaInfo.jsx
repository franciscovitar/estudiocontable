import React from "react";
import { motion } from "framer-motion";
import queEsRemype from "../../../image/pexels-mikhail-nilov-8296968.jpg";
import queEsUnEstudio from "../../../image/pexels-anna-nekrashevich-6801680.jpg";

function AsesoriaAdministrativaInfo() {
  return (
    <div className="AsesoriaAdministrativaInfo-container container">
      {/* FIRST  */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="row mt-5"
      >
        <div className="col-lg-6 col-12 imagen">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            src={queEsUnEstudio}
            alt=""
          />
        </div>
        <div className="col-lg-6 col-12">
          <h2>
            ¿Por qué su empresa necesita asesoría administrativa y contable?
          </h2>
          <p>
            ¿Aún tiene dudas sobre por qué su negocio necesita contar con
            <span>asesoría contable y administrativa</span>? Estas son algunas
            razones de peso para contratar nuestros servicios de
            <span>asesoría y consultoría administrativa empresarial</span>:
          </p>
          <ul>
            <li>Analizaremos el flujo administrativo de su empresa.</li>
            <li>Identificar oportunidades para que su negocio mejore.</li>
            <li>Optimizar recursos.</li>
            <li>Generar valor en las operaciones.</li>
            <li>Reducir los desperdicios.</li>
            <li>Identificar procesos críticos para su negocio.</li>
            <li>
              Reorganizar las operaciones administrativas para generar un flujo
              constante de la información.
            </li>
            <li>Su empresa reducirá sus tiempos de inoperatividad.</li>
            <li>
              La comunicación entre todas las áreas de su negocio mejorará.
            </li>
            <li>
              En vista de que contará con toda la información de su negocio,
              organizada, completa y precisa, la toma de decisiones respecto a
              asuntos propios de su empresa será más rápida.
            </li>
          </ul>
        </div>
      </motion.div>

      {/* SECOND */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="row mt-5"
      >
        <div className="col-lg-6 col-12">
          <h2>Beneficios de nuestras asesorías para empresas</h2>
          <p>
            Contar con <span> asesoría administrativa para empresas</span> puede
            ser la clave para el crecimiento y estabilidad de su negocio. Como
            compañía de
            <span> asesoría administrativa</span> , somos conscientes de que no
            todas las empresas requieren la misma estrategia administrativa, y
            es que cada negocio es diferente, por eso desarrollamos planes que
            se adecúen al contexto, recursos, objetivos y la situación de cada
            una de ellas.
          </p>
          <p>
            Al contar con nuestra
            <span> asesoríaen procesos administrativos</span> , le ofrecemos
            estos y muchos otros beneficios:
          </p>
          <ul>
            <li>
              Podemos encargarnos de administrar sus recursos de soporte, por
              ejemplo, lo relacionado a trámites, licencias, el área de recursos
              humanos, cobranzas, facturación, tesorería, seguros, otras.
            </li>
            <li>
              Le orientaremos para que pueda estructurar áreas y procesos,
              enfocados en la eficiencia.
            </li>
            <li>
              Tendrá un mejor control de las operaciones o áreas de soporte de
              su negocio.
            </li>
            <li>
              Si aún no es una empresa consolidada, le proporcionamos nuestro
              talento humano y herramientas para la creación y formalización de
              su empresa.
            </li>
            <li>
              Contar con un equipo de profesionales, especialistas en diferentes
              temas, a los que podrá recurrir en caso tenga alguna consulta o
              inconveniente.
            </li>
            <li>
              Aplicar las diferentes filosofías y teorías que buscan la
              eficiencia, tales como Lean Management, Calidad Total, Mejora
              Continua, 5S, Just in Time, Reingeniería, otras.
            </li>
          </ul>
        </div>
        <div className="col-lg-6 col-12 imagen">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            src={queEsRemype}
            alt=""
          />
        </div>
      </motion.div>
    </div>
  );
}

export default AsesoriaAdministrativaInfo;
