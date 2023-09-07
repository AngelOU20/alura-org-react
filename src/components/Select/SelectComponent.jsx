import "./Select.css";
import PropTypes from "prop-types";

const equipos = [
  "Programación",
  "Front End",
  "Data Science",
  "Devops",
  "UX y Diseño",
  "Móvil",
  "Innovación y  Gestión",
];

export const SelectComponent = ({ valor, setEquipo }) => {
  const manejarCambio = (e) => {
    console.log("cambio", e.target.value);
    setEquipo(e.target.value);
  };

  return (
    <fieldset className="lista-opciones">
      <label>Equipos</label>
      <select value={valor} onChange={manejarCambio}>
        <option
          value=""
          className="option-default"
          disabled
          defaultValue=""
          hidden
        >
          Seleccionar equipo
        </option>
        {equipos.map((equipo, index) => (
          <option key={index} value={equipo}>
            {equipo}
          </option>
        ))}
      </select>
    </fieldset>
  );
};

SelectComponent.propTypes = {
  valor: PropTypes.string,
  setEquipo: PropTypes.func,
};
