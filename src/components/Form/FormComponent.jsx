import { useState } from "react";
import { ButtonComponent, InputComponent, SelectComponent } from "../";
import "./Form.css";

export const FormComponent = () => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Manejar el envio");
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
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
        <SelectComponent />
        <ButtonComponent>Crear</ButtonComponent>
      </form>
    </section>
  );
};
