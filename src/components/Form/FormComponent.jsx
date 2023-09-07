import { ButtonComponent, InputComponent } from "../";
import { SelectComponent } from "../Select/SelectComponent";
import "./Form.css";

export const FormComponent = () => {
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
        />
        <InputComponent
          title={"Puesto"}
          placeholder={"Ingresar puesto"}
          required
        />
        <InputComponent
          title={"Foto"}
          placeholder={"Ingresar enlace de foto"}
          required
        />
        <SelectComponent />
        <ButtonComponent>Crear</ButtonComponent>
      </form>
    </section>
  );
};
