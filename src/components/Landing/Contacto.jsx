import React, { useState } from "react";
import { motion } from "framer-motion";
import { Formik } from "formik";
import axios from "axios";

function FormContacto() {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

  return (
    <div id="contacto" className="contacto-container">
      <section className="contacto-container-2">
        <motion.h2
          className="text-white"
          initial={{ y: -100, color: "#f1f1f1" }}
          transition={{ duration: 1 }}
          animate={{ y: 0.1, color: "#000" }}
        >
          Contactanos!
        </motion.h2>
        <motion.div
          className="met-contacto"
          initial={{ opacity: 0 }}
          transition={{ duration: 3 }}
          animate={{ opacity: 1 }}
        >
          <div className="wsp">
            <h3>Envíanos un mensaje vía Whatsapp</h3>
            <p>
              Tenés preguntas? Tenemos respuestas! Dejanos tus consultas sin
              compromiso.
            </p>
            <motion.a
              href="https://wa.me/5493516517794?text=Hola!%20Quería%20realizar%20la%20siguiente%20consulta..."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Enviar Whatsapp
            </motion.a>
          </div>
          <div className="mail">
            <h3>También nos podes dejar un mail</h3>

            <Formik
              initialValues={{
                nombre: "",
                correo: "",
                descripcion: "",
              }}
              validate={(valores) => {
                let errores = {};

                // Validacion nombre
                if (!valores.nombre) {
                  errores.nombre = "Por favor ingresa un nombre.";
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                  errores.nombre =
                    "El nombre solo puede contener letras y espacios, no debe tener más de 40 caracteres.";
                }

                // Validacion correo
                if (!valores.correo) {
                  errores.correo = "Por favor ingresa un correo electrónico.";
                } else if (
                  !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                    valores.correo
                  )
                ) {
                  errores.correo =
                    "El correo solo puede contener letras, números, puntos, guiones y guión bajo.";
                }

                // Validacion descripcion
                if (!valores.descripcion) {
                  errores.descripcion = "Por favor ingresa un mensaje.";
                }

                return errores;
              }}
              onSubmit={async (valores, { resetForm }) => {
                const url = "https://fotografia.ga/mail";
                const data = {
                  nombre: valores.nombre,
                  correo: valores.correo,
                  descripcion: valores.descripcion,
                };

                await axios
                  .post(url, data)
                  .then(function (response) {
                    console.log("success");
                  })
                  .catch(function (error) {
                    console.log(error);
                  });

                resetForm();
                cambiarFormularioEnviado(true);
                setTimeout(() => cambiarFormularioEnviado(false), 10000);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleSubmit,
                handleChange,
                handleBlur,
              }) => (
                <form className="formulario" onSubmit={handleSubmit}>
                  <div className="inputs">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      placeholder="Escribe tu nombre..."
                      value={values.nombre}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.nombre && errors.nombre && (
                      <div className="error">{errors.nombre}</div>
                    )}
                  </div>
                  <div className="inputs">
                    <label htmlFor="correo">Correo</label>
                    <input
                      type="email"
                      id="correo"
                      name="correo"
                      placeholder="Escribe tu dirección de correo..."
                      value={values.correo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.correo && errors.correo && (
                      <div className="error">{errors.correo}</div>
                    )}
                  </div>
                  <div className="inputs">
                    <label htmlFor="descripcion">Mensaje</label>
                    <textarea
                      id="descripcion"
                      name="descripcion"
                      placeholder="Escribe tu mensaje..."
                      value={values.descripcion}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></textarea>
                    {touched.descripcion && errors.descripcion && (
                      <div className="error">{errors.descripcion}</div>
                    )}
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Enviar
                  </motion.button>
                  {formularioEnviado && (
                    <p className="exito">Enviado con éxito!</p>
                  )}
                </form>
              )}
            </Formik>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default FormContacto;
