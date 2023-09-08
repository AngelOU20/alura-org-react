import "./Colaborador.css";
import PropTypes from "prop-types";
import { IoCloseCircleOutline } from "react-icons/io5";

export const ColaboradorComponent = ({
  colorPrimario,
  colaborador,
  eliminarColaborador,
}) => {
  const backgroundColor = {
    backgroundColor: colorPrimario,
  };

  return (
    <div className="colaborador">
      <IoCloseCircleOutline
        onClick={() => eliminarColaborador(colaborador.id)}
        className="eliminar"
      />
      <div className="encabezado" style={backgroundColor}>
        <img src={colaborador.foto} alt={colaborador.nombre} />
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
  eliminarColaborador: PropTypes.func,
};
