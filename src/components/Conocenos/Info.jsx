import React from "react";
import { motion } from "framer-motion";

import conocenosContador from "../../image/pexels-mikhail-nilov-8297478.jpg";

import Icono1 from "../../image/3289557-clan-group-partners-peers-people_107100.png";
import Icono2 from "../../image/flag_icon-icons.com_71193.png";
import Icono3 from "../../image/paper-airplane_icon-icons.com_50080.png";

function Info() {
  return (
    <div className="info-container container">
      {/* Texto */}

      <motion.div
        className="row texto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="col-12 col-lg-6">
          <img src={conocenosContador} alt="" />
        </div>
        <div className="col-12 col-lg-6">
          <p>
            Somos un <span>Estudio Contable</span> con más de 10 años de
            experiencia en el mercado.
          </p>
          <p>
            Brindamos soluciones en
            <span>
              Asesoría Contable, Asesoría Tributaria, Asesoría Laboral, Asesoría
              Financiera, Asesoría Administrativa y Outsourcing Contable
            </span>
            a Micro y Pequeñas en empresas <span>(Mypes Pymes)</span>; que
            inician operaciones o ya tienen presencia en el mercado, ofreciendo
            un soporte y acompañamiento para el logro de sus objetivos
            contables, tributarios y financieros.
          </p>
          <p>
            Nuestro estudio contable cuenta con profesionales con gran
            trayectoria y experiencia en empresas de gran envergadura de
            diferentes sectores de negocio, como construcción, minería,
            servicios, educación, retail, comerciales y salud, por lo que
            nuestro <span>estudio contable</span> tiene la capacidad y los
            conocimientos
            <span>(know-how)</span> adecuados para brindar soluciones en el
            menor tiempo y costo, superando las expectativas de nuestros
            clientes Mypes y pymes.
          </p>
          <p>
            Nuestros principales clientes son micro y pequeñas empresas,
            principalmente nuevas en el mercado, es por ello que los asesoramos
            desde su constitución hasta la puesta en marcha de su empresa.
            Buscamos ser socios estratégicos con nuestros clientes, en el
            sentido de estar siempre disponible para cualquier tema relacionado
            con su negocio. Contamos con profesionales con experiencia y con un
            enfoque al servicio al cliente. Creemos firmemente que nos debemos a
            nuestros clientes, por ello son el foco de nuestras acciones, las
            cuales están orientadas a satisfacer sus necesidades con un servicio
            de calidad. Somos una empresa muy flexible por lo que nos adaptamos
            a las necesidades de nuestros clientes.{" "}
          </p>
        </div>
      </motion.div>

      {/* Items */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="row items"
      >
        <div className="col-lg-4">
          <img src={Icono1} alt="" />
          <h3>Nuestros Principios</h3>
          <p>1-Compromiso</p>
          <p>2-Integridad</p>
          <p>3-Trabajo en equipo</p>
          <p>4-Honestidad</p>
          <p>5-Respeto</p>
        </div>
        <div className="col-lg-4">
          <img src={Icono2} alt="" />
          <h3>Misión</h3>
          <p>
            “Ser reconocida como una empresa de consultoría que brinda
            soluciones prácticas, oportunas, flexibles, a la medida y exigencia
            de nuestros clientes, superando con satisfacción las expectativas en
            cuanto a calidad, costo y tiempo"
          </p>
        </div>
        <div className="col-lg-4">
          <img src={Icono3} alt="" />
          <h3>Visión</h3>
          <p>
            “Brindar soporte y soluciones en temas contables, tributarios y
            empresariales a micro, pequeñas y medianas empresas establecidas en
            el Perú, con profesionales con experiencia comprobada, en constante
            capacitación y actualización, con el objetivo de agregar valor a las
            operaciones de nuestros clientes, colaboradores, accionistas y
            sociedad."
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Info;
