import "./Input.css";
import PropTypes from "prop-types";

export const InputComponent = ({
  title,
  placeholder,
  required,
  valor,
  setValor,
}) => {
  const placeholderModificado = `${placeholder}...`;
  const manejarCambio = (e) => {
    setValor(e.target.value);
  };

  return (
    <fieldset className="campo-texto">
      <label>{title}</label>
      <input
        placeholder={placeholderModificado}
        required={required}
        value={valor}
        onChange={manejarCambio}
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
};
