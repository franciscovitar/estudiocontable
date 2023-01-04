import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import axios from "axios";

function Contacto() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/mail", {
      nombre: watch("nombre"),
      telefono: watch("telefono"),
      email: watch("email"),
      servicios: watch("servicio"),
    });
  };

  return (
    <div className="contacto-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="row"
      >
        <div className="contacto-container-3 col-12 col-lg-6">
          <h1>Contacto</h1>
          <p>Dejanos tu mensaje!</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>
                Nombre y Apellido: <span>*</span>
              </label>
              <input
                type="text"
                {...register("nombre", {
                  required: true,
                })}
              />
              {errors.nombre?.type === "required" && (
                <p>Este campo es requerido</p>
              )}
            </div>

            <div>
              <label>Teléfono:</label>
              <input type="text" {...register("telefono")} />
            </div>

            <div>
              <label>
                Email: <span>*</span>
              </label>
              <input
                type="text"
                {...register("email", {
                  required: true,
                  pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                })}
              />
              <div className="d-flex gap-2">
                {errors.email?.type === "required" && (
                  <p>Este campo es requerido</p>
                )}
                {errors.email?.type === "pattern" && (
                  <p>Introduce un email válido</p>
                )}
              </div>
            </div>

            <div>
              <label>
                Servicio a presupuestar: <span>*</span>
              </label>
              <select
                name="Selec"
                {...register("servicio", {
                  required: true,
                })}
              >
                {errors.servicio?.type === "required" && (
                  <p>Este campo es requerido</p>
                )}
                <option selected>Por favor seleccione</option>
                <option value="1">Certificacion de ingresos personales</option>
                <option value="2">Certificacion de origen de fondos</option>
                <option value="3">Monotributo</option>
                <option value="4">Otros</option>
              </select>
            </div>

            <div>
              <label>Consulta:</label>
              <textarea type="text" />
            </div>

            <motion.button type="submit" whileHover={{ scale: 1.1 }}>
              Enviar
            </motion.button>
          </form>
          <div className="redes">
            <motion.a
              href="https://wa.me/5493516517794?text=Hola!%20Quería%20realizar%20la%20siguiente%20consulta..."
              target="_blank"
              whileHover={{ scale: 1.1 }}
              type="button"
            >
              <span className="fw-normal">Escribinos por </span>Whatsapp{" "}
              <i class="bi bi-whatsapp"></i>
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }} type="button">
              <span className="fw-normal">Llamar </span>351 730 3606{" "}
              <i class="bi bi-telephone-fill"></i>
            </motion.a>
          </div>
        </div>
        <div className="col-12 col-lg-6 contacto-container-2 ">
          <div className="container">
            <h2>¡Hablemos de tu empresa! Consulta nuestro servicio</h2>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contacto;
