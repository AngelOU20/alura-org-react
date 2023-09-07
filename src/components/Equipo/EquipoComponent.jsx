import { ColaboradorComponent } from "../";
import "./Equipo.css";
import PropTypes from "prop-types";

export const EquipoComponent = ({
  titulo,
  colorPrimario,
  colorSecundario,
  colaboradores,
}) => {
  const estiloTitulo = {
    borderColor: colorPrimario,
  };

  const backgroundColor = {
    backgroundColor: colorSecundario,
  };

  console.log(colaboradores.length > 0);

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={backgroundColor}>
          <h3 style={estiloTitulo}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <ColaboradorComponent
                key={index}
                colorPrimario={colorPrimario}
                colaborador={colaborador}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

EquipoComponent.propTypes = {
  titulo: PropTypes.string.isRequired,
  colorPrimario: PropTypes.string.isRequired,
  colorSecundario: PropTypes.string.isRequired,
  colaboradores: PropTypes.array,
};
