import "./Button.css";
import PropTypes from "prop-types";

export const ButtonComponent = ({ children }) => {
  return (
    <>
      <button className="boton">{children}</button>
    </>
  );
};

ButtonComponent.propTypes = {
  children: PropTypes.node,
};
