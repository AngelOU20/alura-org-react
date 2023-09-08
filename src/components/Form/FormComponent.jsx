import { useState } from "react";
import { ButtonComponent, InputComponent, SelectComponent } from "../";
import "./Form.css";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

export const FormComponent = ({
  equipos,
  registrarColaborador,
  crearEquipo,
}) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  const [titulo, setTitulo] = useState("");
  const [color, setColor] = useState("");

  const manejarEnvioColaborador = (e) => {
    e.preventDefault();
    console.log("Manejar el envio");

    let datosEnviar = {
      id: uuidv4(),
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo: equipo,
    };

    console.log(datosEnviar);
    registrarColaborador(datosEnviar);
  };

  const manejarEnvioEquipo = (e) => {
    e.preventDefault();

    crearEquipo({ id: uuidv4, titulo, colorPrimario: color });
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvioColaborador}>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <InputComponent
          title={"Nombre"}
          placeholder={"Ingresar nombre"}
          required
          valor={nombre}
          setValor={setNombre}
        />
        <InputComponent
          title={"Puesto"}
          placeholder={"Ingresar puesto"}
          required
          valor={puesto}
          setValor={setPuesto}
        />
        <InputComponent
          title={"Foto"}
          placeholder={"Ingresar enlace de foto"}
          required
          valor={foto}
          setValor={setFoto}
        />
        <SelectComponent
          valor={equipo}
          setEquipo={setEquipo}
          equipos={equipos}
        />
        <ButtonComponent>Registrar colaborador</ButtonComponent>
      </form>

      <form onSubmit={manejarEnvioEquipo}>
        <h2>Rellena el formulario para crear un equipo</h2>
        <InputComponent
          title={"Título"}
          placeholder={"Ingresar título"}
          required
          valor={titulo}
          setValor={setTitulo}
        />
        <InputComponent
          title={"Color"}
          placeholder={"Ingresar color"}
          required
          valor={color}
          setValor={setColor}
        />
        <ButtonComponent>Crear equipo</ButtonComponent>
      </form>
    </section>
  );
};

FormComponent.propTypes = {
  equipos: PropTypes.array,
  registrarColaborador: PropTypes.func,
  crearEquipo: PropTypes.func,
};
