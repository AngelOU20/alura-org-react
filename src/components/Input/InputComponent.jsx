import "./Input.css";
import PropTypes from "prop-types";

export const InputComponent = ({
  title,
  placeholder,
  required,
  valor,
  setValor,
  type = "text",
}) => {
  const placeholderModificado = `${placeholder}...`;
  const manejarCambio = (e) => {
    setValor(e.target.value);
  };

  return (
    <fieldset className={`campo campo-${type}`}>
      <label>{title}</label>
      <input
        placeholder={placeholderModificado}
        required={required}
        value={valor}
        onChange={manejarCambio}
        type={type}
      />
    </fieldset>
  );
};

InputComponent.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  valor: PropTypes.string,
  setValor: PropTypes.func,
  type: PropTypes.string,
};
