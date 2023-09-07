import "./Colaborador.css";
import PropTypes from "prop-types";

export const ColaboradorComponent = ({ colorPrimario, colaborador }) => {
  const backgroundColor = {
    backgroundColor: colorPrimario,
  };

  return (
    <div className="colaborador">
      <div className="encabezado" style={backgroundColor}>
        <img src={colaborador.foto} alt="Francisco" />
      </div>
      <div className="info">
        <h4>{colaborador.nombre}</h4>
        <h5>{colaborador.puesto}</h5>
      </div>
    </div>
  );
};

ColaboradorComponent.propTypes = {
  colorPrimario: PropTypes.string,
  colaborador: PropTypes.object,
};
