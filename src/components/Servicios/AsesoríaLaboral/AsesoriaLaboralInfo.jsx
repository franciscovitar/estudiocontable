import React from "react";
import { motion } from "framer-motion";
import AsesoriaLaboralContadores from "../../../image/pexels-anna-nekrashevich-6801680.jpg";

import AsesoriaLaboralMina from "../../../image/pexels-mikhail-nilov-8296968.jpg";

function AsesoriaLaboralInfo() {
  return (
    <div className="asesoria-laboral-info-container  container">
      {/* First */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="first row"
      >
        <div className="col-lg-6 col-12">
          <h3>Servicio de asesoría laboral para empresas</h3>
          <p>
            Brindamos el <span> servicio de asesoría laboral </span>, con el
            objetivo de que nuestros clientes obtengan todo el soporte legal que
            necesitan en relación con:
          </p>
          <ul>
            <li>Contrataciones.</li>
            <li>Compensaciones.</li>
            <li>Liquidaciones.</li>
          </ul>
          <p>
            Nuestra <span>empresa de asesoría laboral</span> puede facilitarle
            todas la herramientas legales que requiera, para que aproveche al
            máximo los beneficios e incentivos que le proporciona seguir las
            normas laborales vigentes. Con nuestra ayuda logrará reducir costos
            y brindar a sus trabajadores los beneficios que les corresponden de
            acuerdo con la ley.
          </p>
        </div>

        <div className="col-lg-6 col-12">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            src={AsesoriaLaboralContadores}
            alt=""
          />
        </div>
      </motion.div>

      {/* SECOND */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="second"
      >
        <h3>¿Por qué es importante contar con asesoría en temas laborales?</h3>
        <p>
          Los servicios de <span>asesoría en temas laborales</span> no se
          restringen a la contratación de personal nuevo, extranjero o nacional,
          para una empresa, sino que van más allá. Una compañía de
          <span>asesoría laboral</span> puede encargarse de todo lo que compete
          al área de recursos humanos de un negocio, por lo que su papel
          comprende más que solo contrataciones, por ejemplo, la {""}
          <span>gestión de nóminas </span> , la{" "}
          <span>evaluación de puestos de trabajo</span> , la
          <span> preparación de la planilla mensual</span>, el{" "}
          <span>pago de indemnizaciones</span>, etc.
        </p>
        <p>
          Nos adecuamos a las necesidades de cada cliente, por lo que podemos
          concentrarnos en todo lo que compete a sus asuntos laborales, o solo a
          los aspectos puntuales que su empresa demande.
        </p>
      </motion.div>

      {/* TRES */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="row third"
      >
        <div className="col-lg-6 col-12">
          <h3>
            Ventajas de contratar el servicio de asesoría laboral para empresas
          </h3>
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            src={AsesoriaLaboralMina}
            alt=""
          />
        </div>

        <div className="col-lg-6 col-12">
          <p>
            Contar con una <span>empresa de asesoría laboral</span>, le permite
            a su negocio concentrarse en su core business, lo que le ayudará a
            mejorar su productividad y dejar en manos especializadas los
            aspectos laborales de su compañía. Estas son otras ventajas de
            contar con <span>asesoría laboral</span>:
          </p>
          <ul>
            <li>
              Los asuntos laborales son un aspecto clave para el desarrollo de
              toda empresa, y es mejor contar con profesionales que se encarguen
              de este sector, permitiendo que la eficiencia del negocio mejore.
            </li>
            <li>
              Las empresas de asesoría laboral pueden ayudar a automatizar gran
              parte de los procesos que le competen.
            </li>
            <li>
              La eficiencia del manejo de temas laborales permite que la
              relación entre los trabajadores y el empresario mejore, así como
              la productividad de la empresa.
            </li>
            <li>
              Los asesores laborales pueden ayudar a una empresa a resolver
              dudas respecto a contrataciones, leyes laborales, entre otros
              asuntos de este tópico, por ejemplo, resolver cuál es el mejor
              tipo de contrato para cada puesto de trabajo.
            </li>
            <li>
              Permite a las empresas acceder a soluciones rápidas en situaciones
              críticas, por ejemplo, despidos, accidentes en el centro de
              trabajo, etc.
            </li>
          </ul>
        </div>
      </motion.div>

      {/* FORTH */}

      <div className="forth">
        <h3>¿Por qué contar con nuestros servicios?</h3>
        <p>
          Nuestro <span>estudio contable</span> está conformado por
          especialistas en<span> derecho laboral</span>. Somos un equipo
          multidisciplinario con una vasta experiencia en el rubro, ya que hemos
          trabajado, por más de 10 años, con grandes empresas de diferentes
          sectores.{" "}
        </p>
        <p>
          Le ofrecemos la asesoría eficiente y asertiva que necesita para no
          cometer errores u omisiones, y es que somos conscientes de que este
          tipo de descuidos suelen acarrear grandes problemas a pymes y mypes
          como la suya. Con el servicio que ofrecemos su empresa no cometerá más
          esos errores en el ámbito laboral, lo que evitará que genere multas o
          tenga que pagar costosas indemnizaciones.
        </p>
        <p>
          Al ser más consciente de lo que implica cumplir con las leyes
          laborales vigentes y resolver todas las dudas que tiene sobre su
          negocio, su empresa tendrá mayor respaldo en la toma de decisiones,
          conseguirá formular contratos legales más provechosos y tendrá una
          mejor gestión de sus recursos.
        </p>
      </div>
    </div>
  );
}

export default AsesoriaLaboralInfo;
