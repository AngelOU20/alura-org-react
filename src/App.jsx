import { useState } from "react";
import {
  EquipoComponent,
  FooterComponent,
  FormComponent,
  HeaderComponent,
  MiOrgComponent,
} from "./components";
import { equiposData, colaboradoresData } from "./data";

function App() {
  const [mostrarForm, setMostrarForm] = useState(false);
  const [colaboradores, setColaboradores] = useState(colaboradoresData);
  const [equipos, setEquipos] = useState(equiposData);

  const cambiarMostrar = () => {
    setMostrarForm(!mostrarForm);
  };

  const registrarColaborador = (colaborador) => {
    //Spread operator
    setColaboradores([...colaboradores, colaborador]);
  };

  const eliminarColaborador = (id) => {
    const actualizarColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    setColaboradores(actualizarColaboradores);
  };

  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }

      return equipo;
    });

    setEquipos(equiposActualizados);
  };

  const crearEquipo = (nuevoEquipo) => {
    setEquipos([...equipos, { ...nuevoEquipo }]);
  };

  const agregarFav = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    });

    setColaboradores(colaboradoresActualizados);
  };

  return (
    <>
      <HeaderComponent />

      {mostrarForm && (
        <FormComponent
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}

      <MiOrgComponent cambiarMostrar={cambiarMostrar} />

      {equipos.map((equipo) => (
        <EquipoComponent
          key={equipo.titulo}
          {...equipo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          agregarFav={agregarFav}
        />
      ))}

      <FooterComponent />
    </>
  );
}

export default App;
