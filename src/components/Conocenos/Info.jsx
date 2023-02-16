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
        className="row texto container-fluid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="col-12 col-lg-6">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            src={conocenosContador}
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
            Somos un <span>Estudio Contable</span> con más de 10 años de
            experiencia en el mercado.
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
            Brindamos soluciones en
            <span>
              Asesoría Contable, Asesoría Tributaria, Asesoría Laboral, Asesoría
              Financiera, Asesoría Administrativa y Outsourcing Contable
            </span>
            a Micro y Pequeñas en empresas <span>(Mypes Pymes)</span>; que
            inician operaciones o ya tienen presencia en el mercado, ofreciendo
            un soporte y acompañamiento para el logro de sus objetivos
            contables, tributarios y financieros.
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
            Nuestro estudio contable cuenta con profesionales con gran
            trayectoria y experiencia en empresas de gran envergadura de
            diferentes sectores de negocio, como construcción, minería,
            servicios, educación, retail, comerciales y salud, por lo que
            nuestro <span>estudio contable</span> tiene la capacidad y los
            conocimientos
            <span>(know-how)</span> adecuados para brindar soluciones en el
            menor tiempo y costo, superando las expectativas de nuestros
            clientes Mypes y pymes.
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
          </motion.p>
        </div>
      </motion.div>

      {/* Items */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="row items container-fluid"
      >
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0 },
          }}
          className="col-lg-4"
        >
          <img src={Icono1} alt="" />
          <h3>Nuestros Principios</h3>
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0 },
            }}
          >
            1-Compromiso
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.1 },
            }}
          >
            2-Integridad
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
          >
            3-Trabajo en equipo
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.3 },
            }}
          >
            4-Honestidad
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.4 },
            }}
          >
            5-Respeto
          </motion.p>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.2 },
          }}
          className="col-lg-4"
        >
          <img src={Icono2} alt="" />
          <h3>Misión</h3>
          <p>
            “Ser reconocida como una empresa de consultoría que brinda
            soluciones prácticas, oportunas, flexibles, a la medida y exigencia
            de nuestros clientes, superando con satisfacción las expectativas en
            cuanto a calidad, costo y tiempo"
          </p>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.4 },
          }}
          className="col-lg-4"
        >
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
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Info;
