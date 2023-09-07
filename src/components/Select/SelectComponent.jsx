import "./Select.css";

const equipos = [
  "Programación",
  "Front End",
  "Data Science",
  "Devops",
  "UX y Diseño",
  "Móvil",
  "Innovación y  Gestión",
];

export const SelectComponent = () => {
  return (
    <fieldset className="lista-opciones">
      <label>Equipos</label>
      <select>
        <option className="option-default">Seleccionar equipo</option>
        {equipos.map((equipo, index) => (
          <option key={index}>{equipo}</option>
        ))}
      </select>
    </fieldset>
  );
};
