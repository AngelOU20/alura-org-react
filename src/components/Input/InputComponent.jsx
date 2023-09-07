import "./Input.css";
import PropTypes from "prop-types";

export const InputComponent = ({ title, placeholder }) => {
  const placeholderModificado = `${placeholder}...`;

  return (
    <fieldset className="campo-texto">
      <label>{title}</label>
      <input placeholder={placeholderModificado} />
    </fieldset>
  );
};

InputComponent.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
