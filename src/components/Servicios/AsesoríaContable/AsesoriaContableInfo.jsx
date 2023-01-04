import React from "react";
import { motion } from "framer-motion";
import QueEsUnEstudio from "../../../image/pexels-karolina-grabowska-7681097.jpg";

function AsesoriaContableInfo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="AsesoriaContableInfo-container container"
    >
      <div className="row">
        <div className="col-12 col-lg-6">
          <img src={QueEsUnEstudio} alt="" />
        </div>
        <div className="col-12 col-lg-6">
          <h3>¿Por qué necesita asesoría empresarial?</h3>
          <p>
            Las <span>empresas de asesorías contables</span> podemos hacer mucho
            por usted. Pondremos a su disposición un{" "}
            <span>asesor contable</span> que se encargue de velar porque su
            empresa cumpla con los Principios de Contabilidad Generalmente
            Aceptados (PCGA) y con las Normas Internacionales de Información
            Financiera (IFRS por sus siglas en ingles). ¡Que su negocio funcione
            de acuerdo con la ley es parte de su crecimiento! Nuestras{" "}
            <span>asesorías contables</span> lo harán posible.
          </p>
          <p>
            ¿Aún tienes dudas? ¡Conozca cuáles son las ventajas de las
            consultorías contables para su empresa!
          </p>
          <ul>
            <li>
              Evite multas por errores o faltas en la presentación de sus
              estados financieros.{" "}
            </li>
            <li>Presente sus estados financieros sin observaciones.</li>
            <li>Conozca la situación financiera real de su negocio.</li>
            <li>Estime las ganancias futuras de su empresa.</li>
            <li>
              Ahorre recursos. Nosotros ponemos a los especialistas y la
              tecnología, usted sólo paga por el servicio.
            </li>
            <li>
              No desperdicie energías ni tiempo en actividades que no sean parte
              de su core business.
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default AsesoriaContableInfo;
