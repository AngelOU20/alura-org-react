import { ColaboradorComponent } from "../";
import "./Equipo.css";
import PropTypes from "prop-types";
import hexToRgba from "hex-to-rgba";

export const EquipoComponent = ({
  id,
  titulo,
  colorPrimario,
  colaboradores,
  eliminarColaborador,
  actualizarColor,
  agregarFav,
}) => {
  const estiloTitulo = {
    borderColor: colorPrimario,
  };

  const backgroundColor = {
    backgroundColor: hexToRgba(colorPrimario, 0.6),
  };

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={backgroundColor}>
          <input
            className="cambiar-color"
            type="color"
            value={colorPrimario}
            onChange={(e) => actualizarColor(e.target.value, id)}
          />
          <h3 style={estiloTitulo}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <ColaboradorComponent
                key={index}
                colorPrimario={colorPrimario}
                colaborador={colaborador}
                eliminarColaborador={eliminarColaborador}
                agregarFav={agregarFav}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

EquipoComponent.propTypes = {
  id: PropTypes.string,
  titulo: PropTypes.string.isRequired,
  colorPrimario: PropTypes.string.isRequired,
  colaboradores: PropTypes.array,
  eliminarColaborador: PropTypes.func,
  actualizarColor: PropTypes.func,
  agregarFav: PropTypes.func,
};
