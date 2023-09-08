import "./Colaborador.css";
import PropTypes from "prop-types";
import {
  IoCloseCircleOutline,
  IoHeartOutline,
  IoHeartSharp,
} from "react-icons/io5";

export const ColaboradorComponent = ({
  colorPrimario,
  colaborador,
  eliminarColaborador,
  agregarFav,
}) => {
  // const [like, setLike] = useState(colaborador.fav);

  // const darLike = () => {
  //   setLike(!like);
  // };
  // colaborador.fav = like;

  const { id, nombre, foto, puesto } = colaborador;

  const backgroundColor = {
    backgroundColor: colorPrimario,
  };

  return (
    <div className="colaborador">
      <IoCloseCircleOutline
        onClick={() => eliminarColaborador(id)}
        className="eliminar"
      />
      <div className="encabezado" style={backgroundColor}>
        <img src={foto} alt={nombre} />
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
      </div>
      {colaborador.fav ? (
        <IoHeartSharp
          className="fav"
          onClick={() => agregarFav(id)}
          color="red"
        />
      ) : (
        <IoHeartOutline
          className="fav"
          onClick={() => agregarFav(id)}
          color="red"
        />
      )}
    </div>
  );
};

ColaboradorComponent.propTypes = {
  colorPrimario: PropTypes.string,
  colaborador: PropTypes.object,
  eliminarColaborador: PropTypes.func,
  agregarFav: PropTypes.func,
};
