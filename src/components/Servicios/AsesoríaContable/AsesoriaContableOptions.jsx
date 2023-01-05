import React from "react";
import { motion } from "framer-motion";

function AsesoriaContableOptions() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className="AsesoriaContableOptions-container"
    >
      <div className=" container">
        <div>
          <h1>Le ofrecemos asesoría contable para PYMES</h1>
          <p>
            Le ofrecemos <span>asesorías contables para PYMES y MYPES</span> en
            cualquier parte del país. ¡Conozca más sobre nuestros servicios!
          </p>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <h3>Constitución de empresas</h3>
            <p>
              Nuestra <span>empresa</span> de <span>asesoría contable </span> le
              ayudará a formalizar su negocio. Tanto dándole el asesoramiento
              legal que necesite como en la búsqueda y reservación del nombre,
              la elaboración del pacto social, la presentación de los documentos
              ante SUNARP, gestión del RUC, etc.
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <h3>Contabilidad externa - Outsourcing</h3>
            <p>
              Le ofrecemos <span>asesoría contable para una microempresa</span>{" "}
              , pequeña o mediana empresa. ¡Nos podemos encargar parcial o
              totalmente de los aspectos contables de su negocio! Deje en
              nuestras manos su contabilidad y cuente con profesionales
              calificados y la tecnología necesaria para optimizar sus procesos.
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <h3>Declaraciones juradas - PDT ante SUNAT, PLAME</h3>
            <p>
              ¿Necesita ayuda para presentar sus Declaraciones Juradas mensuales
              o anuales ante SUNAT? ¡Podemos ayudarle! Nos encargaremos de que
              esta información sea proporcionada dentro de los plazos
              establecidos para que evite el pago de multas.
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <h3>Auditorías</h3>
            <p>
              Como parte de nuestra <span>asesoría contable empresarial </span>{" "}
              le ofrecemos auditorías contables. De esa manera tendrá un punto
              de vista independiente sobre sus prácticas contables, los riesgos
              de su negocio, etc. Realizamos auditorías de estados financieros,
              auditorías para efectos fiscales, revisiones de carácter
              regulatorio, etc.
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <h3>Elaboración y revisión de Estados Financieros - EEFF</h3>
            <p>
              Conozca la situación financiera de su negocio. Podemos elaborar y
              revisar el balance general, estado de resultados, estado de
              flujos, entre otros.{" "}
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <h3>
              Implementación de Normas Internacionales de Contabilidad y NIIF
              PYMES
            </h3>
            <p>
              Mejore la función financiera de su empresa a través de una mayor
              consistencia en las políticas contables. De esa forma podrá
              acceder a mercados de capital, simplificar la presentación de
              estados financieros, etc.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AsesoriaContableOptions;
